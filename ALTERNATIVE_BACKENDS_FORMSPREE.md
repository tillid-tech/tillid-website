# Formspree Setup Guide

Quick 3-step setup to get your contact form working.

## Step 1: Create Formspree Account

1. Go to **https://formspree.io/**
2. Click "Get Started" (free account)
3. Sign up with your email

## Step 2: Create Your Form

1. Click **"+ New Form"**
2. Enter the email where you want to receive messages: **hello@tillid.tech**
3. Give your form a name: "Tillid Contact Form"
4. Click "Create Form"
5. Copy the **Form ID** (looks like: `xyzabc123`)

## Step 3: Update Your Website

1. Open `index.html`
2. Find line 76 (the form action)
3. Replace `YOUR_FORM_ID` with your actual Form ID

**Before:**
```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**After:**
```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
```

## That's It!

Your contact form is now live. When someone submits the form:
- They'll see a success message on your site
- You'll receive an email at **hello@tillid.tech**
- The email will include their name, email, and message

## Free Plan Limits

- **50 submissions per month**
- Unlimited forms
- Email notifications
- Spam filtering included

## Testing Your Form

1. Open your website in a browser
2. Fill out the contact form
3. Click "Send Message"
4. Check **hello@tillid.tech** for the email

## Formspree Dashboard Features

- View all form submissions
- Download submissions as CSV
- Set up auto-responses
- Configure spam filtering
- Add reCAPTCHA (optional)

## Upgrading Later

When you need more than 50 submissions/month:
- **Gold Plan**: $10/month for 1,000 submissions
- Or switch to EmailJS (200 free/month) - see `DEPLOYMENT.md`
- Or use Custom Backend (unlimited) - see `DEPLOYMENT.md`

---

**Support:** If you have issues, contact Formspree support at https://help.formspree.io/
