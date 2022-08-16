import './Thuonghieu.scss'
import image1 from '../../../assets/images/logo-client1-150x150.png'
import image2 from '../../../assets/images/logo-client2-150x150.png'
import image3 from '../../../assets/images/logo-client3-132x150.png'
import image4 from '../../../assets/images/logo-client4.png'
import image5 from '../../../assets/images/logo-client5.png'
import image6 from '../../../assets/images/logo-client6.png'

export default function Thuonghieu() {
    
    return (
       <body className='tongthuonghieu'>
        <div className='tonganhthuonghieu'>
            <div className='bocanhthuonghieu'><img src={image1} className="anhthuonghieu"/></div>
            <div className='bocanhthuonghieu'><img src={image2} className="anhthuonghieu"/></div>
            <div className='bocanhthuonghieu'><img src={image3} className="anhthuonghieu"/></div>
            <div className='bocanhthuonghieu'><img src={image4} className="anhthuonghieu"/></div>
            <div className='bocanhthuonghieu'><img src={image5} className="anhthuonghieu"/></div>
            <div className='bocanhthuonghieu'><img src={image6} className="anhthuonghieu"/></div>
           
        </div>
        <div id='CONTACT'></div>
       </body>
    )
}