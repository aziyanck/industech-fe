import React from 'react';

function ServiceCard({ img, title, desc, reverse = false }) {
    return (
        <div className="services w-[80%] h-auto py-10">
            <div data-aos="fade-up" className="bg-white/10 backdrop-blur-lg shadow-2xl shadow-blue-300 group-[.dark-mode]:shadow-none group-[.dark-mode]:shadow-2xl flex flex-col gap-20 justify-around rounded-2xl">
                
                <div className={`serv1 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} w-full h-auto`}>
                    
                    <div
                        data-aos={reverse ? 'fade-left' : 'fade-right'}
                        className="left w-full md:w-[50%] h-auto md:h-full flex flex-col justify-center items-center px-6 py-4"
                    >
                        <img src={img} alt={title} className="w-full h-full object-cover rounded-lg" />
                    </div>

                    <div
                        data-aos={reverse ? 'fade-right' : 'fade-left'}
                        className="right w-full md:w-[50%] h-auto md:h-full flex flex-col justify-center px-6 py-4"
                    >
                        <h1 className="text-xl poppins-bold pb-6">{title}</h1>
                        <h3 className="poppins-regular text-base dark-text-l light-text-l whitespace-pre-line">
                            {desc}
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
