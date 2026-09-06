import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Move initialization inside the handler to better catch init errors,
// or wrap it in a way that guarantees a JSON response.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Check for API Key immediately
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY is not defined in environment variables.');
    return res.status(500).json({ 
      error: 'Server configuration error: API key not found.' 
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`Attempting to send email to Resend for: ${email}`);

    const data = await resend.emails.send({
      from: 'Ace Bookkeeping Website <Request@acebookkeeping.uk>',
      to: 'andy@acebookkeeping.uk',
      subject: `New Website Enquiry from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('✅ Email sent successfully:', data);
    return res.status(200).json({ success: true, data });

  } catch (error) {
    // 2. Log the actual error from Resend to your terminal
    console.error('🔥 Error caught in API handler:', error);
    
    // Ensure we return a JSON response so the frontend doesn't crash
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Unknown internal server error' 
    });
  }
}