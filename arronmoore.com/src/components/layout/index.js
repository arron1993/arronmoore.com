import React from 'react'

import Header from '../header'

import './layout.scss'


const Layout = ({ children, pageName }) => {
    document.querySelector("body").classList.add(pageName)
    return (
        <>
        <Header />
        <main className={`container`}>
            { children }
        </main>
        </>
    )
}

export default Layout