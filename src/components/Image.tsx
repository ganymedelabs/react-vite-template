import React, { forwardRef } from "react";

/* eslint-disable react/jsx-props-no-spreading */

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
    const { className = "", src, alt, ...rest } = props;

    return (
        <picture>
            <source type="image/webp" />
            <img className={className} ref={ref} loading="lazy" src={src} alt={alt} {...rest} />
        </picture>
    );
});

export default Image;
