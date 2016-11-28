//Ejemplo de un componente React simple que hace una petición AJAX
var React = require('react')
var MiComponente = React.createClass({
    componentDidMount: function () {
      console.log("componente montado!!")
    },
    getInitialState: function () {
      return {mensaje: ''}
    },
    obtenerMensaje: function () {
      fetch('http://' + window.location.host + '/api/saludo')
          .then(function(respuesta){
              return respuesta.json()
          })
          .then(function(resultado){
              //el API también nos envía la hora, pero la ignoramos
              this.setState({mensaje:resultado.mensaje})
          }.bind(this))
    },
    render: function () {
        return <div>
              <h1>El API dice: {this.state.mensaje}</h1>
              <button onClick={this.obtenerMensaje}>Obtener mensaje del API</button>
            </div>
    }
})

module.exports = MiComponente
