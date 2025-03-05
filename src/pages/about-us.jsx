import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import AboutTwo from '@/components/sections/abouts/aboutTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'

const AboutUs = () => {

  return (
    <>
      <Helmet>
        <title>Sunny Valley Early Learning Center || About-Us</title>
        <meta name="description" content="Sunny Valley Early Learning (Childcare) Center Chilliwack" />
      </Helmet>
      <main>
        <PageTitle pageName={"About Us"} breadcrumbCurrent={"About Us"} />
        <AboutTwo gridClass={"lg:grid-cols-2"} isAboutpage={true} />
        <Testimonial />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default AboutUs