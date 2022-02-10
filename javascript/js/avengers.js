//API
var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoffer', 'Steve Rogers', 'Arande Souza', 'teste']

function listaVingadores() {

    var ul = document.getElementById('avengersList')
    ul.innerHTML = ''

    avengers.forEach(function (a) {

        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)


    })
}