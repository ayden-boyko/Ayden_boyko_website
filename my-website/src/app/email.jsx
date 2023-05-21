'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('user_name').value="";
        document.getElementById('email').value="";
        document.getElementById('message').value="";

        emailjs.sendForm("service_gdviopk", "template_pf5tfgc", form.current, "VMBSEm2oMwdq8BM0_")
        .then((result) => {
            alert(result.text);
            
        },
        (error) => {
            alert(error.text);
        });
    };
    return (
        <div className="rounded-sm border-black border-2 animate-idle-right w-2/6 h-2/6 bg-green-500 ">
            <form  ref={form} onSubmit={sendEmail} className='bg-white text-black -translate-x-2 -translate-y-2 rounded-sm border-black border-2 p-2'>
                <label>Name</label>
                <br />
                <input type="text" name="user_name" id="user_name" className="bg-white border-black rounded border text-black"/>
                <br />
                <label>Email</label>
                <br />
                <input  type="email" name="email" id="email" className="bg-white border-black rounded border text-black"/>
                <br />
                <label>Message</label>
                <br />
                <textarea name="message" id="message" className="bg-white border-black rounded border w-2/3"/> 
                <br />
                <input type="submit" value="Send" className='transition duration-500 delay-100 rounded-sm border-black border p-1 hover:bg-gray-400'/>
            </form>
        </div>
    );
};

export default ContactMe;