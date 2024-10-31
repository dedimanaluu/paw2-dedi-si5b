const Pariwisata = require('../model/pariwisata');

const createdPariwisata = (req, res)=>{
    const pariwisata = new Pariwisata({
        tempat : req.body.tempat,
        makanan : req.body.makanan
    });

    pariwisata.save()
    .then((createdPariwisata)=>{
        res.status(201).json({
            message : "Data berhasil dismpan",
            bookId : createdPariwisata._id
        });
    });
};

module.exports = {createdPariwisata};