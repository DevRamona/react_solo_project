import React from "react";
import email from "../images/envelope-solid.svg"

export default function Home() {
    return (
        <div className="pl-7 ">
            <h1 className="text-white text-2xl">Ramona Ingabire</h1>
            <h2 className="text-orange-400 pl-2">Frontend developer</h2>
            <p className=" text-white pl-3 text-sm mb-3">ramonaingabire.website</p>
            <button className="bg-gray-300 px-24 py-2 rounded-md" >Email</button>
            
        </div>
    )

}