import React from 'react';

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = (props) => {
    const {
        children
    } = props
    return (
        <div className={'card'}>
            {
                children
            }
        </div>
    );
};

export default Card;
