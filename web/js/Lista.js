var React = require('react')
var Item = require('./Item')

module.exports = React.createClass({
    verDetalles: function (i) {
       console.log('ver detalles de: ' + i)
    },
    render: function () {
        var prods = []
        for (var i=0; i<this.props.items.length; i++) {
            var actual = this.props.items[i]
            prods.push(<Item key={i}
                        pos={i}
                        nombre={actual.nombre}
                        cantidad={actual.cantidad}
                        handleVerDetalles={this.verDetalles}/>)
        }
        return <div id="lista">
                  <h1>Tu lista de la compra</h1>
                  {prods}
               </div>
    }
})