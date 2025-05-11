import React from 'react'
import PageNavigation from '../components/PageNavigation'
import BurgerNav from '../components/BurgerNav'
const ContactPage = () => {
  return (
    <>
        <BurgerNav />
        <PageNavigation prevPageName={'projects'} previousPage={'/projects'}/>
    </>
  )
}

export default ContactPage