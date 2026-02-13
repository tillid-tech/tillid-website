# Custom Backend Setup - Quick Start Guide

Your contact form backend is 100% ready! Just deploy and configure.

## 🏗️ Deployment Architecture

**Hybrid Approach (Recommended):**
- **Frontend**: GitHub Pages (tillid.tech) - Static files (HTML, CSS, JS)
- **Backend**: Vercel/Netlify - Serverless function `/api/contact`

This is a professional, common setup that keeps everything free!

---

## ⚡ Quick Deploy Backend (Choose One Platform)

### Option 1: Vercel (Recommended - Easiest & Free Forever)

```bash
# 1. Install Vercel CLI (one-time)
npm install -g vercel

# 2. Deploy backend
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Link to project? N
# - Project name? tillid-backend (or tillid-api)
# - Code location? ./
# - Modify settings? N

# 3. Copy the deployment URL (e.g., tillid-backend.vercel.app)

# 4. Add environment variables
vercel env add EMAIL_USER
# Enter: your-email@gmail.com (for sending emails)

vercel env add EMAIL_PASS
# Enter: your-app-specific-password (see below)

# 5. Deploy to production
vercel --prod

# 6. Copy your production URL (shown after deployment)
```

---

### Option 2: Netlify (Also Great & Free)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy backend
netlify deploy

# Follow prompts:
# - Create new site
# - Site name? tillid-backend
# - Publish directory? .

# 4. Copy the deployment URL

# 5. Set environment variables in Netlify dashboard
# Go to: Site settings → Environment variables → Add variables
# EMAIL_USER: your-email@gmail.com
# EMAIL_PASS: your-app-specific-password

# 6. Deploy to production
netlify deploy --prod

# 7. Copy your production URL (shown after deployment)
```

---

## 🔗 Connect Frontend to Backend

After deploying, update `script.js` with your backend URL:

**Find line 33 in `script.js`:**
```javascript
: 'https://YOUR_BACKEND_URL.vercel.app/api/contact';
```

**Replace with your actual URL:**
```javascript
: 'https://tillid-backend.vercel.app/api/contact';
```

**Then commit and push to GitHub Pages:**
```bash
git add script.js
git commit -m "Connect frontend to backend"
git push origin main
```

Your GitHub Pages site will automatically update!

---

## 🔑 Getting Gmail App-Specific Password

Your regular Gmail password won't work. Create an app password:

1. Go to **Google Account**: https://myaccount.google.com/
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** (if not already)
4. Scroll down to **App passwords**
5. Click **App passwords**
6. Select app: **Mail**
7. Select device: **Other (Custom name)** → Enter "Tillid Website"
8. Click **Generate**
9. Copy the 16-character password (like: `abcd efgh ijkl mnop`)
10. Use this password for `EMAIL_PASS`

**Note:** You can only see this password once, so copy it immediately!

---

## 📧 Environment Variables Explained

| Variable | What It Is | Example |
|----------|-----------|---------|
| `EMAIL_USER` | Email that **sends** the form submissions | `contact@gmail.com` |
| `EMAIL_PASS` | App-specific password (NOT regular password) | `abcd efgh ijkl mnop` |

**Where emails go:** Always to `hello@tillid.tech` (hardcoded in `api/contact.js`)

---

## ✅ After Deployment

1. **Get your URL** from Vercel/Netlify (e.g., `tillid-website.vercel.app`)
2. **Test the form** on your deployed site
3. **Check `hello@tillid.tech`** for the test email
4. **Update DNS** (if needed) to point `tillid.tech` to your new backend

---

## 🎯 Benefits You Now Have

✅ **Unlimited** form submissions (no 50/month limit)
✅ **Free forever** on Vercel/Netlify free tier
✅ **Full control** over email templates
✅ **No third-party** services required
✅ **Professional** infrastructure
✅ **Fast** serverless functions
✅ **Automatic** spam filtering and validation

---

## 🔧 Customizing Emails (Optional)

Edit `api/contact.js` to customize the email template:

```javascript
// Line 47-54 in api/contact.js
html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${from_name}</p>
    <p><strong>Email:</strong> ${from_email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
`
```

Add your logo, change colors, add company branding - it's all yours!

---

## 🐛 Troubleshooting

**Error: "Failed to send email"**
- Check environment variables are set correctly in Vercel/Netlify dashboard
- Verify app-specific password is active
- Make sure 2-Step Verification is enabled on Google account

**Error: "Module not found: nodemailer"**
- Run `npm install` locally
- Vercel/Netlify will auto-install from package.json

**Emails not arriving**
- Check spam folder in hello@tillid.tech
- Verify EMAIL_USER has permission to send emails
- Check Vercel/Netlify function logs for errors

---

## 📊 Monitoring

**Vercel Dashboard:**
- View function execution logs
- See error rates
- Monitor performance

**Netlify Dashboard:**
- Function invocations
- Error tracking
- Build logs

---

## 🚀 Next Steps

1. ✅ Deploy to Vercel or Netlify (10 mins)
2. ✅ Set environment variables (5 mins)
3. ✅ Test the form
4. ✅ Update DNS if needed
5. ✅ Enjoy unlimited free form submissions!

**Support:** If you have any issues, check the platform docs:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com/
