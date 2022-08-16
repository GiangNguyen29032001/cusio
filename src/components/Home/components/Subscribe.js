import './Subscribe.scss'
export default function Subscribe() {
    
    return (
        <body className="allsub">
            <div className="allsub1">
                <h1 className="subscribe">Subscribe To Our Newsletter</h1>
                <input placeholder="Enter your email..." className="enteryour"/>
                <hr className="gachduoienteryour"></hr>
                <button className="nutsub">Subscribe</button>
            </div>
            <div className='allcontact'>
                <h2 className='textcontact'>WANT TO DISCUSS YOUR NEW PROJECT?</h2>
                <button className="nutcontact">CONTACT US</button>
            </div>
        </body>
    )
}