import React from 'react';
import './toaster.scss'

export interface ToasterProps {
    appear: boolean
    title: string
    type: string
    message: string
}

const Toaster: React.FC<ToasterProps> = (props) => {
    const {
        appear,
        title,
        type,
        message
    } = props
    return (
        <div
            className={`toaster top-right ${
                appear ? "on" : "off"
            } ${type.toLowerCase()}`}>
            <div className="toaster-title bold">{title ? title : 'title'}</div>
            <div className="toaster-description">{message ? message : 'Welcome to growth app.'}</div>
        </div>
    );
};

export default Toaster;