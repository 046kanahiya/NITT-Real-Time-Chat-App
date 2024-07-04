

const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kanhaiyatripathi046@gmail.com', // Your email address
    pass: 'kkbssssvljxnyjcy' // Your password
  }
});

// Utility function to send email
const sendEmail = async (to,text) => {
  try {
    // Setup email data
    let mailOptions = {
      from: '"Nitt Chat Application Verification " <kanhaiyatripathi046@gmail.com>', // sender address
      to, // list of receivers
      subject:"Verification mail",
      text, // plain text body
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
