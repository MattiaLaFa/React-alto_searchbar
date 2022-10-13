import React from 'react'

const Main = ({ children }) => {
    return (
        <div className="container">
            <main>
                {children}
            </main>
        </div>
    )
}

export default Main
