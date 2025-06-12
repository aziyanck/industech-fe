
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
 

    //for type effect
    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "Initializing your smart space…",
                "Connecting your home to the future…",
                "Comfort is just seconds away…",
                "Warming up the lights and your lifestyle…",
                "Your home is syncing with your rhythm…",
                "Activating your intelligent lifestyle...",
                "Less effort. More living…",
                "Live simply. Live smart…"
            ],

            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
            smartBackspace: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className="home flex flex-col justify-center w-screen items-center h-[90vh] ">


            <div className="up w-[90vw] min-h-[55vh] md:min-h-[60vh] md:bg-amber-300 bg-red-500 ">

            </div>
            <div className="down text-center flex flex-col dark-text-s light-text-s  items-center w-[90vw] h-[50vh] max-w-[95vw] p-4 [&>*]:mb-3 gradient">
                <h1 data-aos="fade-up" className="title text-lg md:text-3xl pb-8 md:pb-2 poppins-extrabold leading-relaxed">
                    When your home thinks with you,<br /> life just flows easier.
                </h1>
                <h2 data-aos="fade-right" className='text-base md:text-lg poppins-bold pb-5 md:pb-2'>“Let <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent  group-[.dark-mode]:bg-gradient-to-r group-[.dark-mode]:from-fuchsia-500 group-[.dark-mode]:to-pink-500 poppins-bold">IndusTech Automations</span>  turn your everyday moments into extraordinary ones.”</h2>
                <h4 >
                    <span ref={typedRef} className=" text-amber-600 inline text-lg poppins-bold"></span>

                </h4>
            </div>
        </div>
    )
}
export default Home;