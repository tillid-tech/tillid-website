# Tillid Website - Custom Backend Deployment Guide

This guide explains how to deploy your website with a custom email backend to free hosting platforms.

## Backend Architecture

The contact form uses a serverless function (`api/contact.js`) that:
- Validates form input
- Sends emails using Nodemailer
- Returns JSON responses
- Supports CORS for security

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Free Tier:** Unlimited personal projects, 100GB bandwidth/month

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set Environment Variables:**
   ```bash
   vercel env add EMAIL_USER
   # Enter your email (e.g., contact@example.com)

   vercel env add EMAIL_PASS
   # Enter your app-specific password
   ```

4. **Redeploy:**
   ```bash
   vercel --prod
   ```

**Getting App-Specific Password (Gmail):**
- Go to Google Account → Security → 2-Step Verification
- Scroll to "App passwords"
- Create a new app password for "Mail"
- Use this password (not your regular Gmail password)

---

### Option 2: Netlify

**Free Tier:** 100GB bandwidth/month, 300 build minutes/month

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy
   ```

3. **Set Environment Variables:**
   - Go to Netlify dashboard
   - Site settings → Environment variables
   - Add: `EMAIL_USER` and `EMAIL_PASS`

4. **Deploy to production:**
   ```bash
   netlify deploy --prod
   ```

---

### Option 3: Railway

**Free Tier:** $5 credit/month (enough for small sites)

1. **Sign up at https://railway.app**

2. **Create new project from GitHub repo**

3. **Add environment variables:**
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your app-specific password

4. **Deploy automatically on git push**

---

### Option 4: Render

**Free Tier:** 750 hours/month, auto-sleep after 15 min inactivity

1. **Sign up at https://render.com**

2. **Create new Web Service from GitHub**

3. **Set environment variables:**
   - `EMAIL_USER`
   - `EMAIL_PASS`

4. **Deploy automatically**

---

## Environment Variables

All platforms require these environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Your email address | `contact@tillid.tech` |
| `EMAIL_PASS` | App-specific password | `abcd efgh ijkl mnop` |

---

## Email Service Configuration

The backend supports multiple email services. Edit `api/contact.js` line 32:

**Gmail (default):**
```javascript
service: 'gmail'
```

**Outlook:**
```javascript
service: 'outlook'
```

**Custom SMTP:**
```javascript
host: 'smtp.yourprovider.com',
port: 587,
secure: false,
auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
}
```

---

## Testing Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

3. **Run local server:**
   ```bash
   npm start
   ```

4. **Test the form at:** http://localhost:8000

---

## Security Notes

- Never commit `.env` file to git (already in `.gitignore`)
- Use app-specific passwords, not your main email password
- The backend validates all inputs
- CORS is enabled for security
- Emails are sent to `hello@tillid.tech` (hardcoded in backend)

---

## Troubleshooting

**Issue:** "Failed to send email"
- Check environment variables are set correctly
- Verify app-specific password is active
- Check email service configuration

**Issue:** "CORS error"
- Ensure backend URL matches your domain
- Check headers in `api/contact.js`

**Issue:** "500 error"
- Check backend logs in your hosting dashboard
- Verify nodemailer configuration

---

## Files Overview

- `api/contact.js` - Serverless backend function
- `script.js` - Frontend form handler
- `vercel.json` - Vercel configuration
- `netlify.toml` - Netlify configuration
- `package.json` - Dependencies

---

## Switching from GitHub Pages

If currently on GitHub Pages:

1. Choose a platform (Vercel recommended)
2. Deploy using steps above
3. Update DNS to point to new platform
4. Keep GitHub repo as source control

---

## Next Steps

1. Choose your preferred platform
2. Set up environment variables
3. Deploy using the platform's CLI or dashboard
4. Test the contact form
5. Update DNS if needed

For support: hello@tillid.tech
