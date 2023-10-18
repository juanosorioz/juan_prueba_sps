const User = require('../models/Users')

exports.crearUsers = async (req, res) => {
    try {
        let user;
        user = new User(req.body);
        await user.save();
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}

exports.obtenerUsers = async (req,res) =>{
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}
exports.obtenerUser = async (req,res) =>{
    try {
        let user = await User.find(req.params.id);
        if(!user){
            res.status(500).send('El Usuario no existe')
        }
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}


exports.deleteUser = async (req,res) =>{
    try {
        let user = await User.findById(req.params.id)

        if(!user){
            res.status(500).send('El Usuario no existe')
        }

        await User.findByIdAndRemove({_id:req.params.id})
        res.json({msg: "Usuario Eliminado"})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}