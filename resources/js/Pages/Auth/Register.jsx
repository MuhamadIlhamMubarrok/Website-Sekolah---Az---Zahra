import image from "../../../../public/assets/anaktk.png";
import image2 from "../../../../public/assets/logo.png";
import Navbar from "@/Components/homepage/Navbar";
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <div>
            <Navbar />
            <Head title="Register" />
            <div
                className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-[92vh]"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <form onSubmit={submit} action="/login">
                    <div className="my-8">
                        <img
                            className="mx-auto h-[150px] w-auto"
                            src={image2}
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold  text-white font-plusjktsans">
                            Register Now
                        </h2>
                    </div>
                    <div>
                        <InputLabel
                            forInput="name"
                            value="Name"
                            className="text-white mb-2"
                        />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="relative block w-[450px] input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            forInput="email"
                            value="Email"
                            className="text-white mb-2"
                        />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="relative block w-full input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            forInput="password"
                            value="Password"
                            className="text-white mb-2"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="relative block w-full input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            forInput="password_confirmation"
                            value="Confirm Password"
                            className="text-white mb-2"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="relative block w-full input-accent input input-bordered rounded-t-md px-3 py-2 text-gray-900 focus:z-10 focus:border-[#439A97]  focus:ring-[#439A97] sm:text-sm"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton
                            className="group relative flex  justify-center rounded-md border border-transparent bg-[#62B6B7] py-2 px-4 text-sm font-medium text-white hover:bg-[#439A97] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            processing={processing}
                        >
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
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
