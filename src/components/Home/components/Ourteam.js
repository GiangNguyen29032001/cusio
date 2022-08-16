import "./Ourteam.scss"
import image1 from "../../../assets/images/team1.jpg"
import image2 from "../../../assets/images/team2.jpg"
import image3 from "../../../assets/images/team3.jpg"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons"

export default function Ourteam() {
    return (

        <body id="TEAM" className="tongteam">
            <div className="teamtong">
                <h1 className="ourteam">OUR TEAM</h1>
                <hr className="gachour"></hr>
            </div>
            <div className="tonganhteam">
                <div className="tongimage1team">
                    <img src={image1} className="anhteam" />
                    <div className="bg-color"></div>
                    <div className="tenteam">SAMANTA L.</div>
                    <div className="motateam">Architect</div>
                    <div className="theicon">
                        <div className="anh-icon"><FacebookOutlined /></div>
                        <div className="anh-icon"><InstagramOutlined /></div>
                        <div className="anh-icon"><LinkedinOutlined /></div>
                        <div className="anh-icon"><TwitterOutlined /></div>
                    </div>
                </div>
                <div className="tongimage1team">
                    <img src={image2} className="anhteam" />
                    <div className="bg-color"></div>
                    <div className="tenteam">PAMELA K.</div>
                    <div className="motateam">Designer</div>
                    <div className="theicon">
                        <div className="anh-icon"><FacebookOutlined /></div>
                        <div className="anh-icon"><InstagramOutlined /></div>
                        <div className="anh-icon"><LinkedinOutlined /></div>
                        <div className="anh-icon"><TwitterOutlined /></div>
                    </div> 
                </div>
                <div className="tongimage1team">
                    <img src={image3} className="anhteam" />
                    <div className="bg-color"></div>
                    <div className="tenteam">MICHEAL J.</div>
                    <div className="motateam">Planner</div>
                    <div className="theicon">
                        <div className="anh-icon"><FacebookOutlined /></div>
                        <div className="anh-icon"><InstagramOutlined /></div>
                        <div className="anh-icon"><LinkedinOutlined /></div>
                        <div className="anh-icon"><TwitterOutlined /></div>
                    </div>
                </div>

            </div>
            <div className="tongclients">
                <div className="tongclients1">
                    <div className="soclients">150
                        <h1 className="clienst">Clients</h1>
                    </div>
                    <div className="soclients">620
                        <h1 className="clienst">Projects</h1>
                    </div>
                    <div className="soclients">25
                        <h1 className="clienst">Awards</h1>
                    </div>
                    <div className="soclients">940
                        <h1 className="clienst">Coffee</h1>
                    </div>
                </div>

            </div>
            <div id="PORTFOLIO"></div>
        </body>
    )
}