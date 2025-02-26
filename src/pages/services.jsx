import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Sunny Valley Early Learning Center || Services</title>
        <meta name="description" content="Sunny Valley Early Learning (Childcare) Center Chilliwack" />
      </Helmet>
      <main>
        <PageTitle pageName={"Services"} breadcrumbCurrent={"Services"} />
        <ServicesTwo />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Services