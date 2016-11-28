var React = require('react')
var Item = require('./Item')
var DetallesItem = require('./DetallesItem')
var API_lista = require('./servicios/API')

module.exports = React.createClass({
    componentDidMount: function () {
      API_lista.obtenerItems()
          .then(datos => {
              this.setState({items: datos})
          })
    },
    getInitialState : function () {
      return {items:[]}
    },
    verDetalles: function (i) {
       this.setState({detalle:i})
    },
    ocultarDetalles: function () {
       this.setState({detalle:undefined})
    },
    render: function () {
        var prods = []
        for (var i=0; i<this.state.items.length; i++) {
            var actual = this.state.items[i]
            var elemento
            if (this.state.detalle==i) {
                elemento = <DetallesItem key={i}
                                     pos={i}
                                     nombre={actual.nombre}
                                     cantidad={actual.cantidad}
                                     comentario={actual.comentario}
                                     handleOcultarDetalles={this.ocultarDetalles}/>
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
