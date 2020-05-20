function getCurrentUser()
{
    return JSON.parse(localStorage.getItem('user'));
}

if(getCurrentUser())
{
    console.log(`Current user is: `, getCurrentUser())
}
else
{
    window.location.href = 'login.html';
}