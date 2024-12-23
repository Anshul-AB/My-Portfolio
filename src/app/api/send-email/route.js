import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message } = req.body;

    try {
      await sendgrid.send({
        to: 'your-email@example.com', // Replace with your email
        from: 'your-verified-email@example.com', // Replace with a verified sender email in SendGrid
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\n\nMessage:\n${message}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
