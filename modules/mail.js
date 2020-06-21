const sgMail = require('@sendgrid/mail');
  // sendgrid KEY
  sgMail.setApiKey('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');
const domain = "localhost:3000"

// Send Verification Code to Newly Registerd User
exports.sendVerificationMail = function (email,lang,token, firstname) {  
msg = {}
// ar_template = require('../email_templates/activate_ar.html')
const ar_msg = {
//   to: 'ahmed.barrada@gmail.com',
  to: email,
  from: 'accounts@ektib.com',
  subject: 'مرحبا, يرجى تفعيل الحساب',
  templateId:'d-71721c8b517a4cf8978423c51ceafa0d',
  dynamic_template_data: {
    name: firstname,
    verification_url:`ar/account/verify?token=${token}` ,
    // text: 'Denver',
  },
//   text: ' يرجى تفعيل الحساب',
//   html: '<strong> <a href="${domain}/account/verify/${token}">activate account</a></strong>',
//   html: `<strong> <a href="${domain}/ar/account/verify?token=${token}">تفعيل الحساب</a></strong>`,
};
const en_msg = {
    //   to: 'ahmed.barrada@gmail.com',
      to: email,
      from: 'accounts@ektib.com',
      subject: 'Ektib - Account Activiation',
    //   text: 'kindly activate your account',
    //   html: '<strong> <a href="${domain}/account/verify/${token}">activate account</a></strong>',
    //   html: `<strong> <a href="${domain}/account/verify?token=${token}">activate account</a></strong>`,
    //   html:require('../email_templates/activate_ar.html'),
        templateId:'d-8d64ac1a8c9f4e989ec5635ccf1053f7',
        dynamic_template_data: {
            // subject: 'Testing Templates',
            name: firstname,
            verification_url:`account/verify?token=${token}` ,
            // text: 'Denver',
          },

    };

    if(lang == 'ar'){
        msg = ar_msg
    }else{
        msg = en_msg
    }    

sgMail.send(msg);
  
};


exports.sendPassResetToken = function (email,lang,token) {
   if(lang == 'ar') {
    template = 'd-f01803fafffa4f85be1cb97a002f4075'
    reset_url = `ar/account/resetpass?token=${token}`
 
   }else{
    template = 'd-7525700331264ee9a2c0865980b71ad5' 
    reset_url = `account/resetpass?token=${token}`
 
   }
   msg = {
    to: email,
    from: 'accounts@ektib.com',
    templateId:template,
    dynamic_template_data: {
    // name: firstname,
    reset_url: reset_url ,
    // text: 'Denver',
  },

   }
//    console.log(reset_url)
   sgMail.send(msg);
}