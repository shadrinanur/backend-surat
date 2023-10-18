const router = require('express').Router();
const { smasuk } = require('../controllers');

//Get localhost:8080/produk => Ambil Semua Data
router.get('/', smasuk.getDatasmasuk);

// //Get localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk);

// POST lcalhost:8080/produk/add => Tambah data produk ke database
router.post('/add', smasuk.addDatasmasuk);

// // POST lcalhost:8080/produk/2 => Edit data produk
router.put('/edit/:no', smasuk.editDatasmasuk);

// // POST lcalhost:8080/produk/delete => Delete data produk
router.delete('/delete/:no', smasuk.deleteDatasmasuk);

module.exports = router;