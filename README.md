# Tillid Website

Modern, responsive website for Tillid data and AI consulting services.

## 🚀 Current Setup

- **Frontend**: GitHub Pages (tillid.tech) - Static files
- **Backend**: Vercel/Netlify (ready to deploy) - Serverless function
- **Email Recipient**: hello@tillid.tech
- **Free Tier**: Unlimited form submissions

**Hybrid Architecture:** Frontend on GitHub Pages + Backend on Vercel/Netlify = Professional, free setup!

## 📋 Quick Start

### 1. Deploy Backend (Required - 15 minutes)

**Follow the guide in `SETUP.md` to deploy your backend.**

Choose your platform:
- **Vercel** (recommended) - Easiest setup
- **Netlify** - Also great

You'll need:
1. Free Vercel/Netlify account
2. Gmail app-specific password
3. Run 3-4 simple CLI commands

### 2. Test Your Form

After deployment, test the contact form on your site and check **hello@tillid.tech** for emails.

## Features

- Modern, clean design with brand colors (Olive Green #4B533A, Muted Red #A65D57)
- Responsive 3-column grid layout (collapses to single column on mobile)
- Smooth scrolling navigation
- Expandable service cards with "Discover More" buttons
- **Custom backend** with unlimited form submissions
- Form submission feedback with loading states
- Full control over email templates

## Running Locally

### Option 1: Using Python (Recommended)
```bash
python3 -m http.server 8000
```

### Option 2: Using npm
```bash
npm start
```

Then open your browser and navigate to: `http://localhost:8000`

**Note:** Form won't work locally (requires backend deployment).

## Structure

- `index.html` - Main HTML file
- `styles.css` - All styles and responsive design
- `script.js` - Form handling and smooth scrolling
- `toggleService.js` - Service card toggle functionality
- `api/contact.js` - **Serverless backend function**
- `SETUP.md` - **Backend deployment guide (START HERE)**
- `vercel.json` - Vercel configuration
- `netlify.toml` - Netlify configuration
- `package.json` - Dependencies (nodemailer)

## Services Offered

1. **Cloud and Data Infrastructure**
   - Cloud Architecture & Design
   - Data Storage & Management
   - Data Security & Compliance

2. **Data Engineering and Governance**
   - Data Pipeline Development
   - Data Quality & Governance
   - Real-Time Analytics

3. **Artificial Intelligence and Machine Learning**
   - Machine Learning Model Development
   - AI Strategy & Consulting
   - Predictive Analytics

## Development

The website is built with vanilla HTML, CSS, and JavaScript. The backend uses Node.js serverless functions.

## Why Custom Backend?

✅ **Unlimited** form submissions (vs Formspree's 50/month)
✅ **Free forever** on Vercel/Netlify free tier
✅ **Full control** over email templates
✅ **No third-party** dependencies
✅ **Professional** infrastructure
✅ **Fast** serverless execution

## Next Steps

1. ✅ **Read SETUP.md** - Deploy your backend (15 mins)
2. Test your contact form
3. Customize email templates (optional)
4. Monitor submissions in Vercel/Netlify dashboard
