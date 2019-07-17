var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mounika.kunche10@gmail.com',
    pass:'*****************'
  }
});

var mailOptions = {
  from: 'mounika.kunche10@gmail.com',
  to: 'mounika@stucred.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});