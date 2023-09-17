const path = require("path");
const Category = require("../models/category.models");

const getCategory = async (req, res) => {
  // res.json('api is running');

  try {
    const data = await Category.find({});
    //console.log(data)
    res.status(200).json({ category: data.reverse() });
  } catch {
    res.status(400).json("error getting data");
  }
};
const postCategory = async (req, res) => {
  // console.log(req.body);
  // res.json('api is running');

  try {
    const data = new Category(req.body);
    await data.save();
    // const deal = await Category.insertMany(req.body);

    res.status(200).json({
      data,
      status: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
const editCategory = async (req, res) => {
  const id = req.params.id;
  // res.json('api is running');
  // res.status(200).json(req.params.id);

  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ category: updatedCategory });
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  // res.json("api is running");
  //res.json(req.params.id);
  try {
    const deleteCategory = await Category.deleteOne({ _id: id });
    res.status(200).json({ category: deleteCategory });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getCategory,
  postCategory,
  editCategory,
  deleteCategory,
};
