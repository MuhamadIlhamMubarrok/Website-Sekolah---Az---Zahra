import Carousel from "./carousel";
const Count = () => {
    return (
        <div className="mt-[100px]
         md:mt-[200px]
          w-full
           h-[243px]
            bg-[#97DECE] ">
            <Carousel />
            <div className="hidden md:inline">
                <div className="flex
                 flex-row
                  justify-between
                   py-[74px]
                    px-[100px]">
                    <p className="text-white
                     text-poppins
                      font-bold
                       text-[40px]
                        text-center">
                        +3000
                        <br />
                        Alumni
                    </p>

                    <p className="text-white
                     text-poppins
                      font-bold
                       text-[40px]
                        text-center">
                        +20 <br />
                        Pengajar
                    </p>

                    <p className="text-white
                     text-poppins
                      font-bold
                       text-[40px]
                        text-center">
                        200+ <br />
                        Murid
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Count;
