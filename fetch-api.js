console.log('fetch api');

const demo = document.getElementById('demo');
const getCta = document.createElement('button');
const getUser = document.createElement('button');
const postData = document.createElement('button');
getCta.innerText = 'get text';
getUser.innerText = 'get user'
postData.innerText = 'post data'

const outputText = document.createElement('div');
const outputText2 = document.createElement('div');
const outputText3 = document.createElement('div');

demo.appendChild(getCta);
demo.appendChild(outputText);
demo.appendChild(getUser);
demo.appendChild(outputText2);
demo.appendChild(postData);
demo.appendChild(outputText3);

getCta.addEventListener('click', getText);
getUser.addEventListener('click', getUserList);
postData.addEventListener('click', getPostData);

function getText(){
    console.log('get text file');
    fetch('sample.txt')
    .then((res) => res.text()) //or res.json()
    .then((data) => outputText.innerText = data);
}

function getUserList() {
    fetch('users.json')
    .then(res => res.json())
    .then(data => {
        let output = '<h2>Users</h2>';
        data.forEach(user => {
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>name: ${user.name}</li>
                    <li>email: ${user.email}</li>
                </ul>
            `
        });
        outputText2.innerHTML = output;
    })
}
function getPostData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let output3 = '<h3>Posts</h3>';
        data.forEach(post => {
            output3 += `
                <div>
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                </div>
            `
        });
        outputText3.innerHTML = output3;
    })
}


const postPostData = document.getElementById('postPostData');

postPostData.addEventListener('submit', postFormData);

function postFormData(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
}