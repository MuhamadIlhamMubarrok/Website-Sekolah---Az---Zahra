const Sambutan = () => {
    return (
        <div className="py-[70px] mt-[80px]">
            <div className="md:flex
             md:justify-between
              md:ml-[150px]
               md:px-[150px]
                px-0 ">
                <div className="md:mr-4">
                    <h1 className="text-center
                     font-poppins
                      font-bold
                       text-[30px]
                        text-black
                         mb-6 md:hidden">
                        Sambutan <br /> Kepala Sekolah
                    </h1>
                    <img
                        src="/assets/kepsek.png"
                        alt="kepsek"
                        className="md:w-[481px]
                         md:h-[413px]
                          w-[290px]
                           h-[253px]
                            mx-[17%]
                             md:mx-0"
                    />
                </div>
                <div className="md:w-1/2 
                mt-[15px]">
                    <h1 className="text-black
                     text-[50px]
                      font-extrabold
                       hidden
                        md:block">
                        Sambutan Kepala<br></br>Sekolah
                    </h1>
                    <br />
                    <div>
                        <p className="md:text-left
                         text-center
                          md:pr-[100px]
                           md:px-0
                            px-[20px]
                             text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ratione fugiat eveniet porro architecto minus
                            quas, officiis expedita, dolorum ut harum eos
                            provident? Tempore delectus voluptatem accusamus
                            molestiae ex nam doloribus! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Error eveniet
                            suscipit, facilis animi illum quod, commodi saepe
                            necessitatibus iste perspiciatis itaque aperiam
                            molestias pariatur, perferendis fugit vitae
                            similique sed. Dignissimos ad magni beatae
                            praesentium repellendus soluta incidunt voluptatum!
                            Consequuntur, nihil eveniet rem reprehenderit et
                            quia quod adipisci quas voluptatibus vel?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sambutan;
