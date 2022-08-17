import "./Wecreat.scss"
import { useState, useEffect } from 'react'
export default function Wecreat(){
    const [bien,setBien] = useState([
        {
            getstart:'GET STARTED',
        }
    ])
    const [thaydoibien,setThaydoibien] = useState('')
    useEffect(() => {
        setTimeout(() =>{
            setThaydoibien('')
        },2000)
    })
    return(
        
        <body className="tongwe">
             {bien.map((item, key) => {
                return (
            <div className="texttongwe">
                <h2 className="wecreate">WE CREATE <strong> AWESOME</strong> PROJECTS</h2>
                <h3 className="getstart" onClick={() => setThaydoibien(item.getstart)}>{thaydoibien === item.getstart ? 'da click' : item.getstart}</h3>
            </div>
              
                 )
             })}
            <div  id="TEAM"></div>
        </body>
    )
}