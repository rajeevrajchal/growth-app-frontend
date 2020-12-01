import React from 'react';
import './dragdrop.scss'
interface BoardProps {
    children: React.ReactNode
    id:string
}
const Board:React.FC<BoardProps> = (props) => {
    const onDrop= (e:any) => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card_id')
        const card = document.getElementById(card_id);
        // @ts-ignore
        card.style.display = 'block'
        e.target.appendChild(card)
    }

    const dragOver = (e:any) => {
        e.preventDefault()
    }

    return (
        <div
            onDrop={onDrop}
            onDragOver={dragOver}
            className={`board flex column ${props.id} focus-none`}
            id={`${props.id}`}
        >
            <div className="sub-title bold text-center capitalize">
                {props.id}
            </div>
            <div id="board-children">
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Board;
