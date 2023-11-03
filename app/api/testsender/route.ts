import {NextRequest, NextResponse} from 'next/server'
import { Resend } from 'resend';

export async function GET(request: NextRequest) {
    const email = request.nextUrl.searchParams.get('email') as string;

    try {
        const resend = new Resend('***');

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev', email],
            subject: 'Test from Moneyac',
            text: 'Test is ok if you see this (text)',
            attachments: [],
            headers: {
                'X-Entity-Ref-ID': '123456789',
            },
            tags: [
                {
                    name: 'category',
                    value: 'confirm_email',
                },
            ],
            html: '<p>Test is ok if you see <strong>this</strong>!</p>'
        });

        const sent = 'sent';

        let json_response = {
            status: "success",
            data: {
                sent
            },
        };

        return new NextResponse(JSON.stringify(json_response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        if (error.code === "P2002") {
            let error_response = {
                status: "fail",
                message: "Feedback with title already exists",
            };
            return new NextResponse(JSON.stringify(error_response), {
                status: 409,
                headers: { "Content-Type": "application/json" },
            });
        }

        let error_response = {
            status: "error",
            message: error.message,
        };
        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

