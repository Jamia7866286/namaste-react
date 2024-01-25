import React from "react";
import { CLOUDINARY_URL } from "../../utils/constants";

const TopicalBannerImage = (props) => {
    const { width, height } = props.imgStyle;
    return (
        <div className={`w-${width} h-${height} pr-4 bg-slate-50`}>
            <img
                src={`${CLOUDINARY_URL}rng/md/carousel/production/186a71018df06ce2bea1db55086d32e4`}
                alt=""
                className={`w-${width} h-${height}`}
            />
        </div>
    );
};

export default TopicalBannerImage;
