import React from 'react'
import Logo from '../img/aalto_it.png'

const header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default header
