import React from 'react'
import { Helmet } from 'react-helmet';

import Header from '../header'

import './layout.scss'


const Layout = ({ children, pageName }) => {

    return (
        <>
        <Header />
        <Helmet bodyAttributes={{
            class: pageName
        }}>
        </Helmet>
        <main className={`container`}>
            { children }
        </main>
        </>
    )
}

export default Layout