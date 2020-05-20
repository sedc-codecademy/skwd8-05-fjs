const doLogin = async (e) =>
{
    e.preventDefault();

    let formData = new FormData(document.querySelector('[name="loginForm"]'));
    
    let email = formData.get('email');
    let password = formData.get('password');

    let user;

    if(email && password)
    user = await makeLoginCall({email, password});
    else
    alert('Missing email or password');

    if(user)
    window.location.href = 'index.html';

    return false;
}

//Simulate backend call
const mockedMakeLoginCall = ({email, password}) => {
    return new Promise((result, reject) => {
        if(email === 'test@test.com' && password == '123456')
        {
            let data = {id: 1, email: email, password: password};
            localStorage.setItem('user', JSON.stringify(data));
            result(data)
        }
        else
        {
            localStorage.removeItem('user');
            reject({error: {message:"Wrong credentials"}});
        }
    })
}

const makeLoginCall = ({email, password}) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(data => {
        if( ! data.error )
        {
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        }
        else
        return false
    })
    .catch(e => {
        console.log(e);
        localStorage.removeItem('user');
        return false;
    })
}

document.querySelector('[name="submitLoginForm"]').onclick = doLogin;