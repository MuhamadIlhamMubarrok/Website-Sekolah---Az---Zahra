import { FiAlertCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { Link } from "@inertiajs/inertia-react";
import { data } from "autoprefixer";
import Pagination from "./pagination";
const AzzaNews = ({ props }) => {
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/news/";
    console.log("pesan", props);
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <BiNews className="nav-icon inline-block text-xl mt-[-13px]" />
                            <h1 className="inline ml-2">Azza News</h1>
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link href={route("home")}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Azza News
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
                    href={route("createnews")}
                    className="focus:outline-none font-bold decoration-transparent text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    ++ Create New AzzaNews
                </Link>
                <table className="table table-dark table-striped mt-8">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">foto</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((news, i) => (
                            <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>
                                    <img
                                        className="w-[50px] h-[50px]"
                                        src={urlPath + news.foto}
                                        alt=""
                                    />
                                </td>
                                <td>{news.title}</td>
                                <td>{news.excerpt}</td>
                                <td className="">
                                    <div className="flex mt-[10px]">
                                        <Link
                                            href={route("info.news")}
                                            className="badge bg-info w-10 h-6 "
                                            as="button"
                                            method="get"
                                            data={{ id: news.id }}
                                        >
                                            <AiOutlineEye className="text-[20px] ml-[3px] mt-[-3px]" />
                                        </Link>
                                        <Link
                                            href={route("edit.news")}
                                            className="badge bg-warning mx-2 w-10 h-6"
                                            as="button"
                                            method="get"
                                            data={{ id: news.id }}
                                        >
                                            <FiAlertCircle className="text-[18px] ml-[3px] mt-[-2px]" />
                                        </Link>
                                        <Link
                                            href={route("delete.news")}
                                            className="badge bg-danger w-10 h-6"
                                            method="post"
                                            as="button"
                                            data={{ id: news.id }}
                                        >
                                            <MdDelete className="text-[18px] ml-[3px] mt-[-2px]" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <section className="absolute bottom-[170px]">
                    <Pagination meta={props.meta} />
                </section>
                {/* /.card */}
            </section>
            {/* /.content */}
        </div>
    );
};

export default AzzaNews;
