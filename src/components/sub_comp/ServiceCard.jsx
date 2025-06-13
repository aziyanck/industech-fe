import React from 'react';

function ServiceCard({ img, title, desc }) {
    return (
        <div className="glass-s m-4 p-4 flex flex-col justify-start items-center w-[70vw] min-h-[70vh]  rounded-[5px] bg-[#0a0a3a] md:w-[90vw] md:flex-row md:min-h-[auto] ">
            <div className="img w-full flex justify-center">
                <img
                    src={img}
                    alt={title}
                    className="max-w-full h-auto object-contain"
                />
            </div>

            <div className="text text-center mt-4 px-2 h-auto w-full break-words">
                <h2 className="poppins-extrabold text-base sm:text-lg dark-text-s light-text-s leading-snug break-words whitespace-normal">
                    {title}
                </h2>
                <p className="text-sm dark-text-l light-text-l leading-relaxed mt-2 whitespace-normal">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
