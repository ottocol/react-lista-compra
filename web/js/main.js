var React = require('react')
var ReactDOM = require('react-dom')

var Lista = require('./Lista')
var NuevoItem = require('./NuevoItem')




ReactDOM.render(<Lista/>,
    document.getElementById('componenteLista'))
ReactDOM.render(<NuevoItem/>,
    document.getElementById('componenteNuevoItem'))
