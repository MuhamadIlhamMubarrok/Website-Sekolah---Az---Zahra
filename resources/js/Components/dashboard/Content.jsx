import { FiAlertCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link } from "@inertiajs/inertia-react";

const Content = ({ data, kelamin, flash }) => {
    console.log(data);
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/datasiswa/";
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <IoIosPeople className="nav-icon inline-block text-xl mt-[-13px]" />
                            <h1 className="inline ml-2">Data Siswa</h1>
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link href={route("home")} as="button">
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Data Siswa
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                {/* Default box */}
                <Link
                    href={route("createpost")}
                    className="focus:outline-none font-bold decoration-transparent text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    ++ Create New Post
                </Link>
                {data.flash?.message ? alert(data.flash.message) : null}
                {data.flash?.message ? (
                    <div className="alert alert-success shadow-lg w-[300px] md:w-[700px] mb-4 px-[20px] ml-3">
                        <script>alert('a')</script>
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
                                {data.flash.message}
                            </span>
                        </div>
                    </div>
                ) : null}
                <table className="table table-dark table-striped mt-8">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Jenis Kelamin</th>
                            <th scope="col">Jenjang Sekolah</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((siswa, i) => (
                            <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>
                                    <img
                                        className="w-[50px] h-[50px]"
                                        src={urlPath + siswa.image}
                                        alt="foto yang harusnya"
                                    />
                                </td>
                                <td>{siswa.nama}</td>

                                <td>{siswa.kelamin.name}</td>
                                <td>{siswa.role_siswa.name}</td>
                                <td className="">
                                    <Link
                                        href={route("info.siswa")}
                                        className="badge bg-info w-10 h-6 "
                                        as="button"
                                        method="get"
                                        data={{ id: siswa.id }}
                                    >
                                        <AiOutlineEye className="text-[20px] ml-[3px] mt-[-3px]" />
                                    </Link>
                                    <Link
                                        href={route("edit.siswa")}
                                        className="badge bg-warning mx-2 w-10 h-6"
                                        as="button"
                                        method="get"
                                        data={{ id: siswa.id }}
                                    >
                                        <FiAlertCircle className="text-[18px] ml-[3px] mt-[-2px]" />
                                    </Link>
                                    <Link
                                        href={route("delete.siswa")}
                                        className="badge bg-danger w-10 h-6"
                                        as="button"
                                        method="post"
                                        data={{ id: siswa.id }}
                                    >
                                        <MdDelete className="text-[18px] ml-[3px] mt-[-2px]" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* /.card */}
            </section>
            {/* /.content */}
        </div>
    );
};

export default Content;
