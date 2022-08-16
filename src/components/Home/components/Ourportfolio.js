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
                    <div className="bocanhchitietour">
                        <img src={image1} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #1</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image2} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #2</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image3} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #3</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image4} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #4</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image5} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #5</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image6} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #6</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image7} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #7</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image8} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #8</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                    <div className="bocanhchitietour">
                        <img src={image1} className='anhchitietour' />
                        <div className="bg-color"></div>
                        <div className="tenteam">Project #9</div>
                        <div className="motateam">work-item-info</div>

                    </div>
                </div> : ''}
            </div>
            <div>
                {tab === 'graphic' ? <div className="allimagechitiet">
                    <div className="bocanhchitietour">
                        <img src={image3} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #3</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image5} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #5</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image6} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #6</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image7} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #7</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                </div> : ''}
            </div>
            <div>
                {tab === 'webdesign' ? <div className="allimagechitiet">
                    <div className="bocanhchitietour">
                        <img src={image1} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #1</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image4} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #4</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image5} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #9</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image6} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #6</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image7} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #9</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                </div> : ''}
            </div>
            <div>
                {tab === 'webdevelopment' ? <div className="allimagechitiet">
                    <div className="bocanhchitietour">
                        <img src={image1} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #1</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                    <div className="bocanhchitietour">
                        <img src={image2} className='anhchitietour' />
                         <div className="bg-color"></div>
                        <div className="tenteam">Project #2</div>
                        <div className="motateam">work-item-info</div>
                        </div>
                </div> : ''}
            </div>

        </body>
    )
}