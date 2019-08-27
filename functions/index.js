const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webdevhoffman@gmail.com',
    pass: '11232719Dh!'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = req.query.dest;

    const mailOptions = {
      from: 'Dave Hoffman',
      to: dest,
      subject: 'Test e-mail!',
      html: '<p style="font-size: 16px;">Hurray!!!</p><br/><img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />'
    };

    return transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        return res.send(err.toString());
      }
      return res.send('The e-mail has been sent!');
    });
  });
});