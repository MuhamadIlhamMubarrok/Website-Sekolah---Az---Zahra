import image from "../../../../public/assets/profile.jpg";
import React from "react";

const Upload = ({ img, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor="fotoInput">Foto</label>
            {/* {!img ? <img className=" preview w-6 h-6" src={img} /> : <img />} */}
            {img ? (
                <img
                    src={img}
                    alt="azzanews"
                    className=" w-[200px] h-[200px] mb-2"
                />
            ) : (
                <img
                    src={image}
                    alt="azzanews"
                    className=" w-[200px] h-[200px] mb-2"
                />
            )}
            <input
                type="file"
                className="form-control-file bg-white rounded-md"
                id="fotoInput"
                {...rest}
            />
        </div>
    );
};

export default Upload;
