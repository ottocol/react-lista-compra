var React = require('react')
var ReactDOM = require('react-dom')

var Lista = require('./Lista')

var items = [
    {id: 10, nombre: 'pan', cantidad: '1 barra', comentarios:'que sea casero'},
    {id: 20, nombre: 'ron', cantidad: '2 botellas', comentarios:'almirante'},
    {id: 44, nombre: 'tomates', cantidad: '6', comentarios:'de rama, mejor'}
]

ReactDOM.render(<Lista items={items}/>,
    document.getElementById('miComponente'))