import React from "react";
import facebook from "../images/facebook-fill.png"
import linkedin from "../images/linkedin-fill.png"
import twitter from "../images/twitter-x-line.png"
import instagram from "../images/instagram-line.png"
import github from "../images/github-fill.png"

export default function Footer() {
    return (
        <div className="flex pt-5 pr-16 space-x-3">
            
            <a href="#"><img src={facebook} className="bg-gray-200"></img></a>
            <a href="#"><img src={github}className="bg-gray-200"></img></a>
            <a href="#"><img src={linkedin} className="bg-gray-200"></img></a>
            <a href="#"><img src={twitter} className="bg-gray-200"></img></a>
            <a href="#"><img src={instagram}className="bg-gray-200"></img></a>
            <a href="#"><img src={github}className="bg-gray-200"></img></a>
        </div>
    )
}
