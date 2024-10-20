import { MailtrapClient } from "mailtrap"

const TOKEN = process.env.MAILTRAP_TOKEN;


const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Dahilar Avval",
};


const sendVerificationMail = async (userEmail, verificationToken) => {
    const recipients = [
        {
            email: userEmail,
        }
    ];
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                padding: 20px;
                background-color: #f4f4f4;
                display: flex;
                justify-content: center;
            }
            .email-wrapper {
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                padding: 20px;
                margin: 20px;
            }
            .header {
                text-align: center;
                background-color: #4CAF50;
                color: white;
                padding: 10px 0;
                border-radius: 8px 8px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
                text-align: center;
            }
            .content p {
                font-size: 18px;
                color: #333;
            }
            .otp-box {
                font-size: 24px;
                font-weight: bold;
                color: #4CAF50;
                margin: 20px 0;
            }
            .button {
                background-color: #4CAF50;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                font-size: 18px;
                display: inline-block;
            }
            .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #888;
                margin-top: 20px;
                border-top: 1px solid #eee;
            }
            .footer a {
                color: #4CAF50;
                text-decoration: none;
            }
        </style>
    </head>
    <body>

    <div class="container">
        <div class="email-wrapper">
            <div class="header">
                <h1>Email Verification</h1>
            </div>
            <div class="content">
                <p>Hello,</p>
                <p>Thank you for registering! To complete your registration, please use the OTP below to verify your email address. This OTP is valid for 15 minutes:</p>
                <div class="otp-box">${verificationToken}</div>
                <p>If you did not request this, please ignore this email.</p>
            </div>
            <div class="footer">
                <p>Need help? <a href="mailto:support@example.com">Contact Support</a></p>
                <p>© 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </div>

    </body>
    </html>
    `;

    client
        .send({
            from: sender,  // Add your sender email address or name here
            to: recipients,
            subject: "Your Email Verification Code",
            html: htmlTemplate,  // Use the HTML template here
            category: "OTP Verification",
        })
        .then(console.log, console.error);
};


const sendWelcomeMail = async (userEmail, userName) => {
    const recipients = [
        {
            email: userEmail,
        }
    ];

    // Welcome email HTML template with username dynamically inserted
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Our Community</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                padding: 20px;
                display: flex;
                justify-content: center;
            }
            .email-wrapper {
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                padding: 20px;
                margin: 20px;
            }
            .header {
                text-align: center;
                background-color: #4CAF50;
                color: white;
                padding: 20px 0;
                border-radius: 8px 8px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 26px;
            }
            .content {
                padding: 20px;
                text-align: center;
            }
            .content p {
                font-size: 18px;
                color: #333;
                margin: 20px 0;
            }
            .button {
                background-color: #4CAF50;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                font-size: 18px;
                display: inline-block;
            }
            .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #888;
                margin-top: 20px;
                border-top: 1px solid #eee;
            }
            .footer a {
                color: #4CAF50;
                text-decoration: none;
            }
        </style>
    </head>
    <body>

    <div class="container">
        <div class="email-wrapper">
            <div class="header">
                <h1>Welcome to Our Community!</h1>
            </div>
            <div class="content">
                <p>Hello ${userName},</p>
                <p>We’re thrilled to have you here! Get ready to dive into your new account. We’re excited to help you get started on your journey with us.</p>
                <a href="https://yourwebsite.com/login" class="button">Get Started</a>
                <p>If you have any questions, feel free to reach out to us at any time. We're always happy to help!</p>
            </div>
            <div class="footer">
                <p>Need help? <a href="mailto:support@example.com">Contact Support</a></p>
                <p>© 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </div>

    </body>
    </html>
    `;

    client
        .send({
            from: sender,  // Add your sender email address or name here
            to: recipients,
            subject: "Welcome to Our Community!",
            html: htmlTemplate,  // Use the HTML template here
            category: "Welcome Email",
        })
        .then(console.log, console.error);
};


const sendResetPasswordEmail = async (userEmail, resetURL, username) => {
    const recipients = [
        {
            email: userEmail,
        }
    ];


    // Reset password email HTML template with username and reset URL dynamically inserted
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border-radius: 8px 8px 0 0;
          }
          .content {
            padding: 20px;
          }
          .content p {
            font-size: 16px;
            color: #333333;
            line-height: 1.5;
          }
          .button-container {
            text-align: center;
            margin-top: 20px;
          }
          .button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #888888;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h2>Reset Your Password</h2>
          </div>
          <div class="content">
            <p>Hi ${username},</p>
            <p>
              We received a request to reset your password. Click the button below to reset it. If you did not request a password reset, you can safely ignore this email.
            </p>
            <div class="button-container">
              <a href="${resetURL}" class="button">Reset Password</a>
            </div>
            <p>
              Please note that this link will expire in 1 hour. If the button doesn't work, you can copy and paste the following link into your browser:
            </p>
            <p><a href="${resetURL}">${resetURL}</a></p>
            <p>Thank you,</p>
            <p>The Team</p>
          </div>
          <div class="footer">
            <p>If you have any questions, feel free to contact our support team.</p>
          </div>
        </div>
      </body>
    </html>
    `;

    client
    .send({
        from: sender, 
        to: recipients,
        subject: "Your Email Verification Code",
        html: htmlTemplate,  // Use the HTML template here
        category: "OTP Verification",
    })
    .then(console.log, console.error);
};

// Example usage:

export {sendVerificationMail,sendWelcomeMail,sendResetPasswordEmail};
