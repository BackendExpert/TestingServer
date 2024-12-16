const ProdcutModel = require('../models/product')

const ProdcutController = {
    CreateNewProduct: async (req, res) => {
        try{
            const {
                id,
                name
            } = req.body

            const newProduct = await ProdcutModel.create({
                id:id,
                name:name
            })
            
            if(newProduct){
                return res.json({ Status: "Success"})
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = ProdcutController;