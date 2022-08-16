import './Contact.scss'
import React, { useState } from 'react';
export default function Contact() {
    const [ten, setTen] = useState('');
    const [email, setEmail] = useState('');
    const [messenge, SetMessenge] = useState('')
    const [an, setAn] = useState(false);
    const [clickSend, setClickSend] = useState(false);

    const sendthongtin = () => {
        setClickSend(true)
        if (!ten || !email || !messenge) {
            setAn(true)
        } else {

            setAn(false)
        }
        // object dưới là dữ liệu để gửi lên server lưu
        const data = {
            ten: ten,
            email: email,
            message: messenge
        }
    }
    return (


        <body className='tongcontact'>

            <div className='contactlon'>
                <h2 className='contact'>CONTACT</h2>
                <hr className='gachduoicontact'></hr>
            </div>
            <div className='tonglienhe'>
                <div className='lienhe'>
                    <h3 className='address'>ADDRESS</h3>
                    <p className='diachi'>123 Street, New York (USA)</p>
                </div>
                <div className='lienhe'>
                    <h3 className='address'>PHONE</h3>
                    <p className='diachi'>+123 456 789</p>
                </div>
                <div className='lienhe'>
                    <h3 className='address'>EMAIL</h3>
                    <a href="mailto:info@myemail.com">info@myemail.com</a>
                </div>
            </div>
            <div className='tongphananh'>

                <div className='chitietphananh'>
                    <div>
                        <input onChange={(event) => setTen(event.target.value)} value={ten} placeholder='Name*' className='ten' />
                        {/* hien thi chu bạn chưa nhập ô tên */}

                        <hr className='gachduoiphananh'></hr>
                        <div className='nhapoemai'> {clickSend && !ten ? '  bạn chưa nhập ô tên.' : ''}</div>
                    </div>
                    <div>
                        <input onChange={(event) => setEmail(event.target.value)} value={email} placeholder='Email*' className='ten-1' />
                        {/* hien thi chu bạn chưa nhập email */}

                        <hr className='gachduoiphananh'></hr>

                        <div className='nhapoemai'> {clickSend && !email ? '  bạn chưa nhập ô email. ' : ''}</div>
                        {/* thêm màu sắc cho chữ lỗi */}

                    </div>
                </div>
                <textarea onChange={(event) => SetMessenge(event.target.value)} value={messenge} rows={10} placeholder='Messenge*' className='ten1' />
                {/* hien thi chu bạn chưa nhập message */}
                <div className='nhapoemai'>  {clickSend && !messenge ? '  bạn chưa nhập ô messenge.' : ''} </div>
                <div className='tongsend'> <button className='send' onClick={() => sendthongtin()} >SEND</button></div>
                <div className='nhaoomess'> {an ? 'One or more fields have an error. Please check and try again.' : ''}</div>
                <div className='nhaoomess'>  {clickSend && !an ? ' Thành công!' : ''}</div>

                {/* thêm table tr td ở đây hiển thị cho đẹp */}
               <tr  className='bảng'>
                 <td  className='bảng1'> TÊN : {ten}</td>
                 <td  className='bảng1'>EMAIL : {email}</td>
                 <td  className='bảng1'> Messenge : {messenge}</td>
               </tr>
              
            </div>
        </body>
    )
}
