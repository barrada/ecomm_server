const sgMail = require('@sendgrid/mail');

// Send Verification Code to Newly Registerd User
exports.sendVerificationMail = function (email) {
    // sendgrid KEY
    sgMail.setApiKey('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');
const msg = {
//   to: 'ahmed.barrada@gmail.com',
  to: email,
  from: 'accounts@ektib.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
  
};
