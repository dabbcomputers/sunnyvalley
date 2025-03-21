import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import SocalIcons from '@/components/ui/socalIcons';

const TopHeader = () => {
    return (
        <div id="top-header" className="bg-destructive sm:block hidden">
            <div className="container">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
                    <div>
                        <ul className="flex gap-7.5">
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaPhone /> <Link to="tel:tel:+1-604-846-7890">604-846-7890</Link>
                            </li>
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaEnvelope /> <Link to={"#"}>sunnyvalleyelc@gmail.com</Link>
                            </li>
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaLocationDot /> <span>201, 202, 203 - 7592 Vedder Road, Chilliwack</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SocalIcons className={"text-xs"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader