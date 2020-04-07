fetch('http://localhost/api/users')
.then(response => response.json())
.then(response => {
    console.log(response);
})