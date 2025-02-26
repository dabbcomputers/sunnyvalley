import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import CardThree from '@/components/sections/blogs/cardThree'
import PageTitle from '@/components/sections/pageTitle'
import Sidebar from '@/components/sections/sidebar/sidebar'
import Pagination from '@/components/ui/pagination'
import { blogDataThree } from '@/lib/fackdata/blogDataThree'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Sunny Valley Early Learning Center  || Blog</title>
        <meta name="description" content="Sunny Valley Early Learning (Childcare) Center Chilliwack" />
      </Helmet>
      <main>
        <PageTitle pageName={"Policy"} breadcrumbCurrent={"Policy"} />
        <div className="lg:pt-15 pt-10">
          <div className='container'>
            <div className=" grid xl:grid-cols-[850px_auto] lg:grid-cols-[700px_auto] grid-cols-1 gap-7.5">
              <div className='flex flex-col lg:gap-[60px] gap-10'>
                {
                  // blogDataThree.map(({ author, blog_desc, date, id, src, title }) => <CardThree key={id} src={src} title={title} />)
                  
                }
                <iframe class="google-container" src="https://docs.google.com/document/d/1WHbWLqe1T1dDS98xzZez_VTrNKLjXVOKYtURpjQ0zqA/preview?usp=sharing&embedded=true" 
                  width="100%" height="800px">
                </iframe>
                {/* <Pagination /> */}
              </div>
              {/* <Sidebar /> */}
            </div>
          </div>
        </div>
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Blog