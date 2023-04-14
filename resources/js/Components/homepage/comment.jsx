import Carousel2 from "./carousel2";

const Comment = () => {
    return (
        <div className="mt-[100px]
         md:mt-[200px]">
            <h1 className="text-center
             font-poppins
              font-bold
               md:text-[52px]
                text-[30px]
                 text-black">
                Apa Kata Mereka ?
            </h1>
            <div className="block md:hidden">
                <Carousel2 />
            </div>
            <div className="hidden
             md:block">
                <div className="flex
                 flex-col
                  pt-[50px]
                   md:flex-row">
                    <div className="mb-[50px]
                     md:mb-0
                      h-[191px]
                       md:h-[247px]
                        w-[244px]
                         md:w-[316px]
                          bg-[#97DECE]
                           rounded-[20px]
                            mx-auto ">
                        <div className="bg-white
                         rounded-[50%]
                          w-[103px]
                           md:w-[133px]
                            h-[103px]
                             md:h-[133px]
                              ml-[-30px]
                               mt-[-30px]"></div>
                    </div>
                    <div className="mb-[50px]
                     md:mb-0
                      h-[191px]
                       md:h-[247px]
                        w-[244px]
                         md:w-[316px]
                          bg-[#97DECE]
                           rounded-[20px]
                            mx-auto ">
                        <div className="bg-white
                         rounded-[50%]
                          w-[103px]
                           md:w-[133px]
                            h-[103px]
                             md:h-[133px]
                              ml-[-30px]
                               mt-[-30px]"></div>
                    </div>
                    <div className="mb-[50px]
                     md:mb-0
                      h-[191px]
                       md:h-[247px]
                        w-[244px]
                         md:w-[316px]
                          bg-[#97DECE]
                           rounded-[20px]
                            mx-auto ">
                        <div className="bg-white
                         rounded-[50%]
                          w-[103px]
                           md:w-[133px]
                            h-[103px]
                             md:h-[133px]
                              ml-[-30px]
                               mt-[-30px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
