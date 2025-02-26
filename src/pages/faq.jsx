import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import FaqComp from '@/components/sections/faqComp'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Sunny Valley Early Learning Center || Faq</title>
        <meta name="description" content="Sunny Valley Early Learning (Childcare) Center Chilliwack" />
      </Helmet>
      <main>
        <PageTitle pageName={"Faq's"} breadcrumbCurrent={"Faq's"} />
        <FaqComp />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Faq