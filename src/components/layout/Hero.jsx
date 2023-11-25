import Image from 'next/image';
import React from 'react';
import ArrowRight from '../icons/ArrowRight';

const Hero = () => {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything
                    <br /> is better
                    <br /> with a&nbsp;<span className="text-primary">Pizza</span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Pizza is the missing piece that makes every day complete, a simple yet delicious
                    joy in life
                </p>
                <div className="flex gap-4  text-sm">
                    <button className="bg-primary text-white uppercase px-4 py-2 rounded-full items-center gap-2 flex justify-center">
                        Order now <ArrowRight />
                    </button>
                    <button className="border-0 flex items-center gap-2 py-2 text-gray-600 font-semibold">
                        Learn more <ArrowRight />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/assets/pizza.png'} alt="pizza" layout="fill" objectFit="contain" />
            </div>
        </section>
    );
};

export default Hero;
