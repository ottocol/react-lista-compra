import React from 'react'
import Item from './Item'
import DetallesItem from './DetallesItem'
import API_lista from './servicios/API'
import EmisorEventos from './servicios/EmisorEventos'

class Lista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items:[]}
        this.verDetalles = this.verDetalles.bind(this)
        this.ocultarDetalles = this.ocultarDetalles.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    componentDidMount() {
        //escuchamos el evento 'nuevoItem' en el bus de eventos
        //si se recibe el evento hay que añadir el item a la lista
        EmisorEventos.eventEmitter.addListener('nuevoItem', this.addItem)
        //le pedimos los items al API
        this.refrescarItems()
    }
    
    addItem(nuevo) {
      var items = this.state.items
      items.push(nuevo)
      this.setState({items: items, detalle:undefined})
    }

    refrescarItems() {
        new API_lista().obtenerItems()
            .then(datos => {
                this.setState({items: datos})
            })
    }

    verDetalles(i) {
       this.setState({detalle:i})
    }

    ocultarDetalles() {
       this.setState({detalle:undefined})
    }

    render() {
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
                                 handleVerDetalles={this.verDetalles}/>
            }
            prods.push(elemento)
        }
        return <div id="lista">
                  <h1>Tu lista de la compra</h1>
                  {prods}
               </div>
    }
}

export default Lista