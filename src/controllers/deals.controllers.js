const path = require("path");
const Deal = require("../models/deals.models");

const getDeals = async (req, res) => {
  try {
    const data = await Deal.find({}).populate("categoryId").exec();
    //console.log(data)
    res.json({ deals: data.reverse() });
  } catch {
    res.status(400).json("error getting data");
  }

  //res.json("api is running");
};
const postDeals = async (req, res) => {
  console.log("req", req.body);
  // console.log("file", req.file.filename);

  try {
    const deal = new Deal({ ...req.body, image: req.file.filename });
    await deal.save();
    // const deal=await Deal.insertMany(req.body);

    res.json({
      message: "Image uploaded successfully.",
      filename: req.file.filename,
      deal,
      status: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
const editDeals = async (req, res) => {
  const id = req.params.id;
  const { image, ...dealData } = req.body;

  const updatedFields = { ...dealData };
  if (req.file) updatedFields.image = req.file.filename;
  const updatedDeal = await Deal.findByIdAndUpdate(id, updatedFields, {
    new: true,
  });

  res.json({ deal: updatedDeal });

  //res.json(req.params.id);
  // res.json(req.body);
  // const updatedDeal = await Deal.findByIdAndUpdate(id, req.body, { new: true });
  // res.json({ Deal: updatedDeal });
};

const deleteDeals = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteDeal = await Deal.deleteOne({ _id: id });
    // const deleteDeal=await Deal.deleteMany({})

    //console.log(updatedService);
    return res.json({ service: deleteDeal });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
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

const getImage = (req, res) => {
  try {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, "../../public", imageName);

    console.log("name", imageName);
    console.log("path", imagePath);
    // Check if the image exists in the uploads folder
    // If it exists, send the image as the response
    //res.sendFile(path.join(__dirname, `uploads/${imageName}`));
    res.sendFile(imagePath);
  } catch (err) {
    if (err) {
      // If the image is not found or any other error occurs, send a 404 response
      console.error("Error sending image:", err);
      res.status(404).json({ error: "Image not found." });
    }
  }
};

module.exports = {
  getDeals,
  // postImage,
  getImage,
  postDeals,
  editDeals,
  deleteDeals,
};
