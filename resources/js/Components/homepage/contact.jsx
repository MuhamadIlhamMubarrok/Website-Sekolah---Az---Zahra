import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
// import Flash from

const Contact = ({ props }) => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nohp, setNohp] = useState("");
    const [message, setMessage] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            nama,
            email,
            nohp,
            message,
        };
        Inertia.post("/contact", data);
        setIsNotif(true);
        setNama("");
        setEmail("");
        setNohp("");
        setMessage("");
    };


    return (
        <div className="md:bg-[url('/public/assets/anaktk.png')] bg-cover bg-no-repeat bg-[url('/public/assets/contact.png')] py-[100px]">
            <div className="flex flex-col justify-center items-center">
                {isNotif && (
                    <div className="alert alert-success shadow-lg w-[300px] md:w-[700px] mb-4 px-[20px]">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className=" font-plusjktsans">
                                Pesan Berhasil Dibuat
                            </span>
                        </div>
                    </div>
                )}
                <div className="border w-[325px] h-[910px] md:w-[1047px] md:h-[650px] bg-[#97DECE] rounded-[20px]">
                    <p className="md:text-3xl text-lg text-center font-thin mt-3 mx-4 text-black font-poppins font-extralight">
                        will be happy to hear from you
                    </p>
                    <div className="flex md:justify-between flex-col md:flex-row">
                        <form className="flex flex-col px-8">
                            <input
                                type="text"
                                className="mt-8 md:ml-8 input input-accent rounded-lg md:w-[536px] focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97]"
                                placeholder="Name"
                                onChange={(nama) => setNama(nama.target.value)}
                                value={nama}
                            />
                            <input
                                type="text"
                                className="mt-8 md:ml-8 input input-accent rounded-lg md:w-[536px] focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97]"
                                placeholder="E-mail"
                                onChange={(email) =>
                                    setEmail(email.target.value)
                                }
                                value={email}
                            />
                            <input
                                type="text"
                                className="mt-8 md:ml-8 input input-accent rounded-lg md:w-[536px] focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97]"
                                placeholder="Nomer Hp"
                                onChange={(nohp) => setNohp(nohp.target.value)}
                                value={nohp}
                            />
                            <textarea
                                name=""
                                id=""
                                className="mt-8 md:ml-8 rounded-lg input-accent rounded-lg dark:bg-gray-800 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97]"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                                onChange={(message) =>
                                    setMessage(message.target.value)
                                }
                                value={message}
                            ></textarea>
                            <button
                                className="w-24 md:ml-8 mt-4 text-white bg-gradient-to-r bg-[#63cecf] hover:bg-[#62B6B7] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-poppins"
                                onClick={() => handleSubmit()}
                            >
                                submit
                            </button>
                        </form>
                        <div>
                            <div>
                                <div className="md:pr-16 md:pt-10 pl-4 md:pl-0 mt-8 md:mt-0">
                                    <p className="md:text-[26px] text-[23px] font-thin font-poppins text-black">
                                        Address :
                                    </p>
                                    <p className="md:text-[19px] font-thin font-poppins text-black">
                                        {" "}
                                        Jl.Rasuna said Kp.hijrah RT.07/RW.04
                                    </p>
                                </div>
                                <div className="md:pr-16 md:pt-10 pl-4 md:pl-0 mt-8 md:mt-0">
                                    <p className="md:text-[26px] text-[23px] text-8 font-thin font-poppins text-black">
                                        Call us :
                                    </p>
                                    <p className="md:text-[19px] font-thin font-poppins text-black">
                                        +6281389963530
                                    </p>
                                </div>
                                <div className="md:pr-16 md:pt-10 pl-4 md:pl-0 mt-8 md:mt-0">
                                    <p className="md:text-[26px] text-[23px] text-8 font-thin font-poppins text-black">
                                        Help
                                    </p>
                                    <p className="md:text-[19px] font-thin font-poppins text-black">
                                        kagamayta721@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
