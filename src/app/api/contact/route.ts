import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

export async function POST(req: Request) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!resendApiKey || !supabaseUrl || !supabaseAnonKey) {
            console.error('Missing environment variables');
            return NextResponse.json(
                { error: 'Server configuration error: Missing API keys' },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);
        const { name, email, company, message } = await req.json();

        // 1. Save to Supabase
        if (!supabase) {
            console.error('Supabase client not initialized');
            return NextResponse.json(
                { error: 'Server configuration error: Supabase client not initialized' },
                { status: 500 }
            );
        }

        const { error: supabaseError } = await supabase
            .from('contacts')
            .insert([{
                name,
                email,
                company,
                message
            }]);

        if (supabaseError) {
            console.error('Supabase Error Detailed:', supabaseError);
            return NextResponse.json(
                {
                    error: 'Failed to save contact information',
                    details: supabaseError.message,
                    code: supabaseError.code
                },
                { status: 500 }
            );
        }

        // 2. Send Email via Resend
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
