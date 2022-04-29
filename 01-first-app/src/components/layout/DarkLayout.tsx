import React from 'react'

interface CompProps {
    // children: React.ReactNode
    children: JSX.Element | JSX.Element[]
}

export const DarkLayout = ({ children }: CompProps) => {
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
