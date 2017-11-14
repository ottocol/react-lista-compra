import React  from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.verDetalles = this.verDetalles.bind(this)
    }
    verDetalles(evento) {
       this.props.handleVerDetalles(this.props.pos)
    }
    render() {
        return <div className="item">
               <span className="nombre">{this.props.nombre}</span>&nbsp;
               <span className="detalles">
               <a href="#" onClick={this.verDetalles}>Detalles</a></span>
        </div>
    }
}

export default Item

