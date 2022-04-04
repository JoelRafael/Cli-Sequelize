const {Address} = require('../database/db')
module.exports = {
    async all(req, res){
        let addrres = await Address.findAll({
            attributes:['street'],
            include:{
                association:'residente',
                attributes:['name']
            }
        })
    }
}