import "./Ourteam.scss"
import image1 from "../../../assets/images/team1.jpg"
import image2 from "../../../assets/images/team2.jpg"
import image3 from "../../../assets/images/team3.jpg"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons"
import { useState, useEffect} from "react"

export default function Ourteam() {
    const [tenbien,setTenbien] = useState([
        {
            anh:image1,
            tenteam:'SAMANTA L.',
            motateam:'Architect'
        },
        {
            anh:image2,
            tenteam:'SAMANTA L.',
            motateam:'Architect'
        },
        {
            anh:image3,
            tenteam:'SAMANTA L.',
            motateam:'Architect'
        },
        
    ])
    const [thaydoi,setThaydoi] = useState('')
    useEffect(() => {
        setTimeout(() =>
        {
            setThaydoi('')
        },3000)
    }
    )
    return (

        <body id="TEAM" className="tongteam">
            <div className="teamtong">
                <h1 className="ourteam">OUR TEAM</h1>
                <hr className="gachour"></hr>
            </div>
            <div className="tonganhteam">
            {tenbien.map((item, key) => {
                        return (
                <div className="tongimage1team" onClick={() => setThaydoi(item.anh)}>
                    <img src={item.anh} className="anhteam" />
                    <div className="bg-color"></div>
                    <div className="tenteam">{ thaydoi === item.anh ?'damua' :item.tenteam}</div>
                    <div className="motateam">{item.motateam}</div>
                    <div className="theicon">
                        <div className="anh-icon"><FacebookOutlined /></div>
                        <div className="anh-icon"><InstagramOutlined /></div>
                        <div className="anh-icon"><LinkedinOutlined /></div>
                        <div className="anh-icon"><TwitterOutlined /></div>
                    </div>
                </div>
                          )
                        })}
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