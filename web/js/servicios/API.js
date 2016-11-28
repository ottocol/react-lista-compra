
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

}
