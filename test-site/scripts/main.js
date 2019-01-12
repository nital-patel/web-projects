var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mysrc = myImage.getAttribute('src');
    if (mysrc === 'images/download.jpeg') {
        myImage.setAttribute('src', 'images/Logo-Google-Chrome.png');
    } else {
        myImage.setAttribute('src', 'images/download.jpeg');

    }
}
    function setUserName() {
        var myName = prompt('please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Google is cool,' + myName;
        if(!localStorage.getItem('name')) {
            setUserName();
        } else {
            var storedName = localStorage.getItem('name');
            myHeading.textContent = 'Mozilla is cool, ' + storedName;
        }

    }
myButton.onclick = function() {
    setUserName();
}


