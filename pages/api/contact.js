let nodemailer = require('nodemailer')
import "../../styles/confirmmail.css"
export default async function handler(req, res) {

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'poddarayurvedicpharmacy@gmail.com',
            pass: process.env.NEXT_PUBLIC_MAIL_PASS,
        },
        secure: true,
    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
    const mailData = {
        from: 'poddarayurvedicpharmacy@gmail.com',
        to: 'poddarayurvedicpharmacy@gmail.com',
        subject: `Enquiry From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email + "| Phone Number: " + req.body.phone,
        html: `<div>
    <h3>Enquiry from Poddarchurans.com</h3>
    <h3>${req.body.message}</h3>
    <h4>Thank You,</h4>
    <h4>${req.body.name}</h4>
    <h4>${req.body.email}</h4>
    <h4>${req.body.phone}</h4>
    </div>`
    }
    const confirmmailData = {
        from: 'poddarayurvedicpharmacy@gmail.com',
        to: req.body.email,
        subject: `Enquiry Sent Successfully`,
        text: req.body.message + " | Sent from: " + req.body.email + "| Phone Number: " + req.body.phone,
        html: `<table border="0" cellpadding="0" cellspacing="0" width="100%">

        <!-- start logo -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
           
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end logo -->
    
        <!-- start hero -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
              <tr>
                <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                  <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Enquiry Sent Successfully</h1>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end hero -->
    
        <!-- start copy block -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
    
              <!-- start copy -->
              <tr>
                <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                  <p style="margin: 0;">Thank You for submitting your Enquiry with us. We will get in touch with you soon.</p>
                </td>
              </tr>
              <!-- end copy -->

    
              <!-- start copy -->
              <tr>
                <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                  <p style="margin: 0;">Thank you,<br> poddarayurvedicpharmacy@gmail.com</p>
                </td>
              </tr>
              <!-- end copy -->
    
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end copy block -->
    
        <!-- start footer -->
        <tr>
          <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
    
              <!-- start permission -->
              <tr>
                <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                  <p style="margin: 0;">You received this email because we received a request for Enquiry for your account. If you didn't send this mail you can safely delete this email.</p>
                </td>
              </tr>
              <!-- end permission -->
    
    
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        <!-- end footer -->
    
      </table>`
    }
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                console.log(err)
                reject(err);
            }
            else {
                console.log(info)
                resolve(info);
            }
        })
    })
    await new Promise((resolve, reject) => {
        transporter.sendMail(confirmmailData, function (err, info) {
            if (err) {
                console.log(err)
                reject(err);
            }
            else {
                console.log(info)
                resolve(info);
            }
        })
    })



    res.status(200).json({ success: true })
}