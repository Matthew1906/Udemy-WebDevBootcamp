import React from 'react';

const Footer = ()=>{
    let date = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {date}</p>
        </footer>
    );
}

export default Footer;