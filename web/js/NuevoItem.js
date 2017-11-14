var React = require('react')
var API_lista = require('./servicios/API')
var EventBus = require('./servicios/EventBus')

class NuevoItemComponente extends React.Component {
    constructor(props) {
        super(props)
        this.clickAdd = this.clickAdd.bind(this)
    }
    clickAdd() {
       var nuevo = {
           nombre: this.campoNombre.value,
           cantidad: this.campoCantidad.value,
           comentario: this.campoComentario.value
       }
       API_lista.addItem(nuevo).then(function(datos){
           EventBus.eventEmitter.emitEvent('nuevoItem', [nuevo])
       })
    }
    render() {
        return <div>
            <h1>Nuevo item</h1>
            <input type="text" placeholder="Nombre..."
                   ref={(campo)=>{this.campoNombre=campo}}/> <br/>
            <input type="text" placeholder="Cantidad..."
                   ref={(campo)=>{this.campoCantidad=campo}}/> <br/>
            <textarea placeholder="Escribe un comentario..."
                      ref={(campo)=>{this.campoComentario=campo}}/> <br/>
            <button onClick={this.clickAdd}>Añadir</button>
        </div>
    }
}
module.exports = NuevoItemComponente
