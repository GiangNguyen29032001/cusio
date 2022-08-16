import "./Menu.scss"
import image1 from '../../../assets/images/logo192.png'

export default function Menu() {
    // const history = useHistory();
    return (
        <body className="tonghome">
            <div className="tongmenu">
                <div className="anhlogo">
                    <img src={image1} className="anhlogomenu" />
                </div>
                <div className="menu">
                    <ul className="menunho">
                        <li className="chumenu"><a className="chumenu" href="#menu">HOME</a></li>
                        <li className="chumenu"><a className="chumenu" href="#wellcome">ABOUT</a></li>
                        <li className="chumenu"><a className="chumenu" href="#SERVICES">SERVICES</a></li>
                        <li className="chumenu"><a className="chumenu" href="#TEAM">TEAM</a></li>
                        <li className="chumenu"><a className="chumenu" href="#PORTFOLIO">PORTFOLIO</a></li>
                        <li className="chumenu"><a className="chumenu" href="">BLOG</a></li>
                        <li className="chumenu"><a className="chumenu" href="#CONTACT">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <div id="menu" className="phantextcruto">
                <div className="crucio">CRUCIO</div>
                <div className="gachduoicucio"></div>
                <div id="wellcome" className="powe">POWERFUL WEBSITE</div>
            </div >
        </body>
    )
}