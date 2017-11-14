import EventEmitter from 'wolfy87-eventemitter'

class EmisorEventos {
  constructor(){
    this.eventEmitter = new EventEmitter
  }
}
//esto exporta LA MISMA INSTANCIA a todos los módulos que hagan import
export default new EmisorEventos