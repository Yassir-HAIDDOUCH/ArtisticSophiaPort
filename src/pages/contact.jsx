import React, { useState } from 'react';
import ContactForm from '../utils/contactform';
import Hero from "../layouts/hero";

function Contact() {
    return (
        <div className='bg-bodyBg'>

            <Hero title={"ContactMe"}></Hero>

            <div className=' container'>
                <ContactForm></ContactForm>
            </div>

        </div>
    );
}

export default Contact;