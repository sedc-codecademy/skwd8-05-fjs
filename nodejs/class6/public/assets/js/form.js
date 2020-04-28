//Loop throught the array with elements gathered in submitForm function and return object
const loopThroughElements = (elementsArray) => {
    let data = {};

    Array.from(elementsArray).map((el) => {
        if(el.getAttribute('type') !== 'button')
        data[el.getAttribute('name')] = el.value;
    });

    return data;
}

//Activates on form submit
const submitForm = (e) => {
    let form = document.querySelector('.todoForm');
    let inputs = form.querySelectorAll('input');
    let txtArea = form.querySelectorAll('textarea');
	
//Create new object with data from form elements
    let data = Object.assign({}, 
            loopThroughElements(inputs), 
            loopThroughElements(txtArea));

//Calling createNewTodo function created in call.js file
    createNewTodo(data)
}


//Activate submitForm function on click on sendFormButton
document.querySelector(".sendFormBtn").onclick = submitForm;
