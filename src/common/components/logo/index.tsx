import React from 'react';

interface LogoProps {
    logo:string
}
const Logo:React.FC<LogoProps> = (props) => {
    const {
        logo
    } = props
    return (
        <>
            <div className="logo pa-md flex-centered">
                <img src={logo} alt=""/>
            </div>
        </>
    );
};

export default Logo;
