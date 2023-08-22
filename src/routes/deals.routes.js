const router = require("express").Router();
const deals = require("../controllers/deals.controllers");

const multer = require("multer");
 const path = require("path");
// Set up the storage for uploaded images using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dest = path.join(__dirname, "../../public/");
    cb(null, dest); // The uploaded images will be stored in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Set a unique name for the uploaded image
  },
});
const upload = multer({ storage: storage });


router.get("/",deals.getDeals);
router.post('/',upload.single('image'),deals.postDeals);
router.patch('/:id',upload.single('image'),deals.editDeals);
router.delete('/:id',deals.deleteDeals);

// router.post("/image",upload.single('image'),deals.postImage);
// Define the route to serve images
router.get("/:imageName",deals.getImage);

module.exports = router;
