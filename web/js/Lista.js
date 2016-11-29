var React = require('react')
var Item = require('./Item')
var DetallesItem = require('./DetallesItem')
var API_lista = require('./servicios/API')
var EventBus = require('./servicios/EventBus')


module.exports = React.createClass({
    componentDidMount: function () {
        //escuchamos el evento 'nuevoItem' en el bus de eventos
        //si se recibe el evento hay que añadir el item a la lista
        EventBus.eventEmitter.addListener('nuevoItem', this.addItem)
        //le pedimos los items al API
        this.refrescarItems()
    },
    getInitialState : function () {
      return {items:[]}
    },
    addItem: function (nuevo) {
      var items = this.state.items
      items.push(nuevo)
      this.setState({items: items})
    },
    refrescarItems: function () {
        API_lista.obtenerItems()
            .then(datos => {
                this.setState({items: datos})
            })
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
