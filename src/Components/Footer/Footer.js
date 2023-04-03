import React from 'react'
import Instagram from "../../Common/images/instagram.png"
import Youtube from "../../Common/images/youtube.png"
import Tiktok from "../../Common/images/tiktok.png"
import Email from "../../Common/images/email.png"
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="links">
                <a href="https://www.instagram.com/reverenetwork/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="instagram logo" />
                </a>
                <a href="https://www.tiktok.com/@reverenetwork" target="_blank" rel="noreferrer">
                    <img className="smallify" src={Tiktok} alt="tiktok logo" />
                </a>
                <a href="https://www.youtube.com/reverenetwork" target="_blank" rel="noreferrer">
                    <img src={Youtube} alt="youtube logo" />
                </a>
                <a href="mailto:info@revnet.org" target="_blank" rel="noreferrer">
                    <img src={Email} alt="email logo" />
                </a>
            </div>
            <p>&copy; 2022 Revere Network</p>
        </footer>
    )
}