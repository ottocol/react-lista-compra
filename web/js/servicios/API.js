
class API_lista  {
    constructor() {
        this.API_URL = 'http://localhost:3000/api/items'
    }

    obtenerItems() {
        return fetch(this.API_URL)
            .then(function(response) {
                if (response.ok)
                    return response.json()
            })
    }
    addItem(item) {
        return fetch(this.API_URL, {
                   method: 'POST',
                   headers: {
                       'Content-type':'application/json'
                   },
                   body: JSON.stringify(item)
               }).then(function (respuesta) {
                   if (respuesta.ok)
                      return respuesta.json()
               })
    }
}

export default API_lista
