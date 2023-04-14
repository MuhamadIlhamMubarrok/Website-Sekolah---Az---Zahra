import { Link } from "@inertiajs/inertia-react";
import { BiNews } from "react-icons/bi";

const InfoNews = ({ news }) => {
    console.log("news", news);
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/news/";
    return (
        <div className="content-wrapper relative">
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
                                    Message
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex mt-4 flex flex-col justify-center items-center">
                <h1 className="mb-4">{news.title}</h1>
                <img src={urlPath + news.foto} alt="" className="w-[400px]" />
                <p className="mt-5">{news.body}</p>
            </section>
            <Link
                as="button"
                href={route("news")}
                className="mt-4 mb-8 ml-4 inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-white bg-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Back to Dashboard
            </Link>
        </div>
    );
};

export default InfoNews;
