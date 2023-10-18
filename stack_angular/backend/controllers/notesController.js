const Note = require('../models/Notes')

exports.crearNota = async (req, res) => {
    try {
        let nota;
        nota = new Note(req.body);
        await nota.save();
        res.send(nota)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}

exports.obtenerNotas = async (req,res) =>{
    try {
        const notas = await Note.find();
        res.json(notas)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}
exports.obtenerNota = async (req,res) =>{
    try {
        let nota = await Note.find(req.params.id);
        if(!nota){
            res.status(500).send('La Nota no existe')
        }
        res.json(nota)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}

exports.updateNote = async (req,res) =>{
    try {
        const {title,description,name,date} = req.body
        let nota = await Note.findById(req.params.id);

        if(!nota){
            res.status(500).send('La Nota no existe')
        }
        nota.title=title;
        nota.description=description;
        nota.name=name;
        nota.date=date;

        nota = await Note.findByIdAndUpdate(
            {_id:req.params.id},nota,{new: true})
            res.json(nota)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}

exports.deleteNote = async (req,res) =>{
    try {
        let nota = await Note.findById(req.params.id)

        if(!nota){
            res.status(500).send('La Nota no existe')
        }

        await Note.findByIdAndRemove({_id:req.params.id})
        res.json({msg: "Nota Eliminada"})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}