import { NextResponse } from 'next/server'

export const POST = (req: Request) => {
    try {
        
        return new NextResponse('OK')
    } catch {
        return new NextResponse('Error', { status: 500 })
    }
}
