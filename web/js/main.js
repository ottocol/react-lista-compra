import React from 'react'
import ReactDOM from 'react-dom'

import Lista from './Lista'
import NuevoItem from './NuevoItem'


ReactDOM.render(<Lista/>,
    document.getElementById('componenteLista'))
ReactDOM.render(<NuevoItem/>,
    document.getElementById('componenteNuevoItem'))
