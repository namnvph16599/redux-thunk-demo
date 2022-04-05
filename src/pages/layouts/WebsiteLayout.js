import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


const WebsiteLayout = (props) => {
  return (
    <div>
      <header>
        <Header category={props.category} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WebsiteLayout