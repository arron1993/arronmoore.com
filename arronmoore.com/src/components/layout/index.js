import React from 'react'

import Header from '../header'

import './layout.scss'


const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <main className="container">
            { children }
        </main>
        </>
    )
}

export default Layout