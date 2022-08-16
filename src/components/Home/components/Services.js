import { AliwangwangOutlined, CameraOutlined, ContainerOutlined, DesktopOutlined, HolderOutlined, StepForwardOutlined, StockOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import "./Services.scss"

export default function Services() {
    return (
        <>
            <body  className="tongpghansevieces">
                <div className="phantext">
                    <h2 className="sevices">SERVICES</h2>
                    <hr className="gachduoisevices"></hr>
                    <p className="textlorem">

                        Lorem ipsum dolor sit amet,
                        <b> consectetur</b> adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis <br />nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                        Quis aute iure reprehenderit in
                        <b> voluptate</b> velit esse cillum dolore eu fugiat<br /> nulla pariatur.
                        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
               <div className='tongiconlon'>
               <div className='tongicon'>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><DesktopOutlined  /></i>
                        <h1 className='textduoiicon'>WEB DESIGN</h1>
                    </div>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><ContainerOutlined  /></i>
                        <h1 className='textduoiicon'>BRAND DESIGN</h1>
                    </div>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><HolderOutlined /></i>
                        <h1 className='textduoiicon'>UI/UX DESIGN</h1>
                    </div>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><AliwangwangOutlined /></i>
                        <h1 className='textduoiicon'>GRAPHIC DESIGN</h1>
                    </div>
                  
                </div>
                <div className='tongicon'>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><CameraOutlined /></i>
                        <h1 className='textduoiicon'>PHOTOGRAPHY</h1>
                    </div>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><VideoCameraOutlined /></i>
                        <h1 className='textduoiicon'>VIDEO EDITING</h1>
                    </div>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><StockOutlined /></i>
                        <h1 className='textduoiicon'>DATA ANALYSIS</h1>
                    </div>
                    <div className='iconvatext'>
                        <i className='iconcanchinh'><UserOutlined /></i>
                        <h1 className='textduoiicon'>CLIENT ASSISTANCE</h1>
                    </div>
                  
                </div>
               </div>
            </body>
        </>
    )
}