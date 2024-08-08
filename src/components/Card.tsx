import { convertText } from "@/utilis/convertText";
import { useEffect } from "react";

export function Card({ content }: { content: string }) {
  const cards = convertText(content);

  // useEffect(()=>{
  //     console.log(content)
  // },[content])

  return (
    <div className="border rounded-md">
      {cards?.map((card, index) => (
        <div key={index} className="border shadow-sm rounded-md">
          <div className="p-2">{index + 1}</div>
          <div className="">{card}</div>
        </div>
      ))}
    </div>
  );
}
