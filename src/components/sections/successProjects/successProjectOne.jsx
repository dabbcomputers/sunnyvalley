import React from 'react'
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'
import Kindergarden from '@/assets/icons/kindergarden'
import Book from '@/assets/icons/book'
import Blocks from '@/assets/icons/blocks'
import Chalkboard from '@/assets/icons/chalkboard'
import CardOne from './cardOne'
import SectionDescription from '@/components/ui/sectionDescription'
import BabyBody from '@/assets/icons/baby-body'
import CapDoll from '@/assets/icons/cap-doll'

const SuccessProjectOne = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">

                    <div className="lg:max-w-[600px]">
                        <SectionName className={"text-primary-foreground"}>Learn, Play, Grow</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] pb-5"}>Where Little Minds Bloom & Big Dreams Begin</Title>
                        <SectionDescription> Give your child the perfect start in a warm, engaging, and nurturing environment. At Sunny Valley Early Learning Center, we believe in the power of play, hands-on learning, and personalized care to help every child thrive. Our experienced educators provide a safe, stimulating, and fun atmosphere where little ones build confidence, creativity, and a lifelong love for learning</SectionDescription>
                        <Button asChild variant="outline" className="mt-10">
                            <Link to={"/contact-us"}>Enroll Now</Link>
                        </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                        <CardOne icon={<Kindergarden />} color={"bg-primary"} number={"100%"} title={"Safe Environment"} />
                        <CardOne icon={<Book />} color={"bg-destructive"} number={"4:1"} title={"Teacher ration (6M-3Y)"} />
                        <CardOne icon={<Book />} color={"bg-destructive"} number={"8:1"} title={"Teacher ration (3Y-5Y)"} />
                        <CardOne icon={<Blocks />} color={"bg-green"} number={"4"} title={"Highly Experienced Educators"} />
                        <CardOne icon={<CapDoll />} color={"bg-secondary"} number={"100%"} title={"Parents' Satishfaction"} />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SuccessProjectOne

