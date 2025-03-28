import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'

import HeroOne from '@/components/sections/heros/heroOne'
import AboutOne from '@/components/sections/abouts/aboutOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import Gallery from '@/components/sections/gallery/gallery'
import Programs from '@/components/sections/programs'
import FaqComp from '@/components/sections/faqComp'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'
import BlogsOne from '@/components/sections/blogs/blogsOne'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne'
import AgeOne from '@/components/sections/studentsAge/ageOne'

const HomeOne = () => {
  return (
    <>
      <Helmet>
        <title>Sunny Valley Early Learning Center</title>
        <meta name="description" content="Sunny Valley Early Learning (Childcare) Center Chilliwack" />
      </Helmet>
      <main>
        <HeroOne />
        <SuccessProjectOne />
        <AboutOne isAboutpage={false} />
        { /* <Programs /> */}
        { /* <Gallery /> */ }
        { /*<ServicesOne /> */}
        <br/><br/>
        <FaqComp />
        <Teams />
        <AgeOne />
        <Testimonial />
        { /* <BlogsOne /> */ }
        <NewsletterOne />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default HomeOne