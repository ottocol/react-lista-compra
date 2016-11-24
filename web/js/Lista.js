var React = require('react')
var Item = require('./Item')
var DetallesItem = require('./DetallesItem')

module.exports = React.createClass({
    getInitialState : function () {
      return {}
    },
    verDetalles: function (i) {
       this.setState({detalle:i})
    },
    render: function () {
        var prods = []
        for (var i=0; i<this.props.items.length; i++) {
            var actual = this.props.items[i]
            var elemento
            if (this.state.detalle==i) {
                elemento = <DetallesItem key={i}
                                     pos={i}
                                     nombre={actual.nombre}
                                     cantidad={actual.cantidad}
                                     comentario={actual.comentario}/>
            }
            else {
                elemento = <Item key={i}
                                 pos={i}
                                 nombre={actual.nombre}
                                 cantidad={actual.cantidad}
                                 handleVerDetalles={this.verDetalles}/>
            }
            prods.push(elemento)
        }
        return <div id="lista">
                  <h1>Tu lista de la compra</h1>
                  {prods}
               </div>
    }
})