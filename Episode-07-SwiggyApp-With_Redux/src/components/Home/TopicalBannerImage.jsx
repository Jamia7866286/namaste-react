import React from "react";
import { CLOUDINARY_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const TopicalBannerImage = ({imgStyle,mindCardItem}) => {
    const { width } = imgStyle;
    return (
        <Link to={mindCardItem?.action?.link} className={"outline-none"} target="_blank">
            <img
                src={`${CLOUDINARY_URL}${mindCardItem?.imageId}`}
                alt={mindCardItem?.accessibility?.altText}
                // className={`w-${width} h-${height}`}
                style={{width: width}}
            />
        </Link>
    );
};

export default TopicalBannerImage;
