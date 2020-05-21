//Will take care about UI event

const loginModel = new LoginModel()

const markFieldsWithRed = (fields) =>
{
    fields.map((fieldName) => {
        document.querySelector(`[name="${fieldName}"]`).style.borderColor = 'red';
    })
}

document.querySelector('.login-btn').onclick = async (event) => {
    event.preventDefault();
    let result = await loginModel.makeLoginCall();

    if(result instanceof Array)
    markFieldsWithRed(result);
    else
    {
        alert(JSON.stringify(result))
        window.location.href = 'index.html';
    }

    return false;
} 

let inputs = document.querySelectorAll('input');

Array.from(inputs).map(input => {
    
    input.onkeyup = ((e) => {
        if(e.target.value.length)
        input.style.borderColor = 'unset';
        else
        input.style.borderColor = 'black';
    })
})