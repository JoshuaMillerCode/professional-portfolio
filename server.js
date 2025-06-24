import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'build')));

app.post('/api/email', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, subject, message } = req.body;
    await resend.emails.send({
      from: 'Portfolio Form <contact@joshuarmiller.dev>',
      to: ['millerjoshua737@gmail.com'],
      subject: subject || 'New Contact Form Submission',
      replyTo: email,
      html: `
        <div style="max-width:520px;margin:40px auto;padding:32px 28px;background:#fff;border-radius:12px;box-shadow:0 2px 16px rgba(40,40,40,0.08);font-family:Arial,sans-serif;color:#222;">
          <h2 style="margin-top:0;margin-bottom:24px;font-size:1.5rem;color:#10c5fc;letter-spacing:1px;">New Contact Form Submission</h2>
          <div style="margin-bottom:16px;"><strong>Name:</strong> <span style="color:#444;">${fullName}</span></div>
          <div style="margin-bottom:16px;"><strong>Email:</strong> <span style="color:#444;">${email}</span></div>
          <div style="margin-bottom:16px;"><strong>Phone Number:</strong> <span style="color:#444;">${phoneNumber || '<em>Not provided</em>'}</span></div>
          <div style="margin-bottom:16px;"><strong>Subject:</strong> <span style="color:#444;">${subject}</span></div>
          <div style="margin-bottom:16px;"><strong>Message:</strong></div>
          <div style="background:#f7f7f7;padding:16px 14px;border-radius:8px;color:#333;white-space:pre-line;">${message}</div>
        </div>
      `,
    });
    res.status(200).send('Email sent successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

export default app;
