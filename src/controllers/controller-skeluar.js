const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

const getDataskeluar = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM surat_keluar', function(error,rows){
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

const addDataskeluar = async(req,res) => {
    let data = {
        no : req.body.no,
        tanggal : req.body.tanggal,
        no_surat : req.body.no_surat,
        perihal : req.body.perihal,
        ditujukan : req.body.ditujukan,
        keterangan : req.body.keterangan,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('INSERT INTO surat_keluar SET ?;',[data],function(error,rows){
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
const editDataskeluar = async(req,res) => {
    let no = req.params.no;

    let dataEdit= {
        no : req.body.no,
        tanggal : req.body.tanggal,
        no_surat : req.body.no_surat,
        perihal : req.body.perihal,
        ditujukan : req.body.ditujukan,
        keterangan : req.body.keterangan,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE surat_keluar SET ? WHERE no = ?;', [dataEdit,no],function(error,rows){
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
    } else{
        res.send({
            success: false,
            message: 'Gagal edit data'
        });
    }
}

//menghapus data
const deleteDataskeluar = async(req,res) => {
    let no = req.params.no;
    const result = await new Promise((resolve,reject) => {
        connection.query('DELETE FROM surat_keluar WHERE no = ?;',[no],function(error,rows){
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
    getDataskeluar,
    addDataskeluar,
    editDataskeluar,
    deleteDataskeluar
}