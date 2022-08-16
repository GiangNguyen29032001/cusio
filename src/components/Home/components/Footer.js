import './Footer.scss'
import image1 from "../../../assets/images/logo192.png"
import { FacebookOutlined, GlobalOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
export default function Footer() {

    return (
        <body className='allfooter'>
            <div className='allfooter-1'>
                <img src={image1} className="logofooter" />
                <div className='all-icon'>
                    <ul className='all-icon1'>
                        <li><FacebookOutlined className='iconfooter' /></li>
                        <li><TwitterOutlined className='iconfooter' /></li>
                        <li><InstagramOutlined className='iconfooter' /></li>
                        <li><LinkedinOutlined className='iconfooter' /></li>
                        <li><GlobalOutlined className='iconfooter' /></li>
                        <li><YoutubeOutlined className='iconfooter' /></li>
                    </ul>
                </div>
            </div>
            <div className='allright'>
                <p>© 2017. Crucio. All Rights Reserved.</p>
            </div>
        </body>
    )
}