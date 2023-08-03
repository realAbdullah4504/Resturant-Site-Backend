const router = require("express").Router();
const settings = require("../controllers/settings.controllers");

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


router.get("/",settings.getSettings);
router.post('/',settings.postSettings);
router.patch('/:id',settings.editSettings);

router.post("/image",upload.single('image'),settings.postImage);
// Define the route to serve images
router.get("/:imageName",settings.getImage);

module.exports = router;
