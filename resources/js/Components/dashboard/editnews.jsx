import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import image from "../../../../public/assets/profile.jpg";
import { Inertia } from "@inertiajs/inertia";
const EditNews = ({ props }) => {
    const urlPath =
        window.location.protocol +
        "//" +
        window.location.host +
        "/storage/news/";

    console.log("iniiii", props);
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [foto, setFoto] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            body,
            title,
            foto,
            isNotif,
        };
        Inertia.post("/dashboard/news", data);
        setIsNotif(true);
        setBody("");
        setTitle("");
        setFoto("");
    };

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Tambah AzzaNews</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link href={route("home")}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Create AzzaNews
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </section>
            {isNotif && (
                <div className="alert alert-success shadow-lg w-[300px] md:w-[700px] mb-4 px-[20px] ml-3">
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
                            Berita Berhasil Dibuat
                        </span>
                    </div>
                </div>
            )}
            {/* Main content */}
            <section className="content">
                <div className=" p-3 md:w-[1000px] rounded-md">
                    <form
                        className="p-[20px]"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        {/* <Upload
                            onChange={(foto) => setFoto(foto.target.files[0])}
                        /> */}
                        <div className="form-group">
                            <label htmlFor="fotoInput">Foto</label>
                            {/* {!img ? <img className=" preview w-6 h-6" src={img} /> : <img />} */}
                            {!foto ? (
                                props.foto ? (
                                    <img
                                        src={urlPath + props.foto}
                                        alt="foto_utama"
                                        className=" w-[200px] h-[200px] mb-2"
                                    />
                                ) : (
                                    <img
                                        src={image}
                                        alt="foto_utama"
                                        className=" w-[200px] h-[200px] mb-2"
                                    />
                                )
                            ) : (
                                <img
                                    src={URL.createObjectURL(foto)}
                                    alt="foto_utama"
                                    className=" w-[200px] h-[200px] mb-2"
                                />
                            )}
                            <input
                                type="file"
                                className="form-control-file bg-white rounded-md"
                                id="fotoInput"
                                onChange={(e) => setFoto(e.target.files[0])}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="namaInput">Tittle</label>
                            <input
                                type="text"
                                className="form-control"
                                id="namaInput"
                                placeholder="Masukkan title"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                required
                                defaultValue={props.title}
                                // value={title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pesan">Pesan</label>
                            <textarea
                                name=""
                                id=""
                                className="form-control"
                                cols="30"
                                rows="10"
                                onChange={(body) => setBody(body.target.value)}
                                defaultValue={props.body}
                                // value={body}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className=" font-plusjktsans btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            update
                        </button>
                    </form>
                </div>
            </section>
            {/* /.content */}
        </div>
    );
};

export default EditNews;
