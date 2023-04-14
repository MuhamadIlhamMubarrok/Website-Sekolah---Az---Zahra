const Hero = () => {
    return (
        <div className="bg-[#CBEDD5]">
            {/* // hero section */}
            <div
                className="bg-[url('/public/assets/hero2.png')] bg-cover  h-[983px]
                md:bg-[url('/public/assets/hero1.png')] "
            >
                <div className="flex flex-col pt-[600px] md:flex-row md:pt-[540px]">
                    <div className="mb-[50px] md:mb-0 h-[200px] md:h-[305px] w-[256px] md:w-[390px] bg-[#97DECE] rounded-[20px]  mx-auto ">
                        <h1 className="text-center text-[30px] font-bold text-white font-plusjktsans">
                            Visi
                        </h1>
                        <p
                            className="text-center
                         text-white
                          font-poppins"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="mb-[100px] md:mb-0 h-[200px] md:h-[305px] w-[256px] md:w-[390px] bg-[#97DECE]  rounded-[20px]  mx-auto">
                        <h1 className="text-center text-[30px] font-bold text-white ">
                            Misi
                        </h1>
                        <p className="text-center text-white px-[50px]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
