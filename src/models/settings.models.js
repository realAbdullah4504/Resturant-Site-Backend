const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    mainLogoName: { type: String, required: true },
    favIconName: { type: String, required: true },
    footerName: { type: String, required: true },
    socialLinks: {
      facebook: { type: String, required: true },
      linkedIn: { type: String, required: true },
      twitter: { type: String, required: true },
    },
    contactDetails: {
      address: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const Setting = mongoose.model("Setting", settingSchema);
module.exports = Setting;
