import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import Gallery from '@/components/sections/gallery/gallery'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import PageTitle from '@/components/sections/pageTitle'

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Sunny Valley Early Learning Center || Portfolio</title>
        <meta name="description" content="Sunny Valley Early Learning (Childcare) Center Chilliwack" />
      </Helmet>
      <main>
        <PageTitle pageName={"Portfolio"} breadcrumbCurrent={"Portfolio"} />
        <Gallery />
        <div className='lg:pb-15 pt-10'></div>
        <NewsletterOne />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Portfolio