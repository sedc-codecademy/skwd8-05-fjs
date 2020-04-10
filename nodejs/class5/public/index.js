fetch('//localhost/api')
.then(response => response.json())
.then(response => {
    let div = document.createElement('div');

    response.forEach(element => {
        div.innerHTML += element;
    });

    document.body.appendChild(div);
})


fetch('//localhost/preferences')
.then(response => response.json())
.then(response => {
    document.body.style.backgroundColor = response.background;
    document.body.style.fontSize = response.fontSize;
    document.body.style.color = response.color;
})