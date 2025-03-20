import React from 'react'
import about_bg_2 from "@/assets/images/about/mission.png"
import about_bg_3 from "@/assets/images/about/goal.png"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import Kindergarden from '@/assets/icons/kindergarden'
import SectionDescription from '@/components/ui/sectionDescription'
import SlideUp from '@/lib/animations/slideUp'
import SlideDown from '@/lib/animations/slideDown'

const AboutTwo = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-[45%_52%] lg:grid-cols-[40%_44%] grid-cols-1 xl:justify-between gap-7.5">
                    <div className="">
                        <SectionName>Mission</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] mt-2.5"}>Providing a Safe, Nurturing, and Play-Based Learning Environment for Every Child</Title>
                        <SectionDescription className={'mt-5'}>At Sunny Valley Early Learning Centre, our mission is to provide a safe, nurturing, and stimulating environment where children can develop socially, emotionally, and creatively through structured learning and play-based experiences. We focus on fostering confidence, independence, and curiosity by integrating hands-on activities, interactive storytelling, and physical movement into daily routines. Our dedicated educators are committed to guiding each child’s unique learning journey while ensuring a balanced approach to academic readiness, social interaction, and emotional well-being. We believe in partnering with families to create a strong community that supports every child’s growth and development.</SectionDescription>
                        <SlideUp delay={3}>
                            <div className="flex gap-8 mt-10">
                                <Button asChild size="lg" variant="pill" className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary">
                                    <Link to={"/contact-us"}>Contact Us</Link>
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                    <div className="flex items-center lg:gap-7.5 gap-5">
                        <div className="flex flex-col lg:gap-7.5 gap-5 w-full sm:w-auto">
                            {/*<div className="bg-warm border-b-4 border-green rounded-tr-[64px] rounded-tl-[64px] md:px-12.5 px-7.5 sm:py-15 py-10 flex items-center justify-center gap-10 wow fadeInLeft" data-wow-delay="0.3s">
                                <Kindergarden height='60' width='60' />
                                <div>
                                    <h3 className="text-[32px] font-bold leading-[130%]">20K+</h3>
                                    <p>Students</p>
                                </div>
                            </div>*/}
                            <SlideUp>
                                <img src={about_bg_2} alt="img-1" />
                            </SlideUp>

                        </div>
                        {/*<SlideDown>
                            <div className="hidden md:block">
                                <img src={about_bg_3} alt="img-2" />
                            </div>
                        </SlideDown>*/}
                    </div>
                </div>

                <br/><br/>

                <div className="grid xl:grid-cols-[45%_52%] lg:grid-cols-[40%_44%] grid-cols-1 xl:justify-between gap-7.5">
                    <div className="">
                        <SectionName>Our Goal</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] mt-2.5"}>Inspire Growth Through Play and Learning</Title>
                        <SectionDescription className={'mt-5'}>At Sunny Valley Early Learning Centre, our goal is to create a safe, nurturing, and stimulating environment where children can develop socially, emotionally, and creatively. Through play-based experiences, structured activities, and hands-on learning, we encourage curiosity, confidence, and a love for discovery. Our dedicated educators support each child’s unique learning journey, fostering independence, empathy, and essential life skills in a warm and engaging atmosphere.</SectionDescription>
                        <SlideUp delay={3}>
                            <div className="flex gap-8 mt-10">
                                <Button asChild size="lg" variant="pill" className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary">
                                    <Link to={"/contact-us"}>Contact Us</Link>
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                    <div className="flex items-center lg:gap-7.5 gap-5">
                        <div className="flex flex-col lg:gap-7.5 gap-5 w-full sm:w-auto">
                            {/*<div className="bg-warm border-b-4 border-green rounded-tr-[64px] rounded-tl-[64px] md:px-12.5 px-7.5 sm:py-15 py-10 flex items-center justify-center gap-10 wow fadeInLeft" data-wow-delay="0.3s">
                                <Kindergarden height='60' width='60' />
                                <div>
                                    <h3 className="text-[32px] font-bold leading-[130%]">20K+</h3>
                                    <p>Students</p>
                                </div>
                            </div>*/}
                            <SlideUp>
                                <img src={about_bg_3} alt="img-1" />
                            </SlideUp>

                        </div>
                        {/*<SlideDown>
                            <div className="hidden md:block">
                                <img src={about_bg_3} alt="img-2" />
                            </div>
                        </SlideDown>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo