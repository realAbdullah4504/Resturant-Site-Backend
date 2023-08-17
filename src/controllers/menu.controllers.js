const path = require("path");
const Menu = require("../models/menu.models");

const getMenu = async (req, res) => {
  try {
    const data = await Menu.find({});
    //console.log(data)
    res.json({ menu: data });
  } catch {
    res.status(400).json("error getting data");
  }

  //res.json("api is running");
};
const postMenu = async (req, res) => {
  console.log(req.body);
  try {
    const menu = new Menu(req.body);
    await menu.save();
    res.json({
      menu,
      status: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
const editMenu = async (req, res) => {
  const id = req.params.id;
  //res.json(req.params.id);
  const updatedMenu = await Menu.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ Menu: updatedMenu });
};

// const postImage =  (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ error: "Please provide an image file." });
//     }

//     // The image has been uploaded successfully. You can do more processing here if needed.
//     res.json({
//       message: "Image uploaded successfully.",
//       filename: req.file.filename,
//     });
//   };

//   const getImage= (req, res) => {
//     try {
//       const imageName = req.params.imageName;
//       const imagePath = path.join(__dirname, "../../public", imageName);

//       console.log("name", imageName);
//       console.log("path", imagePath);
//       // Check if the image exists in the uploads folder
//       // If it exists, send the image as the response
//       //res.sendFile(path.join(__dirname, `uploads/${imageName}`));
//       res.sendFile(imagePath);
//     } catch (err) {
//       if (err) {
//         // If the image is not found or any other error occurs, send a 404 response
//         console.error("Error sending image:", err);
//         res.status(404).json({ error: "Image not found." });
//       }
//     }
//   }

module.exports = {
  getMenu,
  //postImage,
  //getImage,
  postMenu,
  editMenu,
};
