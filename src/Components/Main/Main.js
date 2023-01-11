import Logo from "../../Common/images/revnet-logo.png"
import Revere from "../../Common/images/revere.png"
import Instagram from "../../Common/images/instagram.png"
import Youtube from "../../Common/images/youtube.png"
import Tiktok from "../../Common/images/tiktok.png"
import Email from "../../Common/images/email.png"
import "./Main.css"

export default function Main() {
    return (
        <div className="main-body">
            <header className="main-header">
                <a href="/">
                    <img className="site-logo" src={Logo} alt="The Revere Network logo, a stylized circle with a capital letter R in the center, with the words Revere and Network surrounding."/>
                </a>
            </header>
            <div className="donate">
                <h1>Donate to Revere Network</h1>
                <a href="https://revnet.churchcenter.com/giving" target="_blank">
                    <button className="donate-button">Donate</button>
                </a>
            </div>
            <div className="description">
                <h2>Watch. Learn. Grow.</h2>
                <p>Revere Network is just that: a network of believers committed to the 
                    <i>grace</i> of God, the <i>power</i> of the Holy Spirit and the 
                    <i>work</i> of the Church.</p>
            </div>
            <div className="subsplash">
                <h2>Hub for theological mutts.</h2>
                <a href="https://www.subscribestar.com/revere-network" target="_blank">
                    <button className="subsplash-button">Join the Network</button>
                </a>
            </div>
            <div className="youtube">
                <img src={Revere} alt="a stylized depiction of paul revere on his horse during the midnight ride."/>
                <div className="youtube-wrapper">
                    <p>Like modern day Paul Reveres, we're here to announce to the world that</p>
                    <h2>"The Kingdom is Here."</h2>
                    <a href="https://www.youtube.com/@RevereNetwork" target="_blank">
                        <button className="youtube-button">Watch</button>
                    </a>
                </div>
            </div>
            <footer>
                <div className="links">
                    <a href="https://www.instagram.com/reverenetwork/" target="_blank">
                        <img src={Instagram} alt="instagram logo"/>
                    </a>
                    <a href="https://www.tiktok.com/@reverenetwork" target="_blank">
                        <img src={Tiktok} alt="tiktok logo"/>
                    </a>
                    <a href="https://www.youtube.com/reverenetwork" target="_blank">
                        <img src={Youtube} alt="youtube logo"/>
                    </a>
                    <a href="mailto:info@revnet.org" target="_blank">
                        <img className="smallify" src={Email} alt="email logo"/>
                    </a>
                </div>
                <p>&copy; 2022 Revere Network</p>
            </footer>
        </div>
    )
}