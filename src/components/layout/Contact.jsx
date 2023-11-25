import React from 'react';
import SectionHeaders from './SectionHeaders';

const Contact = () => {
    return (
        <section className="text-center my-8">
            <SectionHeaders subHeader={"Don't hesitate"} mainHeader={'Contact us'} />
            <div className="mt-8">
                <a href="tel:+46789456123" className="text-4xl underline text-gray-500">
                    +46 789 456 132
                </a>
            </div>
        </section>
    );
};

export default Contact;
