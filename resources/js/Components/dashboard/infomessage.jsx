import { GrMail } from "react-icons/gr";
import { Link } from "@inertiajs/inertia-react";
import { map } from "lodash";
import Message from "@/Pages/Message";

const InfoMessage = ({ message }) => {
    console.log("infoo", message);
    return (
        <div className="content-wrapper relative">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <GrMail className="nav-icon inline-block text-xl mt-[-13px]" />
                            <h1 className="inline ml-2">Pesan Masuk</h1>
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link href={route("home")}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Message
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex mt-4">
                <div className="pl-4">
                    <h4>Nama </h4>
                    <h4>Email</h4>
                    <h4>Nomer Hp</h4>
                    <h4>Pesan</h4>
                </div>
                <div className="ml-5">
                    <h4>:</h4>
                    <h4>:</h4>
                    <h4>:</h4>
                    <h4>:</h4>
                </div>

                {/* {message.map((kuy) => ( */}
                <div className="ml-4">
                    <h4>{message.nama}</h4>
                    <h4>{message.email}</h4>
                    <h4>{message.nohp}</h4>
                    <h4>{message.message}</h4>
                </div>
                {/* ))} */}
            </section>
            <Link
                as="button"
                href={route("message")}
                className="mt-4 ml-4 inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-white bg-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Back to Message
            </Link>
        </div>
    );
};

export default InfoMessage;
