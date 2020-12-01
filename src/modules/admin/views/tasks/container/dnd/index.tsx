import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import './dnd.scss'
import {log} from "util";

interface DndPropsInterface {
    taskDoneItems: any
    taskTodoItems: any
}

const Dnd: React.FC<DndPropsInterface> = (props) => {
    const {
        taskDoneItems,
        taskTodoItems
    } = props
    const columnsFromBackend = {
        ['todo']: {
            name: "To do",
            items: taskTodoItems
        },
        ['done']: {
            name: "Done",
            items: taskDoneItems
        }
    };
    const [columns, setColumns] = useState(columnsFromBackend);
    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        console.log(result)
        if (!result.destination) return;
        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            if (destination.droppableId === 'done') {
                alert("Complication Time Required");
            }
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
            //    redux action can from here to add to designated box
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };
    return (
        <div className={'dnd-board flex wrap justify-between'}>
            {/*dragdrop context is board */}
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            className={'dnd-board-data flex column align-center'}
                            key={columnId}
                        >
                            <div className={'sub-title text-center bold'}>{column.name}</div>
                            <div className={'mt-sm'}>

                                {/*Droppable context is data's */}
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className={'board'}
                                                style={{
                                                    padding: 16,
                                                    // background: snapshot.isDraggingOver
                                                    //     ? "lightblue"
                                                    //     : "lightgrey",
                                                    background: snapshot.isDraggingOver
                                                        ? "lightblue"
                                                        : "",
                                                }}
                                            >
                                                {/*@ts-ignore*/}
                                                {column.items && column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        onClick={() =>console.log('this is open detail ')}
                                                                        className={'droppable-card card mb-md'}
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        <div className="sub-title bold">
                                                                            {item.content}
                                                                        </div>
                                                                        <div className="task-description mt-sm mb-sm">
                                                                            Lorem ipsum dolor sit amet, consectetur
                                                                            adipisicing elit. Aliquid dolores, ipsum
                                                                            libero optio porro voluptates.
                                                                        </div>
                                                                        <div
                                                                            className="dnd-footer pl-md pr-md flex justify-between items-center align-center">
                                                                            <div className="flex">
                                                                                <div className="task-point ">
                                                                                    <span>p:</span>3
                                                                                </div>
                                                                                <div className="task-point ">
                                                                                    <span>est:</span> 2 hr
                                                                                </div>
                                                                                <div className="task-point ">
                                                                                    <span>ct:</span>1 hr
                                                                                </div>
                                                                            </div>
                                                                            {/*<div className="task-due-date">*/}
                                                                            {/*    2020-10-5( 1 month back )*/}
                                                                            {/*</div>*/}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
};

export default Dnd;
