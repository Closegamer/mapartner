import {NextRequest, NextResponse} from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET(request: NextRequest) {
    const subscribe = request.nextUrl.searchParams.get('subscribe') as string;
    const unsubscribe = request.nextUrl.searchParams.get('unsubscribe') as string;

    try {
        let result = null
        let exists = 0
        if(subscribe && unsubscribe == ''){
            exists = await prisma.user.count(
                {
                    where: {
                        email: subscribe
                    }
                }
            )
            if(exists == 0){
                result = await prisma.user.create({
                    data: {
                        email: subscribe,
                        intention: true
                    },
                });
            } else {
                result = 'Email already exists'
            }
        } else if(subscribe == '' && unsubscribe){
            exists = await prisma.user.count(
                {
                    where: {
                        email: unsubscribe
                    }
                }
            )
            if(exists > 0){
                result = await prisma.user.delete({
                    where: {
                        email: unsubscribe,
                    },
                });
            } else {
                result = 'Nothing to delete'
            }
        }

        let json_response = {
            status: "success",
            data: {
                result
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