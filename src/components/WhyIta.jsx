function WhyIta() {
    return (
        <div className="flex justify-center items-center w-[100vw] h-[auto] dark-text-s p-4 light-text-s">
            <div className="flex flex-col justify-center items-center w-[90vw] h-[auto]">
                <h1 data-aos="fade-down" className="text-2xl poppins-extrabold p-4 mt-8">Why Choose ITA?</h1>
                <p className="pb-4 light-text-vl dark-text-l text-center">Industry-leading security solutions backed by years of experence</p>
                <div className="services w-[80vw] h-[auto] md:h-[80%] flex flex-col md:flex-row gap-10 justify-center items-center p-8 rounded-2xl">
                    
                    <div className="card-v ">
                        <div className=" w-[100px] m-4 h-[100px] rounded-full flex justify-center items-center l-bg"><i class="fa-solid dark-text-s i-text light-text-s fa-shield"></i></div>
                        <p className="text-xl px-4 text-center poppins-extrabold">Professinal Installation</p>
                        <p className="text-sm mb-4 mx-4 text-center poppins-regular">Certified technitians ensure proper setup and integration of all security systems</p>
                    </div>

                    <div className="card-v ">
                        <div className=" w-[100px] m-4 h-[100px] rounded-full flex justify-center items-center l-bg"><i class="fa-solid dark-text-s i-text light-text-s fa-user-plus"></i></div>
                        <p className="text-xl px-4 text-center poppins-extrabold">24/7 Support</p>
                        <p className="text-sm mb-4 mx-4 text-center poppins-regular">Round-the-clock monitoring and emergency response to keep you protected</p>
                    </div>

                    <div className="card-v ">
                        <div className=" w-[100px] m-4 h-[100px] rounded-full flex justify-center items-center l-bg"> <i class="fa-solid dark-text-s i-text light-text-s fa-check-to-slot"></i></div>
                        <p className="text-xl px-4 text-center poppins-extrabold">Proven Track Record</p>
                        <p className="text-sm mb-4 mx-4 text-center poppins-regular">Over 10 years in building homes automations satisfied customers</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default WhyIta;