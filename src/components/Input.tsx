'use client'

import { useState } from "react"
import { Card } from "./Card"

export default function Input() {
    const [value, setValue] = useState('')
    const [content, setContent] = useState('')

    // it just send the text to server
    const sendMessage =async (message:string)=>{
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })

        setContent(await response.json())
        return response


    }
    

    return (
        <div>
            <textarea  className='border-2 '  value={value} onChange={e => setValue(e.target.value)} cols={30} rows={10} />

            <button className="bg-blue-800 text-white p-2 m-1 rounded-xl" onClick={()=>sendMessage(value)}>Send</button>


            <Card content={content} />
        </div>
    )
}