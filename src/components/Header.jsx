import React, { useEffect } from 'react';
const Header = (props) => {
    useEffect(() => {
        let header = document.querySelector('.header')
        let content = document.querySelector('.content')
        content.addEventListener('scroll', () => {
            if (content.scrollTop > 50) {
                header.style.backgroundColor = '#000000'
                header.style.position = 'fixed'
            } else {
                header.style.position = 'relative'
                header.style.backgroundColor = 'transparent'
            }
        })
    })
    return (
        <div className="header">
            {props.children}
        </div>
    )
}

export default Header;