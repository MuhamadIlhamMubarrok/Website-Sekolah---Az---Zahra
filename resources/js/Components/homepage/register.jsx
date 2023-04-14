import image from "../../../../public/assets/anaktk.png";

const Register = () => {
    return (
        <div
            className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-[92vh]"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src=""
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold  text-white">
                        Register Now
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label for="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="text"
                                placeholder="e-mail.."
                                className="relative block w-full input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm"
                            />
                        </div>
                        <div>
                            <label for="name" className="sr-only">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Name.."
                                className="relative block w-full input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm mt-2"
                            />
                        </div>
                        <div>
                            <label for="username" className="sr-only">
                                Usename
                            </label>
                            <input
                                type="text"
                                placeholder="Username.."
                                className="relative block w-full input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm mt-2"
                            />
                        </div>
                        <div>
                            <label for="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required
                                className="relative block w-full input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm mt-2"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#62B6B7] py-2 px-4 text-sm font-medium text-white hover:bg-[#439A97] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="ml-[-6px] mr-2">
                                    {/* hero icon */}
                                    <svg
                                        className="h-4 w-5 text-[#439A97] group-hover:text-[#62B6B7]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                                Submit
                            </button>
                        </div>

                        <div className="text-sm">
                            <p className="inline">Already registered ? </p>
                            <a
                                href="/loginin"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
