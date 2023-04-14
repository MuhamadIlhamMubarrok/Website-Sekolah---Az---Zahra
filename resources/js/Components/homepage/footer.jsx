import TextFooter from "./textfooter";

const Footer = () => {
    return (
        <div className="md:bg-[url('/public/assets/footer.png')]
         bg-[url('/public/assets/footer2.png')]
          mt-[200px]">
            <h1 className="text-center
             text-5xl
              font-bold
               mb-8
                text-black">
                Contact <span className="text-[#62B6B7]">us</span>
            </h1>
            <div className="flex
             justify-center">
                <div className="border
                 w-[325px]
                  h-[910px]
                   md:w-[1047px]
                    md:h-[602px]
                     bg-[#97DECE]
                      rounded-[20px]">
                    <p className="md:text-3xl
                     text-lg
                      text-center
                       font-thin
                        mt-3
                         mx-4
                          text-black
                           font-poppins
                            font-extralight">
                        will be happy to hear from you
                    </p>
                    <div className="flex
                     md:justify-between
                      flex-col
                       md:flex-row">
                        <div className="flex
                         flex-col
                          px-8">
                            <input
                                type="text"
                                className="mt-8
                                 md:ml-8 input
                                  input-accent
                                   rounded-lg md:w-[536px]
                                    focus:z-10
                                     focus:border-[#439A97]
                                       focus:ring-[#439A97]"
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                className="mt-8
                                 md:ml-8
                                  input
                                   input-accent
                                    rounded-lg md:w-[536px]
                                     focus:z-10
                                      focus:border-[#439A97]
                                    focus:ring-[#439A97]"
                                placeholder="E-mail"
                            />
                            <textarea
                                name=""
                                id=""
                                className="mt-8
                                 md:ml-8
                                  rounded-lg
                                   input-accent
                                    rounded-lg
                                     dark:bg-gray-800
                                      focus:z-10
                                       focus:border-[#439A97]
                                         focus:ring-[#439A97]"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-24
                                 md:ml-8
                                  mt-4
                                   text-white
                                    bg-gradient-to-r
                                     bg-[#63cecf]
                                      hover:bg-[#62B6B7]
                                       font-medium
                                        rounded-lg
                                         text-sm
                                          px-5
                                           py-2.5
                                            text-center
                                             mr-2
                                              mb-2
                                               font-poppins"
                            >
                                submit
                            </button>
                        </div>
                        <div>
                            <div>
                                <div className="md:pr-16
                                 md:pt-10
                                  pl-4
                                   md:pl-0
                                    mt-8
                                     md:mt-0">
                                    <p className="md:text-[26px]
                                     text-[23px]
                                      font-thin
                                       font-poppins
                                        text-black">
                                        Address :
                                    </p>
                                    <p className="md:text-[19px]
                                     font-thin
                                      font-poppins
                                       text-black">
                                        {" "}
                                        Jl.Rasuna said Kp.hijrah RT.07/RW.04
                                    </p>
                                </div>
                                <div className="md:pr-16
                                 md:pt-10
                                  pl-4
                                   md:pl-0
                                    mt-8
                                     md:mt-0">
                                    <p className="md:text-[26px]
                                     text-[23px]
                                      text-8
                                       font-thin
                                        font-poppins
                                         text-black">
                                        Call us :
                                    </p>
                                    <p className="md:text-[19px]
                                     font-thin
                                      font-poppins
                                       text-black">
                                        +6281389963530
                                    </p>
                                </div>
                                <div className="md:pr-16
                                 md:pt-10
                                  pl-4
                                   md:pl-0
                                    mt-8
                                     md:mt-0">
                                    <p className="md:text-[26px]
                                     text-[23px]
                                      text-8
                                       font-thin
                                        font-poppins
                                         text-black">
                                        Help
                                    </p>
                                    <p className="md:text-[19px]
                                     font-thin
                                      font-poppins
                                       text-black">
                                        kagamayta721@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TextFooter />
        </div>
    );
};

export default Footer;
