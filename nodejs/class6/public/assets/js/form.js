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

    let data = Object.assign({}, 
            loopThroughElements(inputs), 
            loopThroughElements(txtArea));


    createNewTodo(data)
}

document.querySelector(".sendFormBtn").onclick = submitForm;
