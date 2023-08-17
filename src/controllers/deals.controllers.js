const path = require("path");
const Deal = require("../models/deals.models");

const getDeals = async (req, res) => {
  try{
    const data = await Deal.find({})
    //console.log(data)
    res.json({deals:data})
  }
  catch
  {
    res.status(400).json("error getting data");
  }
  
  //res.json("api is running");
};
const postDeals=async(req,res)=>{
  //console.log(req.body);
  try {
    
    const deal = new Deal(req.body);
    await deal.save();
    res.json({
      deal,
      status:true});
  } catch (err) {
    res.status(400).json("error posting data");
  }
}
const editDeals=async(req,res)=>{
  const id=req.params.id;
  //res.json(req.params.id);
  const updatedDeal=await Deal.findByIdAndUpdate(id,req.body,{new:true})
  res.json({Deal:updatedDeal});
 
}


const postImage =  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "Please provide an image file." });
    }

    // The image has been uploaded successfully. You can do more processing here if needed.
    res.json({
      message: "Image uploaded successfully.",
      filename: req.file.filename,
    });
  };

  const getImage= (req, res) => {
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
  }

  module.exports={
    getDeals,
    postImage,
    getImage,
    postDeals,
    editDeals
  }
