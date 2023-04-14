const Akademik = () => {
    return (
        <div className="mt-[100px]
         md:mt-[200px]">
            <h1 className="text-center
             font-poppins
              font-bold
               md:text-[52px]
                text-[30px]
                 text-black">
                Akademik Program
            </h1>
            <div className="flex
             flex-col
              pt-[50px]
               md:flex-row">
                <a
                    href=""
                    className="mb-[50px]
                     md:mb-0 h-[230px]
                      md:h-[325px]
                       w-[295px]
                        md:w-[417px]
                         md:bg-[url('/public/assets/akademik1.png')]
                          bg-[url('/public/assets/akademik11.png')]
                           hover:bg-[url('/public/assets/akademik111.png')]
                            duration-300 rounded-[20px] mx-auto "
                ></a>
                <a className="mb-[100px]
                 md:mb-0 h-[230px]
                  md:h-[325px]
                   w-[295px]
                    md:w-[417px]
                     md:bg-[url('/public/assets/akademik2.png')]
                      bg-[url('/public/assets/akademik22.png')]
                       hover:bg-[url('/public/assets/akadmik222.png')]
                        duration-300
                         rounded-[20px]
                          mx-auto"></a>
            </div>
        </div>
    );
};

export default Akademik;
