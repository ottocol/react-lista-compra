import React from 'react'

class DetallesItem extends React.Component {
    constructor(props) {
      super(props)
      this.ocultarDetalles = this.ocultarDetalles.bind(this)
    }
    ocultarDetalles() {
      this.props.handleOcultarDetalles(this.props.pos)
    }
    render () {
        return <div className="detallesItem">
              <span className="nombre">{this.props.nombre}</span>&nbsp;-&nbsp;
              <span className="cantidad">{this.props.cantidad}</span>
              <div className="comentario">
                {this.props.comentario}
              </div>
              <a href="#" onClick={this.ocultarDetalles}>Ocultar detalles</a>
            </div>
    }
}

export default DetallesItem