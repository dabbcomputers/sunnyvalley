import React from 'react'
import sutdent_img from "@/assets/images/newsletter/student.png"
import { Button } from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa6";
import Input from '@/components/ui/input';
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';
import { useState } from "react";

const NewsletterOne = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        // Create a FormData object for Netlify submission
        const formData = new FormData();
        formData.append("email", email);

        try {
            // Submit to Netlify Forms
            await fetch("/", {
                method: "POST",
                body: formData,
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            });

            // Show success message
            setSubmitted(true);
            setEmail(""); // Clear input after submission
        } catch (error) {
            console.error("Form submission failed:", error);
        }
    };
    return (
        <section className="bg-[linear-gradient(180deg,_rgba(238,255,200,0.00)_0%,_#E9FFB6_100%)] overflow-x-hidden">
            <div className="bg-bottom bg-no-repeat bg-contain bg-newsletter-banner">
                <div className="container">
                    <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-7.5">
                        <div className="max-w-[598px] w-full order-1 lg:order-0 animate-left-right">
                            <div className="bg-[url('./assets/images/shapes/egg-shap.png')] bg-no-repeat bg-bottom bg-contain">
                                <img src={sutdent_img} alt="student-img" className="mx-auto" />
                            </div>
                        </div>
                        <div className="lg:max-w-[530px] order-0 lg:order-1">
                            <SectionName className={'text-muted-foreground'}>Get Connected</SectionName>
                            <Title size={"3.5xl"}>Education That Sparks Imaginat Nurturing Curiosity Inspire</Title>
                            <div className="relative lg:mt-10 mt-5">
                                <form name="GetConnected" method="POST" action="/" data-netlify="true" className="relative flex">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Enter Your Email" 
                                        required 
                                        className="p-3 border rounded-l-md w-full text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                                    />
                                    <button 
                                        type="submit" 
                                        className="bg-blue-500 text-white px-4 py-2 flex items-center justify-center rounded-r-md hover:bg-blue-600 transition-all"
                                    >
                                        Submit <FaArrowRight className="ml-1" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterOne