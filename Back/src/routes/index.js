const router = require("express").Router();

const { deleteFav } = require("../controllers/deleteFav");
// const {postFav} = require ('../controllers/handleFavorites');
const {getCharById} = require ('../controllers/getCharById');
const login = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { postUser } = require("../controllers/postUser");

router.get('/character/:id', getCharById )
// router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav)

module.exports = router;
