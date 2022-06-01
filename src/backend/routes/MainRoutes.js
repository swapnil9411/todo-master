const express=require("express");
const mainController = require('../controllers/MainController');
const loginController = require('../controllers/LoginController');
const middle=require('../controllers/middle');
const router=express.Router(); 
const app=express(); 

router.route("/signup").get(mainController.signup);
router.route('/signup').post(loginController.signup);
router.route("/signin").get(middle.redirectprofile,mainController.signin);
router.route('/signin').post(loginController.signin);
router.route("/").get(middle.redirectsignin,mainController.profile);
router.route('/signout').post(loginController.signout);
router.route('/add').post(loginController.addTask);
router.route('/delete/id=:id').post(loginController.remove);
router.route('/edit/id=:id').get(loginController.editGet);
router.route('/edit/id=:id').post(loginController.editPost);
router.route('/done/id=:id').post(loginController.done);

//router.route("/signin").get(middle.redirectprofile);
//router.route().get(mainController.redirectSignin);
//router.route().get(mainController.redirectProfile);

module.exports=router;