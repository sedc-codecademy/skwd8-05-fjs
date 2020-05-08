function tryLogin()
{
    let email = document.querySelector('input[name="email"]').value;
    let pass = document.querySelector('input[name="password"]').value;

    makeLoginCall(email, pass);
}

function makeLoginCall(email, password)
{
    fetch('//localhost/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = '//localhost/home.html'
    }).catch((e) => {
        console.log(e);
    })
}