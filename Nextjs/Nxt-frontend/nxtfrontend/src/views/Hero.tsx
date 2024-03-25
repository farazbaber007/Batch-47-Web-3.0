import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import heroImg from "/public/heroImg.webp"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6'>
        {/* Left Div */}
        <div className='flex-1'> 
             <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-600 hover:bg-blue-300">Badge</Badge>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        An Industrial Take on Street Wear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
               Once upon a time, in a far-off land, there was a very lazy king who
             spent all day lounging on his throne. One day, his advisors came to him
              with a problem: the kingdom was running out of money.
            </p>
            <Button className='bg-black px-8 h-12'>start Shopping</Button>
            {/* https://www.youtube.com/watch?v=loG4NOwbeU0&t=10s */}
            {/* 1:26 min  */}
        </div>
        {/* Right Div */}
        <div className='flex-1'> 
          <Image src={heroImg} alt='hero' /> 
        </div>

    </section>
  )
}

export default Hero