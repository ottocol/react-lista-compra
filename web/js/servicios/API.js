
module.exports  = {
    API_BASE_URL : 'http://localhost:3000/api',
    ITEMS_URL : '/items',
    obtenerItems: function () {
        return fetch(this.API_BASE_URL + this.ITEMS_URL)
            .then(function(response) {
                if (response.ok)
                    return response.json()
            }).then(function (json) {
                return new Promise(function (resolve, reject) {
                    resolve(json)
                })
            })
    }

}
