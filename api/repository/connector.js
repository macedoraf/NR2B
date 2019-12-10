const mySql = require('mysql')



connect = function () {

    database.connect((eer) => {
        if (eer){
            console.log('Error connecting database...',err)
            return
        }
    
        console.log('Connection successful')
    })
}

disconnect = function () {
    database.end((err) => {
        if(err){
            console.log('Erro to finish connection...',err)
            return
        }
    
        console.log('The connection was finish')
    })
}
