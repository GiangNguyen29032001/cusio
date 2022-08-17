import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
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
    const databien = [
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

    ]
    const [tenbien, setTenbien] = useState([])
    const databien1 = [
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

    ]
    const [tenbien1, setTenbien1] = useState([])
    const databien2 = [
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
    ]
    const [tenbien2, setTenbien2] = useState([])
    const databien3 = [
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
    ]
    const [tenbien3, setTenbien3] = useState([])
    const [tab, settab] = useState('all')
    const [mua, setMua] = useState('')
    const [mua1, setMua1] = useState('')
    const [mua2, setMua2] = useState('')
    const [mua3, setMua3] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setTenbien(databien)
           }, 3000)
       
        setTenbien1(databien1)
        setTenbien2(databien2)
        setTenbien3(databien3)
    }, [])

    useEffect(() => {
       setTimeout(() => {
        setMua('')
       }, 3000)
    }, [mua])

    // const loadmore = () =>{
    //     setTenbien(databien)
    // }

    console.log(mua)
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
                {/* {tab === 'all' ? <button onClick={() => setTenbien(databien)}>load more</button> : ''} */}

                {tab === 'all' ? <div className="allimagechitiet">

                    {tenbien.map((item, key) => {
                        return (
                            <div className="bocanhchitietour" onClick={() => setMua(item.anh)}>
                                <img src={item.anh} className='anhchitietour' />
                                <div className="bg-color"></div>
                                <div className="tenteam">{mua === item.anh ? 'damua' : item.tenteam}</div>
                                <div className="motateam">{item.motateam}</div>
                            </div>
                        )
                    })}

                </div> : ''}
            </div>

            <div>
                {/* {tab === 'graphic' ? <button onClick={() => setTenbien1(databien1)}>load</button> : ''} */}
                {tab === 'graphic' ? <div className="allimagechitiet">
                    {
                        tenbien1.map((item, key) => {
                            return (
                                <div className="bocanhchitietour" onClick={() => setMua1(item.anh)}>
                                    <img src={item.anh} className='anhchitietour' />
                                    <div className="bg-color"></div>
                                    <div className="tenteam">{mua1 === item.anh ? 'damua' : item.tenteam}</div>
                                    <div className="motateam">{item.motateam}</div>
                                </div>
                            )
                        })
                    }

                </div> : ''}
            </div>
            <div>
                {/* {tab === 'webdesign' ? <button onClick={() => setTenbien2(databien2)}>load</button> : ''} */}
                {tab === 'webdesign' ? <div className="allimagechitiet">
                    {
                        tenbien2.map((item, key) => {
                            return (
                                <div className="bocanhchitietour" onClick={() => setMua2(item.tenteam)}>
                                    <img src={item.anh} className='anhchitietour' />
                                    <div className="bg-color"></div>
                                    <div className="tenteam">{mua2 === item.tenteam ? 'damua' : item.tenteam}</div>
                                    <div className="motateam">{item.motateam}</div>
                                </div>
                            )
                        })
                    }
                </div> : ''}
            </div>
            <div>
                {/* {tab === 'webdevelopment' ? <button onClick={() => setTenbien3(databien3)}>load</button> : ''} */}

                {tab === 'webdevelopment' ? <div className="allimagechitiet">
                    {
                        tenbien3.map((item, key) => {
                            return (
                                <div className="bocanhchitietour" onClick={() => setMua3(item.tenteam)}>
                                    <img src={item.anh} className='anhchitietour' />
                                    <div className="bg-color"></div>
                                    <div className="tenteam">{mua3 === item.tenteam ? 'damua' : item.tenteam}</div>
                                    <div className="motateam">{mua3 === item.tenteam ? 'hello' : item.motateam}</div>
                                </div>
                            )
                        })
                    }
                </div> : ''}
            </div>

        </body>
    )
}