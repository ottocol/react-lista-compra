
module.exports  = {
    API_URL : 'http://localhost:3000/api/items',
    obtenerItems: function () {
        return fetch(this.API_URL)
            .then(function(response) {
                if (response.ok)
                    return response.json()
            }).then(function (json) {
                return new Promise(function (resolve, reject) {
                    resolve(json)
                })
            })
    },
    addItem: function (item) {
        return fetch(this.API_URL, {
                   method: 'POST',
                   headers: {
                       'Content-type':'application/json'
                   },
                   body: JSON.stringify(item)
               }).then(function (respuesta) {
                   return respuesta.json()
               })
    }

}
