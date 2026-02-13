// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler with Custom Backend
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const button = this.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('form-status');
    const originalButtonText = button.innerText;
    const formData = new FormData(this);

    // Disable button and show loading state
    button.innerText = 'Sending...';
    button.disabled = true;

    try {
        // Send data to custom backend
        // IMPORTANT: Replace with your actual Vercel/Netlify backend URL after deployment
        const backendUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? '/api/contact'  // For local Vercel dev
            : 'https://tillid-website.vercel.app/api/contact';  // Replace after deploying backend

        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from_name: formData.get('from_name'),
                from_email: formData.get('from_email'),
                message: formData.get('message')
            })
        });

        const data = await response.json();

        if (response.ok) {
            statusDiv.innerHTML = '<p style="color: #4B533A; margin-top: 1rem;">Message sent successfully! We\'ll get back to you soon.</p>';
            document.getElementById('contact-form').reset();

            // Clear success message after 5 seconds
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 5000);
        } else {
            throw new Error(data.error || 'Failed to send message');
        }
    } catch (error) {
        statusDiv.innerHTML = '<p style="color: #A65D57; margin-top: 1rem;">Oops! Something went wrong. Please try again.</p>';
        console.error('Form submission error:', error);
    } finally {
        button.innerText = originalButtonText;
        button.disabled = false;
    }
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});
