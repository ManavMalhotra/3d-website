"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { rightImg, watchImg } from '@/utils/index'
import VideoCarousel from './VideoCarousel'

function Highlights() {

    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            y: 0,
        })
        gsap.to('.link', {
            opacity: 1,
            y: 0,
            delay: 0.4,
            stagger: 0.5
        })
    }, [])

    return (
        <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full md:flex items-end justify-between'>
                    <h1 id="title" className='section-heading'>Get the highlights</h1>
                    <div className='flex flex-wrap items-end gap-8 mb-5'>
                        <p className='link'>Watch the film
                            <Image src={watchImg} alt="Watch" className="ml-2" />
                        </p>
                        <p className='link'>Watch the event

                            <Image src={rightImg} alt="Watch" className="ml-2" />
                        </p>
                    </div>
                </div>
            <VideoCarousel />
            </div>
        </section>
    )
}

export default Highlights