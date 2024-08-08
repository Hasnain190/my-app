'use server'
import { NextResponse } from "next/server"
import { main } from "./server"



export async function POST(request:Request) {
    try {

        const {message} = await request.json()

        const aiResponse =  await main(message)

        const aiReceivedMessage = aiResponse.choices[0].message.content

        
        

        
        console.log(aiReceivedMessage)
        return NextResponse.json(aiReceivedMessage)
    } catch (error) {
        
        console.log(error)
    }
}

