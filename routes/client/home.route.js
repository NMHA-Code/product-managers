const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/home.controller");
router.get('/',controller.index);
// router.get('/edit',(req, res) => {

//         res.render('client/pages/home/index');
//     })
//     router.get('/delete', (req, res) => {

//         res.render('client/pages/home/index');
//     })
module.exports = router;