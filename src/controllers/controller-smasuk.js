const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

const getDatasmasuk = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM surat_masuk', function(error,rows){
            if(rows) {
                resolve(rows)
            } else{
                reject([]);
            }
        });
    });
    if (data) {
        res.send({
            success: true,
            message: 'Berhasil ambil data',
            data: data
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal ambil data!',
        });
    }
}

// menambah data
const addDatasmasuk = async(req,res) => {
    let data = {
        no : req.body.no,
        tanggal_masuk : req.body.tanggal_masuk,
        no_surat : req.body.no_surat,
        tanggal_surat : req.body.tanggal_surat,
        pengirim : req.body.pengirim,
        perihal : req.body.perihal,
        ditujukan : req.body.ditujukan,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('INSERT INTO surat_masuk SET ?;',[data],function(error,rows){
            if (rows) {
                resolve(true)
            }else{
                reject(false)
            }
        });
    });
    if(result){
        res.send({
            success : true,
            message : 'Berhasil menambah data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal menambah data'
        });
    }
}

//mengubah data
const editDatasmasuk = async(req,res) => {
    let no = req.params.no;

    let dataEdit= {
        no : req.body.no,
        tanggal_masuk : req.body.tanggal_masuk,
        no_surat : req.body.no_surat,
        tanggal_surat : req.body.tanggal_surat,
        pengirim : req.body.pengirim,
        perihal : req.body.perihal,
        ditujukan : req.body.ditujukan,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE surat_masuk SET ? WHERE no = ?;', [dataEdit,no],function(error,rows){
            if(rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });
    if(result){
        res.send({
            success: true,
            message: 'Berhasil edit data'
        });
    } else {
        res.send({
            success: true,
            message: 'Gagal edit data'
        });
    }
}

//menghapus data
const deleteDatasmasuk = async(req,res) => {
    let no = req.params.no;
    const result = await new Promise((resolve,reject) => {
        connection.query('DELETE FROM surat_masuk WHERE no = ?;',[no],function(error,rows){
            if(rows){
                resolve(true)
            } else{
                reject(false)
            }
        });
    });
    if(result){
        res.send({
            success: true,
            message: 'Berhasil Hapus Data'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal Hapus Data'
        });
    }
}

module.exports = {
    getDatasmasuk,
    addDatasmasuk,
    editDatasmasuk,
    deleteDatasmasuk
}