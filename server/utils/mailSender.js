const nodemailer = require("nodemailer");
require('dotenv').config();

const mailSender = async (email, body) => {
    try{
            let transporter = nodemailer.createTransport({
                service:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: 'StudyNotion',
                to:`${email}`,
                subject: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message + "Email error");
    }
}


module.exports = mailSender;