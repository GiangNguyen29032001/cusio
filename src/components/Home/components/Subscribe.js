import { useState, useEffect } from 'react'
import './Subscribe.scss'
export default function Subscribe() {
    const [bien, setBien] = useState([
        {
            textcontact: 'WANT TO DISCUSS YOUR NEW PROJECT?',
            nutcontact: 'nutcontact'
        }
    ])
    const [bien1, setBien1] = useState([
        {
            nutsub:' Subscribe',
        }
    ])
    const [bienthaydoi, setBienthaydoi] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setBienthaydoi('')
        }, 2000)
    })
    const [bienthaydoi1,setBienthaydoi1] = useState ('')
    useEffect(() => {
        setTimeout(() =>{
            setBienthaydoi1('')
        },2000)
    } )
    return (
        <body className="allsub">
            {bien1.map((item, key) => {
                return (
                    <div className="allsub1">
                        <h1 className="subscribe">Subscribe To Our Newsletter</h1>
                        <input placeholder="Enter your email..." className="enteryour" />
                        <hr className="gachduoienteryour"></hr>
                        <button className="nutsub" onClick={() => setBienthaydoi1(item.nutsub)}>{bienthaydoi1 === item.nutsub ? 'da an' : item.nutsub}</button>
                    </div>
                )
            })}
            {bien.map((item, key) => {
                return (
                    <div className='allcontact'>
                        <h2 className='textcontact'>{item.textcontact}</h2>
                        <button className="nutcontact" onClick={() => setBienthaydoi(item.nutcontact)}>{bienthaydoi === item.nutcontact ? 'da an' : item.nutcontact}</button>
                    </div>
                )
            })}
        </body>
    )
}