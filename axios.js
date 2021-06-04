console.log('axios.js');

document.getElementById('get').addEventListener('click', getData);
document.getElementById('post').addEventListener('click', postData);
document.getElementById('put').addEventListener('click', putData);
document.getElementById('patch').addEventListener('click', patchData);
document.getElementById('delete').addEventListener('click', deleteData);
document.getElementById('sim').addEventListener('click', simData);
document.getElementById('customHeader').addEventListener('click', customHeaderData);
document.getElementById('transformResponse').addEventListener('click', transformResponseData);
document.getElementById('error').addEventListener('click', errorData);
document.getElementById('cancelToken').addEventListener('click', cancelTokenData);

function getData(){
    console.log('getData');
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', { timeout: 5000 })
    // .then(res => console.log(res))
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}

function postData(){
    console.log('postData');
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'title',
        completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err.response))
}

function putData(){
    console.log('put');
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        title: 'updated title',
        completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err.response))
}

function patchData(){
    console.log('patch');
    axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
        title: 'updated title',
        completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err.response))
}

function deleteData(){
    console.log('delete');
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err.response))
}

function simData(){
    console.log('simultaneous');
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(axios.spread((todos, posts) => {
        console.log(todos);
        console.log(posts);
        showOutput(posts);
    }))
    .catch(err => console.error(err.response))
}

//intercepting requests and responses
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}. (interceptors.request.use)`);
    return config
},
error => {
    return Promise.reject(error);
})

//custom headers
function customHeaderData(){
    console.log('customHeaderData');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'sometoken'
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'title',
        completed: false
    }, config)
    .then(res => showOutput(res))
    .then(err => console.log(err));
}

//transforming requests and responses
function transformResponseData(){
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'Hello World'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })
    }
    axios(options).then(res => showOutput(res));
}

//axios global
axios.defaults.headers.common['X-Auth-Token'] = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

//error
function errorData(){
    axios
        .get('https://jsonplaceholder.typicode.com/todoss', {
            // validateStatus: function(status) {
            //     return status < 500; //Reject only if status is greater or equal to 500
            // }
        })
        .then(res => showOutput(res))
        .catch(err => {
            if(err.response){
                //server respond with a status other than 200 range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if(err.request) {
                //Request was made but no response
                console.error(err.request);
            } else {
                console.error(err.message);
            }
        })
}

function cancelTokenData() {
    const source = axios.CancelToken.source();
    axios
        .get('https://jsonplaceholder.typicode.com/todos', {
            cancelToken: source.token
        })
        .then(res => showOutput(res))
        .catch(thrown => {
            if(axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
            }
        });

        if(true){
            source.cancel('Request canceled!')
        }
}

//axios instance
const axiosInstance = axios.create({
    //other custom settings
    baseURL: 'https://jsonplaceholder.typicode.com'
});
// axiosInstance.get('/comments').then(res => showOutput(res));



function showOutput(res){
    document.getElementById('res').innerHTML = `
        <div class="card card-body my-4">
            <h3>Status: ${res.status}</h3>
            <h3>Method: ${(res.config.method).toUpperCase()}</h3>
        </div>
        <div class="card my-3">
            <div class="card-header">
                Headers
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.headers, null, 2)}</pre>
            </div>
        </div>
        <div class="card my-3">
            <div class="card-header">
                data
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.data, null, 2)}</pre>
            </div>
        </div>
        <div class="card my-3">
            <div class="card-header">
                config
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.config, null, 2)}</pre>
            </div>
        </div>
    `
}