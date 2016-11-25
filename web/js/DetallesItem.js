var React = require('react')

module.exports = React.createClass({
    ocultarDetalles: function () {
      this.props.handleOcultarDetalles(this.props.pos)
    },
    render: function () {
        return <div className="detallesItem">
              <span className="nombre">{this.props.nombre}</span>&nbsp;-&nbsp;
              <span className="cantidad">{this.props.cantidad}</span>
              <div className="comentario">
                {this.props.comentario}
              </div>
              <a href="#" onClick={this.ocultarDetalles}>Ocultar detalles</a>
            </div>
    }
})