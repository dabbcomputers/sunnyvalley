import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import ContactAddress from '@/components/sections/contactAddress'
import ContactForm from '@/components/sections/contactForm'
import GoogleMap from '@/components/sections/googleMap'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Sunny Valley Early Learning Center  || Contact-Us</title>
        <meta name="description" content="Sunny Valley Early Learning (Childcare) Center Chilliwack" />
      </Helmet>
      <main>
        <PageTitle pageName={"Contact Us"} breadcrumbCurrent={"Contact Us"} />
        <ContactAddress />
        <GoogleMap />
        { /*<ContactForm /> */}
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default ContactUs