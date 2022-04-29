import React from 'react'

export const DarkLayout = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: '#0003',
                padding: "10px",
                borderRadius: '5px'
            }}
        >
            <h3>Dark-layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
