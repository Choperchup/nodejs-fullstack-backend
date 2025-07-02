const express = require('express');
const { getHomePage, getABC, getTruong } = require('../controllers/home.controller');
const router = express.Router();

// router.Method = ('/routes', handler)

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/truong', getTruong);

module.exports = router; // export default