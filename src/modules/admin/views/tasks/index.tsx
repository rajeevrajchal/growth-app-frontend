import React from 'react';
import Header from "../../../../common/partials/Header";
import Dnd from "./container/dnd";
import BreadCrumb from "../../components/breadcrumb";
import {v4 as uuid} from "uuid";

const taskTodoItems = [
    {id: uuid(), content: "Third task"},
    {id: uuid(), content: "Fourth task"},
    {id: uuid(), content: "Fifth task"}
];
const taskDoneItems = [
    {id: uuid(), content: "First task"},
    {id: uuid(), content: "Second task"},
];
const Task = () => {
    return (
        <>
            <Header
                title={"Tasks: Personal Growth"}
                meta_desc={"This is dashboard for personal growth applications. "}
            />
            <BreadCrumb handleClick={() => console.log('hello task ')}/>
            <Dnd
                taskDoneItems={taskDoneItems}
                taskTodoItems={taskTodoItems}/>
        </>
    );
};

export default Task;
