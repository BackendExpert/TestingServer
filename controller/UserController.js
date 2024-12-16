const UserModel = require("../models/user");

const UserContoller = {
    CreateNewUser: async(req, res) => {
        try{
            const {
                name,
                email,
                age
            } = req.body;


            const NewUser = await UserModel.create({
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            })

            if(NewUser){
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

module.exports = UserContoller;