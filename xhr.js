const requestURL = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

function sendRequest(method, url, body= null) {
    return new Promise(() => {
        xhr.open('GET', requestURL)
        xhr.responseType = 'json'
        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log(xhr.response)
            } else {
                console.log(xhr.response);
            }
        }
        xhr.onerror = () => {
            console.log(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}

// sendRequest('GET', requestURL,{
const body = {
    name:'Peter',
    age: '20'
}
sendRequest('GET', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
