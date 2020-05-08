function getCurrentUser()
{
    fetch('//localhost/users/currentuser', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => {
        let div = document.getElementById('currentuser');
        
        if( ! div )
        window.location.href = '//localhost/index.html';
        
        div.innerHTML = `
        <span>${data.id}</span>
        <span>${data.email}</span>
        <span>${data.dob}</span>
        `;
    })
}

getCurrentUser();