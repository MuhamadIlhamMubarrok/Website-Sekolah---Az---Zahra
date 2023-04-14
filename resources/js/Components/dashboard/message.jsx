import { FiAlertCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { Link, Inertia } from "@inertiajs/inertia-react";
import Pagination from "./pagination";

const Pesan = ({ mymessage }) => {
    console.log("mymessage", mymessage);
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
            <section className="content">
                <table className="table table-dark table-striped mt-8 overflow-x-auto">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">No whatsapp</th>
                            <th scope="col">pesan</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mymessage.data.map((message, index) => (
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{message.nama}</td>
                                <td>{message.email}</td>
                                <td>{message.nohp}</td>
                                <td>{message.excerpt}</td>
                                <td className="">
                                    <Link
                                        href={route("info.message")}
                                        className="badge bg-info w-10 h-6 mr-2 mb-[-3px]"
                                        as="button"
                                        method="get"
                                        data={{ id: message.id }}
                                    >
                                        <AiOutlineEye className="text-[18px] ml-[3px] mt-[-2px]" />
                                    </Link>
                                    <Link
                                        href={route("delete.message")}
                                        className="badge bg-danger w-10 h-6"
                                        method="post"
                                        as="button"
                                        data={{ id: message.id }}
                                    >
                                        <MdDelete className="text-[18px] ml-[3px] mt-[-2px]" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="absolute md:bottom-24 bottom-2 left-2">
                <Pagination meta={mymessage.meta} />
            </section>
        </div>
    );
};

export default Pesan;
