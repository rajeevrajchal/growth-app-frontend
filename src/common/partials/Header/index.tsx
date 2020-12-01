import React from 'react';
import {Helmet} from "react-helmet";

interface HeaderProps {
    title: string
    meta_desc: string
}

const Header: React.FC<HeaderProps> = (props) => {

    const {
        title,
        meta_desc
    } = props
    return (
        <Helmet>
            <title>{title}</title>
            <meta
                name="description"
                content={meta_desc}
            />
        </Helmet>
    );
};

export default Header;
