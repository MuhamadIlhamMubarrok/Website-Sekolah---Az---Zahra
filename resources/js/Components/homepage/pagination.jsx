import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ meta }) => {
    console.log("ini meta :", meta);
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            {prev && (
                <Link
                    href={prev}
                    className="btn bg-[#CBEDD5] text-[#439A97] text-xl  hover:text-white"
                >
                    «
                </Link>
            )}
            <button className="btn  bg-[#CBEDD5] text-[#439A97] text-xl hover:text-white">
                {current}
            </button>

            {next && (
                <Link
                    href={next}
                    className="btn  bg-[#CBEDD5] text-[#439A97] text-xl  hover:text-white"
                >
                    »
                </Link>
            )}
        </div>
    );
};

export default Pagination;
