import { Link } from "@inertiajs/inertia-react";

const isNews = (news) => {
    console.log("news", news);
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/news/";
    return (
        <>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center mb-0">
                <Link href={route("info.azza", news[0].id)}>
                    <img
                        className="rounded-t-lg h-[200px] w-full object-cover"
                        src={urlPath + news[0].foto}
                        data={{ id: news.id }}
                        alt
                    />
                </Link>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {news[0].title}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {news[0].excerpt}
                    </p>
                    <Link
                        href={route("info.azza", news[0].id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        as="button"
                        data={{ id: news.id }}
                    >
                        Read more
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="w-full mb-6">
                <h1 className="text-gray-600 font-bold text-4xl ml-3 mt-2">
                    Hot News
                </h1>
            </div>
            <div className="flex lg:flex-row lg:flex-wrap lg:items-stretch gap-4 flex-col justify-center items-center">
                {news.map((data, index) => {
                    if (index === 0) return null;

                    return (
                        <div
                            className="w-[350px] my-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            key={index}
                        >
                            <Link href={route("info.azza", data.id)}>
                                <img
                                    className="rounded-t-lg bg-cover bg-no-repeat h-[200px] w-full object-cover"
                                    src={urlPath + data.foto}
                                    alt
                                    data={{ id: news.id }}
                                />
                            </Link>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {data.title}
                                </h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {data.excerpt}
                                </p>
                                <Link
                                    href={route("info.azza", data.id)}
                                    as="button"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    data={{ id: news.id }}
                                >
                                    Read more
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 ml-2 -mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const notNews = () => {
    return <div>BERITA TIDAK TERSEDIA</div>;
};

const AzzaNews = ({ news }) => {
    if (news.length > 0) {
        return isNews(news);
    } else {
        return notNews;
    }
};

export default AzzaNews;
