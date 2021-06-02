


const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://reqres.in/users',true);

    xhr.send();
}