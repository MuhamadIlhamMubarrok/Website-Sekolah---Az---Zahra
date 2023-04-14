const TextFooter = () => {
    return (
        <div>
            <footer className="bg-[#62B6B7]">
                <div className="flex flex-col">
                    <div className=" flex flex-col md:flex-row md:justify-between pl-8 mt-8">
                        <div className="md:ml-[200px] md:mt-[23px]">
                            <h1 className="text-3xl font-semibold text-white">
                                Az-Zahra
                            </h1>
                        </div>
                        <div className="mt-6">
                            <ul>
                                <h1 className="text-[26px] font-semibold text-black">
                                    Navbar
                                </h1>
                                <li className="text-[16px] font-thin text-black mt-3">
                                    Our service
                                </li>
                                <li className=" text-[16px] font-thin text-black mt-2">
                                    About
                                </li>
                                <li className=" text-[16px] font-thin text-black mt-2">
                                    Our Parners
                                </li>
                                <li className=" text-[16px] font-thin text-black mt-2">
                                    Contact Me
                                </li>
                            </ul>
                        </div>
                        <div className="md:mr-[300px] mt-6">
                            <h1 className="text-2xl font-semibold text-black">
                                Company
                            </h1>
                            <p className="text-black text-[16px] font-thin mt-3">
                                PT.Solusindo Informatich
                                <br /> Indonesia Tangerang,
                                <br /> Indonesa
                            </p>
                        </div>
                    </div>
                    <div className="flex md:justify-around flex-col md:flex-row">
                        <div className="py-8 md:mr-[200px]">
                            <p className="mx-[20px] ml-8 md:ml-[-43px] text-[12px] text-black">
                                © PT.Solusindo Informatich Indonesia 2023. All
                                rights reserved.
                            </p>
                        </div>
                        <div className="flex md:justify-end justify-center py-8">
                            <i className="bx bxl-linkedin-square text-[25px]"></i>
                            <i className="bx bxl-facebook text-[25px] ml-2"></i>
                            <i className="bx bxl-instagram text-[25px] ml-2"></i>
                            <i className="bx bxl-github text-[25px] ml-2"></i>
                        </div>
                    </div>
                    <div></div>
                </div>
            </footer>
        </div>
    );
};

export default TextFooter;
