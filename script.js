const ul = document.querySelector('#output');

let name = '';

var addTime = document.getElementById('add');
addTime.addEventListener('click', getM);
var start = "Тут мы составляем список, пишите ниже";

function getM()  {
    var getMessage = document.getElementById('get_message').value;   
    printMessage(getMessage);
    document.getElementById('get_message').value=null;
}

printMessage(start);

function printMessage(text)  {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

(function() {
    document.getElementById('get_message').addEventListener('keydown', function(e)  {
        if (e.keyCode === 13)  {
            printMessage(this.value);
            document.getElementById('get_message').value=null;
        }
    });
})();