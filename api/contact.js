// Serverless function for contact form
// Compatible with Vercel, Netlify, and Cloudflare Workers

const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { from_name, from_email, message } = req.body;

        // Validate input
        if (!from_name || !from_email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(from_email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // Configure email transporter
        // You can use Gmail, Outlook, or any SMTP service
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or 'outlook', 'yahoo', etc.
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS  // App-specific password
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'hello@tillid.tech',
            replyTo: from_email,
            subject: `New Contact Form Submission from ${from_name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${from_name}</p>
                <p><strong>Email:</strong> ${from_email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully'
        });

    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({
            error: 'Failed to send email',
            details: error.message
        });
    }
};
