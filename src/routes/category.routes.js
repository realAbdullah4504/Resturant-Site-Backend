const router = require("express").Router();
const category = require("../controllers/category.controllers");

router.get("/",category.getCategory);
router.post('/',category.postCategory);
router.patch('/:id',category.editCategory);
router.delete('/:id',category.deleteCategory);

module.exports = router;
