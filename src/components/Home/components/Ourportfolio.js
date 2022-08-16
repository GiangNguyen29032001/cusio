import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons"
import { useState } from "react"
import image1 from '../../../assets/images/work1.jpg'
import image2 from '../../../assets/images/work2.jpg'
import image3 from '../../../assets/images/work3.jpg'
import image4 from '../../../assets/images/work4.jpg'
import image5 from '../../../assets/images/work5.jpg'
import image6 from '../../../assets/images/work6.jpg'
import image7 from '../../../assets/images/work7.jpg'
import image8 from '../../../assets/images/work8.jpg'

import "./Ourportfolio.scss"
export default function Ourportfolio() {
    const [tenbien, setTenbien] = useState([
        {
            anh: image1,
            tenteam: 'Project #1',
            motateam: 'work-item-info',
        },
        {
            anh: image2,
            tenteam: 'Project #2',
            motateam: 'work-item-info',
        },
        {
            anh: image3,
            tenteam: 'Project #3',
            motateam: 'work-item-info',
        },
        {
            anh: image4,
            tenteam: 'Project #4',
            motateam: 'work-item-info',
        },
        {
            anh: image5,
            tenteam: 'Project #5',
            motateam: 'work-item-info',
        },
        {
            anh: image6,
            tenteam: 'Project #6',
            motateam: 'work-item-info',
        },
        {
            anh: image7,
            tenteam: 'Project #7',
            motateam: 'work-item-info',
        },
        {
            anh: image8,
            tenteam: 'Project #8',
            motateam: 'work-item-info',
        },

    ])
    const [tenbien1, setTenbien1] = useState([

        {
            anh: image3,
            tenteam: 'Project #3',
            motateam: 'work-item-info',
        },
        {
            anh: image5,
            tenteam: 'Project #5',
            motateam: 'work-item-info',
        },
        {
            anh: image7,
            tenteam: 'Project #7',
            motateam: 'work-item-info',
        },
        {
            anh: image8,
            tenteam: 'Project #8',
            motateam: 'work-item-info',
        }

    ])
    const [tenbien2, setTenbien2] = useState([

        {
            anh: image2,
            tenteam: 'Project #2',
            motateam: 'work-item-info',
        },
        {
            anh: image4,
            tenteam: 'Project #4',
            motateam: 'work-item-info',
        },
        {
            anh: image5,
            tenteam: 'Project #5',
            motateam: 'work-item-info',
        },
        {
            anh: image6,
            tenteam: 'Project #6',
            motateam: 'work-item-info',
        },
        {
            anh: image7,
            tenteam: 'Project #7',
            motateam: 'work-item-info',
        },
        {
            anh: image8,
            tenteam: 'Project #8',
            motateam: 'work-item-info',
        }

    ])
    const [tenbien3, setTenbien3] = useState([

        {
            anh: image2,
            tenteam: 'Project #2',
            motateam: 'work-item-info',
        },
        {
            anh: image4,
            tenteam: 'Project #4',
            motateam: 'work-item-info',
        },
      

    ])
    const [tab, settab] = useState('all')
    return (
        <body className="tongourpor">
            <div className="textvagachchan">
                <h1 className="ourpor">OUR PORTFOLIO</h1>
                <hr className="gachchanour"></hr>
            </div>
            <div className="chitietourpor">
                <div className={`all-1 ${tab === 'all' ? 'tab-active' : ''}`} onClick={() => settab('all')}>All</div>
                <div className={`all-1 ${tab === 'graphic' ? 'tab-active' : ''}`} onClick={() => settab('graphic')}>Graphic Design</div>
                <div className={`all-1 ${tab === 'webdesign' ? 'tab-active' : ''}`} onClick={() => settab('webdesign')}>Web Design</div>
                <div className={`all-1 ${tab === 'webdevelopment' ? 'tab-active' : ''}`} onClick={() => settab('webdevelopment')}>Web Development</div>
            </div>
            <div>

                {tab === 'all' ? <div className="allimagechitiet">
                    {tenbien.map((item, key) => {
                        return (
                            <div className="bocanhchitietour">
                                <img src={item.anh} className='anhchitietour' />
                                <div className="bg-color"></div>
                                <div className="tenteam">{item.tenteam}</div>
                                <div className="motateam">{item.motateam}</div>
                            </div>
                        )
                    })}

                </div> : ''}
            </div>
            <div>
                {tab === 'graphic' ? <div className="allimagechitiet">
                    {
                        tenbien1.map((item, key) => {
                            return (
                                <div className="bocanhchitietour">
                                    <img src={item.anh} className='anhchitietour' />
                                    <div className="bg-color"></div>
                                    <div className="tenteam">{item.tenteam}</div>
                                    <div className="motateam">{item.motateam}</div>
                                </div>
                            )
                        })
                    }

                </div> : ''}
            </div>
            <div>
                {tab === 'webdesign' ? <div className="allimagechitiet">
                    {
                        tenbien2.map((item, key) => {
                            return (
                                <div className="bocanhchitietour">
                                    <img src={item.anh} className='anhchitietour' />
                                    <div className="bg-color"></div>
                                    <div className="tenteam">{item.tenteam}</div>
                                    <div className="motateam">{item.motateam}</div>
                                </div>
                            )
                        })
                    }
                </div> : ''}
            </div>
            <div>
                {tab === 'webdevelopment' ? <div className="allimagechitiet">
                    {
                        tenbien3.map((item, key) => {
                            return (
                                <div className="bocanhchitietour">
                                    <img src={item.anh} className='anhchitietour' />
                                    <div className="bg-color"></div>
                                    <div className="tenteam">{item.tenteam}</div>
                                    <div className="motateam">{item.motateam}</div>
                                </div>
                            )
                        })
                    }
                </div> : ''}
            </div>

        </body>
    )
}