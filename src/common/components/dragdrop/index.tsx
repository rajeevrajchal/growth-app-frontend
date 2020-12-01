import React, {useState} from 'react';
import './dragdrop.scss'

interface DragDropProps {
    children: React.ReactNode
    type: string
    draggable: boolean
    id: string
}

const DragDrop: React.FC<DragDropProps> = (props) => {
    const [isFolderAction, setFolderAction] = useState<boolean>(false)
    const dragStart = (e: any) => {
        e.dataTransfer.setData('card_id', e.target.id)
        // setTimeout(() => {
        //     e.target.style.display = "none"
        // }, 0)
    }

    const dragOver = (e: any) => {
        e.stopPropagation()
    }
    return (
        <>
            <div
                onClick={() => setFolderAction(!isFolderAction)}
                className={`dragdrop-card card mt-md pointer focus-none ${props.draggable ? '' : 'no-actions'}`}
                draggable={props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
                id={props.id}>
                {
                    !props.draggable && <span className="tooltip-text">Completed can't move.</span>
                }
                {
                    props.children
                }
                {
                    ( isFolderAction && props.draggable) ? (
                        <div className="folder-action-popup">
                            <div className={'folder-action-buttons pb-xs'} onClick={() => console.log('this is edit')}> Edit </div>
                            <div className={'folder-action-buttons pb-xs'}> Progress </div>
                            <div className={'folder-action-buttons pb-xs'}> Complete </div>
                        </div>
                    ):''
                }
            </div>
        </>
    );
};

export default DragDrop;
