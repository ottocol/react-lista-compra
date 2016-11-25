var React = require('react')

module.exports = React.createClass({
    verDetalles : function (evento) {
       this.props.handleVerDetalles(this.props.pos)
    },
    render: function () {
        return <div className="item">
               <span className="nombre">{this.props.nombre}</span>&nbsp;
               <span className="detalles">
               <a href="#" onClick={this.verDetalles}>Detalles</a></span>
        </div>
    }
})

