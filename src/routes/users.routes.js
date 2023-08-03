const router = require("express").Router();
const usersController = require("../controllers/users.controllers");

// });

router.get("/", usersController.getUsers);
router.post("/", usersController.subscribeUser);


module.exports = router;

// const axios=require('axios');

// const mailchimpInstance = axios.create({
//     baseURL: `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0`,
//     auth: {
//       username: 'abdullahjavaid1@live.com', // 'anystring' is required by Mailchimp for authentication
//       password: process.env.MAILCHIMP_API_KEY,
//     },
//   });

// router.route('/subscribe')
// .post(async (req, res) => {
//     const { email } = req.body;

//     try {
//       // Add the subscriber to the Mailchimp audience
//       const response = await mailchimpInstance.post(`/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`, {
//         email_address: email,
//         status: 'subscribed',
//       });

//       console.log('Subscriber added to Mailchimp:', response.data);
//       res.json({ message: 'Subscribed successfully!' });
//     } catch (error) {
//       console.error('Error subscribing:', error.response.data);
//       res.status(500).json({ error: 'An error occurred while subscribing.' });
//     }
//   });


