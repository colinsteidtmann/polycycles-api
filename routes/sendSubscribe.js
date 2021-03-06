var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    const sgMail = require('@sendgrid/mail')
    console.log(process.env)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'colinsteidtmann@gmail.com', // Change to your recipient
      from: 'colinsteidtmann@gmail.com', // Change to your verified sender
      cc: req.body.email,
      subject: 'PolyCycles - Thank you for subscribing',
      html: (`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
              <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
                <!--[if !mso]><!-->
                <meta http-equiv="X-UA-Compatible" content="IE=Edge">
                <!--<![endif]-->
                <!--[if (gte mso 9)|(IE)]>
                                    <xml>
                                      <o:OfficeDocumentSettings>
                                        <o:AllowPNG/>
                                        <o:PixelsPerInch>96</o:PixelsPerInch>
                                      </o:OfficeDocumentSettings>
                                    </xml>
                                    <![endif]-->
                <!--[if (gte mso 9)|(IE)]>
                                <style type="text/css">
                                  body {width: 600px;margin: 0 auto;}
                                  table {border-collapse: collapse;}
                                  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
                                  img {-ms-interpolation-mode: bicubic;}
                                </style>
                              <![endif]-->
                <style type="text/css">
                  body,
                  p,
                  div {
                    font-family: inherit;
                    font-size: 14px;
                  }

                  body {
                    color: #000000;
                  }

                  body a {
                    color: #ba1f1f;
                    text-decoration: none;
                  }

                  p {
                    margin: 0;
                    padding: 0;
                  }

                  table.wrapper {
                    width: 100% !important;
                    table-layout: fixed;
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-size-adjust: 100%;
                    -moz-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                  }

                  img.max-width {
                    max-width: 100% !important;
                  }

                  .column.of-2 {
                    width: 50%;
                  }

                  .column.of-3 {
                    width: 33.333%;
                  }

                  .column.of-4 {
                    width: 25%;
                  }

                  ul ul ul ul {
                    list-style-type: disc !important;
                  }

                  ol ol {
                    list-style-type: lower-roman !important;
                  }

                  ol ol ol {
                    list-style-type: lower-latin !important;
                  }

                  ol ol ol ol {
                    list-style-type: decimal !important;
                  }

                  @media screen and (max-width:480px) {

                    .preheader .rightColumnContent,
                    .footer .rightColumnContent {
                      text-align: left !important;
                    }

                    .preheader .rightColumnContent div,
                    .preheader .rightColumnContent span,
                    .footer .rightColumnContent div,
                    .footer .rightColumnContent span {
                      text-align: left !important;
                    }

                    .preheader .rightColumnContent,
                    .preheader .leftColumnContent {
                      font-size: 80% !important;
                      padding: 5px 0;
                    }

                    table.wrapper-mobile {
                      width: 100% !important;
                      table-layout: fixed;
                    }

                    img.max-width {
                      height: auto !important;
                      max-width: 100% !important;
                    }

                    a.bulletproof-button {
                      display: block !important;
                      width: auto !important;
                      font-size: 80%;
                      padding-left: 0 !important;
                      padding-right: 0 !important;
                    }

                    .columns {
                      width: 100% !important;
                    }

                    .column {
                      display: block !important;
                      width: 100% !important;
                      padding-left: 0 !important;
                      padding-right: 0 !important;
                      margin-left: 0 !important;
                      margin-right: 0 !important;
                    }

                    .social-icon-column {
                      display: inline-block !important;
                    }
                  }
                </style>
                <!--user entered Head Start-->
                <link href="https://fonts.googleapis.com/css?family=Chivo&display=swap" rel="stylesheet">
                <style>
                  body {
                    font-family: 'Chivo', sans-serif;
                  }
                </style>
                <!--End Head user entered-->
              </head>

              <body>
                <center class="wrapper" data-link-color="#ba1f1f" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#f3f3f3;">
                  <div class="webkit">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f3f3f3">
                      <tr>
                        <td valign="top" bgcolor="#f3f3f3" width="100%">
                          <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td width="100%">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td>
                                      <!--[if mso]>
                                  <center>
                                  <table><tr><td width="600">
                                <![endif]-->
                                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                        <tr>
                                          <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left">
                                            <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                              <tr>
                                                <td role="module-content">
                                                  <p></p>
                                                </td>
                                              </tr>
                                            </table>
                                            <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="bb66f67d-14da-4c7c-8edc-afdc4a44eab0" data-mc-module-version="2019-10-22">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:18px 20px 18px 20px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                                                    <div>
                                                      <div style="font-family: inherit; text-align: center"><span style="color: #a70c0c; font-size: 16px; font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif"><strong>PolyCycles</strong></span></div>
                                                      <div></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="05c24485-6b0b-4385-8d4d-50fb765752c6">
                                              <tbody>
                                                <tr>
                                                  <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                                                    <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/954c252fedab403f/9bc2f6cd-b6cc-44d9-806f-039ebfb31e24/600x499.png">
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4a6ffb3a-df80-4f5a-b358-9c4bef8568b2" data-mc-module-version="2019-10-22">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:40px 0px 18px 0px; line-height:40px; text-align:inherit; background-color:#d59791;" height="100%" valign="top" bgcolor="#d59791" role="module-content">
                                                    <div>
                                                      <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 46px; font-family: &quot;times new roman&quot;, times, serif">Thank you for subscribing (${req.body.email})</span></div>
                                                      <div></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="5f5e1125-d69e-4c95-88f6-dfe64ed14541" data-mc-module-version="2019-10-22">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:18px 30px 20px 30px; line-height:22px; text-align:inherit; background-color:#d59791;" height="100%" valign="top" bgcolor="#d59791" role="module-content">
                                                    <div>
                                                      <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 15px; font-family: inherit">We will keep you updated with how PolyCycles is doing. We will not share your email with anyone or spam you. &nbsp;Email us anytime to unsubscribe - friends@polycycles.com</span></div>
                                                      <div></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="11a43fa3-79eb-4e9a-9c70-1a95769fb630" data-mc-module-version="2019-10-22">
                                              <tbody>
                                                <tr>
                                                  <td style="padding:30px 30px 30px 30px; line-height:20px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content">
                                                    <div>
                                                      <div style="font-family: inherit; text-align: center"><span style="color: #a70c0c; font-size: 14px; font-family: &quot;lucida sans unicode&quot;, &quot;lucida grande&quot;, sans-serif">PolyCycles. Berkeley, CA, est. 2021.</span></div>
                                                      <div></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                              
                                            </div>
                                            <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="cbffb97f-4af5-4eb4-acb8-74c0d6f9f847">
                                              <tbody>
                                                <tr>
                                                  <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 20px 0px;">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" bgcolor="#f5f8fd" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a href="https://www.sendgrid.com/?utm_source=powered-by&utm_medium=email" style="background-color:#f5f8fd; border:1px solid #f5f8fd; border-color:#f5f8fd; border-radius:25px; border-width:1px; color:#a8b9d5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank"></a></td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                      <!--[if mso]>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                          </center>
                                                          <![endif]-->
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </center>
              </body>

              </html>`),
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
        res.status(200).send('Email successfully sent');
      })
      .catch((error) => {
        console.error(error)
        console.log(error.body)
        res.status(400).send("There was an error")
      })

});

module.exports = router;