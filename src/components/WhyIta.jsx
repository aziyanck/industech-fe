function WhyIta() {
    return (
        <div className="flex justify-center items-center w-[100vw] h-[auto] dark-text-s light-text-s">
            <div className="flex flex-col justify-center items-center w-[90vw] h-[auto]">
                <h1 data-aos="fade-up" className="text-2xl poppins-extrabold p-4 mt-8">Why Choose ITA?</h1>
                <p className="pb-4 light-text-vl dark-text-l text-center">Industry-leading security solutions backed by years of experence</p>
                <div className="services w-[80vw] h-[auto] md:h-[80%] flex flex-col md:flex-row gap-10 justify-center items-center p-8 rounded-2xl">
                    <div className="card m-4 flex flex-col md:w-[25%] md:h-[50%] justify-center items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl shadow-blue-300 group-[.dark-mode]:shadow-none group-[.dark-mode]:shadow-2xl">
                        <div className=" w-[100px] m-4 h-[100px] rounded-full bg-amber-950"></div>
                        <p className="text-xl text-center poppins-extrabold">Professinal Installation</p>
                        <p className="text-sm mb-4 mx-4 text-center poppins-regular">Certified technitians ensure proper setup and integration of all security systems</p>
                    </div>

                     <div className="card m-4 flex flex-col md:w-[25%] md:h-[50%] justify-center items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl shadow-blue-300 group-[.dark-mode]:shadow-none group-[.dark-mode]:shadow-2xl">
                        <div className=" w-[100px] m-4 h-[100px] rounded-full bg-amber-950"></div>
                        <p className="text-xl text-center poppins-extrabold">Professinal Installation</p>
                        <p className="text-sm mb-4 mx-4 text-center poppins-regular">Certified technitians ensure proper setup and integration of all security systems</p>
                    </div>

                     <div className="card m-4 flex flex-col md:w-[25%] md:h-[50%] justify-center items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl shadow-blue-300 group-[.dark-mode]:shadow-none group-[.dark-mode]:shadow-2xl">
                        <div className=" w-[100px] m-4 h-[100px] rounded-full bg-amber-950"></div>
                        <p className="text-xl text-center poppins-extrabold">Professinal Installation</p>
                        <p className="text-sm mb-4 mx-4 text-center poppins-regular">Certified technitians ensure proper setup and integration of all security systems</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyIta;