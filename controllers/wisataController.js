const db = require('../config/db');
const jwt = require('jsonwebtoken');

const getAllWisata = (req, res) => {
  db.all('SELECT * FROM wisata', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
};

const getWisataById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM wisata WHERE idwisata = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: row });
  });
};

const createWisata = (req, res) => {
  const { namawisata, gambarwisata, hargaWisata, ratingWisata, deskripsi, isFav, Gallery, idCategory } = req.body;
  const sql = `INSERT INTO wisata (namawisata, gambarwisata, hargaWisata, ratingWisata, deskripsi, isFav, Gallery, idCategory) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [namawisata, gambarwisata, hargaWisata, ratingWisata, deskripsi, isFav, Gallery, idCategory];
  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
};

const updateWisata = (req, res) => {
  const { id } = req.params;
  const { namawisata, gambarwisata, hargaWisata, ratingWisata, deskripsi, isFav, Gallery, idCategory } = req.body;
  const sql = `UPDATE wisata SET namawisata = ?, gambarwisata = ?, hargaWisata = ?, ratingWisata = ?, deskripsi = ?, isFav = ?, Gallery = ?, idCategory = ?, updateAt = CURRENT_TIMESTAMP WHERE idwisata = ?`;
  const params = [namawisata, gambarwisata, hargaWisata, ratingWisata, deskripsi, isFav, Gallery, idCategory, id];
  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ changes: this.changes });
  });
};

const deleteWisata = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM wisata WHERE idwisata = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ changes: this.changes });
  });
};

module.exports = {
  getAllWisata,
  getWisataById,
  createWisata,
  updateWisata,
  deleteWisata
};