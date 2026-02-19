import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            console.error('Missing RESEND_API_KEY');
            return NextResponse.json(
                { error: 'Server configuration error: Missing API key' },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);
        const { name, email, company, message } = await req.json();

        // Send Email via Resend (DB insert is handled by the frontend directly)
        const { data: emailData, error: emailError } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'srivallikolluru4@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #00d4aa;">New Contact Form Submission</h2>
                    <hr style="border: 1px solid #eee;" />
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p style="margin-top: 20px;"><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #00d4aa;">
                        ${message}
                    </div>
                </div>
            `,
        });

        if (emailError) {
            console.error('Resend Error:', emailError);
            return NextResponse.json(
                { error: 'Failed to send notification email', details: emailError.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data: emailData });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
