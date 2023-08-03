
const nodemailer = require("nodemailer");
const path = require('path');
const fs = require("fs");

const emailConfig = {
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user:'abdullahjavaid1@live.com',
    pass: '34EC25CFA54E5956DCF101C6BA38ED984883',
  },
};

const transporter = nodemailer.createTransport(emailConfig);

const emailSender = async (user) => {
  const htmlFilePath = path.join(__dirname, '../../public/email_subscription.html');
  const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
  const recipientName = user.name;
  const emailContent = htmlContent.replace("[Name]", recipientName);

  //console.log(htmlContent);
   //router.route('/send').post(async(req,res)=>{
  //const { email } = req.body;
  try {
    // Send a dummy email
    const info = await transporter.sendMail({
      from: "abdullahjavaid1@live.com", // Replace with your actual email address
      to: user.email,
      subject: "Welcome to Our Newsletter",
      html: emailContent, //{ path: "./index.html" },
    });
    console.log("Email sent:", info);
    return true;
    
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
module.exports=emailSender;
