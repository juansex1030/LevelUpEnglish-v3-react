const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/**
 * Sends a premium bilingual welcome email to new users.
 */
const sendWelcomeEmail = async (userEmail, username) => {
    const mailOptions = {
        from: `"Level Up English" <${process.env.EMAIL_USER}>`,
        to: userEmail,
        subject: 'Welcome to Level Up English! / ¡Bienvenido a Level Up English!',
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #00ADB5, #007A80); padding: 40px 20px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.025em;">Level Up English</h1>
                    <p style="color: #e0f2f1; margin: 10px 0 0 0; font-size: 16px;">Your journey to mastery starts here.</p>
                </div>

                <!-- Body -->
                <div style="padding: 40px 30px; background-color: white;">
                    <h2 style="color: #1e293b; margin-top: 0;">Hi ${username}, welcome aboard! 👋</h2>
                    <p style="color: #475569; line-height: 1.6; font-size: 16px;">
                        We're thrilled to have you here. <strong>Level Up English</strong> is designed to help you master English through practice, games, and structured theory.
                    </p>
                    
                    <div style="margin: 30px 0; border-left: 4px solid #00ADB5; padding-left: 20px; font-style: italic;">
                        <p style="color: #1e293b; line-height: 1.6; font-size: 16px; margin: 0;">
                            "The expert in anything was once a beginner."
                        </p>
                    </div>

                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;">

                    <h2 style="color: #1e293b;">¡Hola ${username}, bienvenido/a!</h2>
                    <p style="color: #475569; line-height: 1.6; font-size: 16px;">
                        Estamos muy felices de tenerte con nosotros. <strong>Level Up English</strong> está diseñado para ayudarte a dominar el inglés mediante práctica, juegos y teoría estructurada.
                    </p>

                    <!-- CTA -->
                    <div style="text-align: center; margin-top: 40px;">
                        <a href="${process.env.FRONTEND_URL?.split(',')[0] || 'http://localhost:5173'}" 
                           style="background-color: #00ADB5; color: white; padding: 16px 32px; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 16px; display: inline-block; transition: background-color 0.2s;">
                            Start Learning Now / Empezar ahora
                        </a>
                    </div>
                </div>

                <!-- Footer -->
                <div style="padding: 30px; background-color: #f1f5f9; text-align: center; font-size: 14px; color: #64748b;">
                    <p style="margin: 0;">Designed with ❤️ for future polyglots.</p>
                    <p style="margin: 10px 0 0 0;">&copy; ${new Date().getFullYear()} Level Up English. All rights reserved.</p>
                </div>
            </div>
        `
    };

    return transporter.sendMail(mailOptions);
};

/**
 * Sends a password reset OTP email.
 */
const sendPasswordResetEmail = async (userEmail, otp) => {
    const mailOptions = {
        from: `"Level Up English" <${process.env.EMAIL_USER}>`,
        to: userEmail,
        subject: 'Password Reset OTP - Level Up English',
        html: `
            <div style="font-family: sans-serif; padding: 30px; color: #1e293b; background-color: #f8fafc; border-radius: 12px; max-width: 500px; margin: 0 auto; border: 1px solid #e2e8f0;">
                <h2 style="margin-top: 0; color: #0f172a;">Reset your password</h2>
                <p style="color: #475569;">You requested a password reset. Use the code below to proceed. It will expire in 15 minutes.</p>
                
                <div style="background-color: #f0fdfa; border: 2px dashed #00ADB5; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
                    <span style="font-size: 32px; font-weight: 800; letter-spacing: 10px; color: #007A80;">${otp}</span>
                </div>
                
                <p style="font-size: 12px; color: #94a3b8; margin-bottom: 0;">If you didn't request this, you can safely ignore this email.</p>
            </div>
        `
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendWelcomeEmail,
    sendPasswordResetEmail
};
