const router = require('express').Router();
const { skeluar } = require('../controllers');

//Get localhost:8080/produk => Ambil Semua Data
router.get('/', skeluar.getDataskeluar);

// //Get localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk);

// POST lcalhost:8080/produk/add => Tambah data produk ke database
router.post('/add', skeluar.addDataskeluar);

// POST lcalhost:8080/produk/2 => Edit data produk
router.put('/edit/:no', skeluar.editDataskeluar);

// // POST lcalhost:8080/produk/delete => Delete data produk
router.delete('/delete/:no', skeluar.deleteDataskeluar);

module.exports = router;