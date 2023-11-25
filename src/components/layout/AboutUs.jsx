import React from 'react';
import SectionHeaders from './SectionHeaders';

const AboutUs = () => {
    return (
        <section className="text-center my-16">
            <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
            <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque accusantium
                    ducimus numquam? Nesciunt obcaecati possimus debitis ea! Minima, laudantium
                    architecto optio quaerat necessitatibus ea in reprehenderit ut dolore repellat!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur,
                    consectetur eveniet autem nisi magni? Natus fugiat dignissimos, mollitia
                    reprehenderit voluptates nostrum. Accusamus eaque, perspiciatis necessitatibus
                    soluta mollitia eos. Recusandae vitae perferendis culpa hic quisquam deleniti
                    obcaecati voluptas quibusdam odio?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut enim
                    aspernatur. Voluptatem iure accusamus praesentium vero quibusdam ab nam?
                    Corporis asperiores ad similique nostrum animi ab vel nemo laboriosam.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
