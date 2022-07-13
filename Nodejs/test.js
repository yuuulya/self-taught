// node mailer : https://nodemailer.com/about/
// mailtrap  : https://mailtrap.io/

const nodemailer = require('nodemailer');

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "******",
    pass: "******"
  }
};

const send = async (option) => {

  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "****@naver.com",
  to: "****@naver.com",
  subject: "테스트메일입니다",
  // subject - 메일제목
  text: "node.js 를 이용해서 메일보내기 "
  //tesxt : 본문내용
}

send(email_data);
