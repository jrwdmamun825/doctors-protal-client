import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServicesData from '../ServicesData/ServicesData';


const serviceData = [
    {
        img: fluoride,
        title: 'Fluorid Treatment',
        info: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. Tooth enamel is the outer protective layer of each tooth.'
    },
    {
        img: cavity,
        title: 'Cavity Feeling',
        info: 'Cavities are one of the most common tooth problems that people of all ages face. It’s reported that 170 children a day in the U.K. have teeth extracted due to excessive sugar that causes tooth decay.'
    },
    {
        img: teath,
        title: 'Teath Whitening',
        info: 'Teeth whitening is ideal for people who have healthy, unrestored teeth (no fillings) and gums. Individuals with yellow tones to their teeth respond best. But this cosmetic procedure is not recommended for everyone.'
    }
]
const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 className="m-4">OUR SERVICES</h5>
                <h2 className="mb-3">SERVICES WE PROVIDE</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                        {
                            serviceData.map(service=> <ServicesData service={service}></ServicesData>)
                        }
                </div>
            </div>

        </section>
    );
};

export default Services;