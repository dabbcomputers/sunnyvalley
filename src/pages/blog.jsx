import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, ScrollRestoration } from 'react-router-dom'
import CardThree from '@/components/sections/blogs/cardThree'
import PageTitle from '@/components/sections/pageTitle'
import Sidebar from '@/components/sections/sidebar/sidebar'
import Pagination from '@/components/ui/pagination'
import { blogDataThree } from '@/lib/fackdata/blogDataThree'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import SectionName from '@/components/ui/sectionName'
import SectionDescription from '@/components/ui/sectionDescription'
import SlideUp from '@/lib/animations/slideUp'
import Title from '@/components/ui/title'
import { Button } from '@/components/ui/button'

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
                <div className="">
                        <SectionName>Documents</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] mt-2.5"}>Download Documents</Title>
                        <SectionDescription className={'mt-5'}>Get all the essential details about our programs, policies, schedules, and more in our Parent Handbook. Download it today to stay informed and ensure a smooth experience for you and your child!</SectionDescription>
                        <SlideUp delay={3}>
                            <div className="flex gap-8 mt-10">
                                <Button asChild size="lg" variant="pill" className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary">
                                    <Link target="_blank" to={"https://docs.google.com/document/d/16dhelaYK01-PyEZFINDVS9rN9xXeCWte/edit?usp=sharing&ouid=105600997222878158182&rtpof=true&sd=true"}>Parents Handbook</Link>
                                    
                                </Button>
                            </div>
                            <div className="flex gap-8 mt-10">
                                <Button asChild size="lg" variant="pill" className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary">
                                    <Link target="_blank" to={"https://docs.google.com/document/d/1iepSpSbzfODN7wR3qiHPZbz1xnjzPQ5N/edit?usp=sharing&ouid=105600997222878158182&rtpof=true&sd=true"}>Program Information</Link>
                                    
                                </Button>
                            </div>
                        </SlideUp>
                </div>
                {/*<iframe class="google-container" src="https://docs.google.com/document/d/1WHbWLqe1T1dDS98xzZez_VTrNKLjXVOKYtURpjQ0zqA/preview?usp=sharing&embedded=true" 
                  width="100%" height="800px">
                </iframe>*/}
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