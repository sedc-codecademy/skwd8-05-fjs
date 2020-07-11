const makeCheckMeCall = () =>
{
    fetch(`//localhost:8080/users/me`)
    .then((response) => response.json())
    .then((response) => {
        if( ! response.error )
        showLoggedInUser(response);
        else
        showNotLoggedInUser()
    })
    .catch((e) => {
        console.log(e);
    })
}

const hideDivs = () => {
    let loggedIn = document.querySelector("#loggedIn");
    let notLoggedIn = document.querySelector("#notLoggedIn");

    loggedIn.style.display = 'none';
    notLoggedIn.style.display = 'none';
}

const showLoggedInUser = (user) => {
    hideDivs();

    let div = document.querySelector("#loggedIn");
    div.style.display = 'block';
    
    let html = `
        <button onclick="logout()">Logout</button>
    `;

    for(let x in user)
    {
        html += `${x} : ${user[x]}
        `;
    }

    div.innerHTML = html;
}

const showNotLoggedInUser = () => {
    hideDivs();

    let div = document.querySelector("#notLoggedIn");
    div.style.display = 'block'
}

const logout = () => {
    
    fetch(`http://localhost:8080/logout`)
    .then(response => response.json())
    .then(response => {makeCheckMeCall()})
    .catch(e => console.log(e))
}

const makeNewLogin = () => {

    let form = {
        email: document.querySelector('input[name="email"]').value,
        password: document.querySelector('input[name="password"]').value
    };

    console.log('make fetch call', form);

    fetch('http://localhost:8080/login', {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(response => {
       
        if(response && response.id)
        showLoggedInUser(response);
        else
        alert(`Email or password doesn't match`)
    })
    .catch(e => {
        console.log(e)
    })
}











makeCheckMeCall();