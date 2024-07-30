import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="md:p-32 p-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <Image
            alt="About picture"
            src="/images/about.jpg"
            layout="intrinsic"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-base mb-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
          </p>
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default About
