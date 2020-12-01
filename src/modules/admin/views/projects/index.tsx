import React from 'react';
import Board from "../../../../common/components/dragdrop/Board";
import DragDrop from "../../../../common/components/dragdrop";
import BreadCrumb from "../../components/breadcrumb";
import Modal from "../../../../common/partials/modal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/interface";
import {openModal} from "../../../../common/partials/modal/services/modalAction";
import AddProject from "./container/AddProject";

const Projects = () => {
    const projects = [
        {id: "1", taskName: "Read book", type: "progress"},
        {id: "2", taskName: "Pay bills", type: "progress"},
        {id: "3", taskName: "Go to the gym", type: "completed"},
        {id: "4", taskName: "Play baseball", type: "completed"},
        {id: "5", taskName: "Make Coffee", type: "Working"},
        {id: "6", taskName: "go out ", type: "working"}
    ]

    const {modalMode} = useSelector((state: RootState) => state.modalReducer)
    const dispatch = useDispatch()

    return (
        <div className={'projects'}>
            <BreadCrumb handleClick={() => dispatch(openModal('add_project'))}/>
            <div className={'project-board flex justify-between project-listing-area mt-md'}>
                <Board id={"working"}>
                    {
                        projects.map((projectWorking, index) => (
                            projectWorking.type.toLowerCase() === 'working' &&
                            (
                                //className for dragdrop is dragdrop-card
                                <DragDrop
                                    key={index}
                                    type={'working'}
                                    id={`working-${projectWorking.id}`} draggable={true}>
                                    <div className="sub-title bold">
                                        {projectWorking.taskName}
                                    </div>
                                    <div className="project-description mt-sm mb-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid
                                        amet asperiores culpa dolorem dolorum, excepturi impedit itaque officiis quaerat
                                        quo repellendus repudiandae similique sunt?
                                    </div>
                                    <div className="dragdrop-footer pl-md pr-md">
                                        <div className="project-point ">
                                            3
                                        </div>
                                    </div>
                                </DragDrop>
                            )
                        ))
                    }
                </Board>
                <Board id={"progress"}>
                    {
                        projects.map((projectProgress, index) => (
                            projectProgress.type.toLowerCase() === 'progress' &&
                            (
                                <DragDrop
                                    key={index}
                                    type={'progress'}
                                    id={`progress-${projectProgress.id}`} draggable={true}>
                                    <div className="sub-title bold">
                                        {
                                            projectProgress.taskName
                                        }
                                    </div>
                                    <div className="project-description mt-sm mb-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid
                                        amet asperiores culpa dolorem dolorum, excepturi impedit itaque officiis quaerat
                                        quo repellendus repudiandae similique sunt?
                                    </div>
                                    <div className="dragdrop-footer pl-md pr-md">
                                        <div className="project-point ">
                                            3
                                        </div>
                                    </div>
                                </DragDrop>
                            )
                        ))
                    }
                </Board>
                <Board id={"completed"}>
                    {
                        projects.map((projectCompleted, index) => (
                            projectCompleted.type.toLowerCase() === 'completed' &&
                            (
                                <DragDrop
                                    key={index}
                                    type={'completed'}
                                    id={`completed-${projectCompleted.id}`} draggable={false}>
                                    <div className="sub-title bold">
                                        {
                                            projectCompleted.taskName
                                        }
                                    </div>
                                    <div className="project-description mt-sm mb-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid
                                        amet asperiores culpa dolorem dolorum, excepturi impedit itaque officiis quaerat
                                        quo repellendus repudiandae similique sunt?
                                    </div>
                                    <div className="dragdrop-footer pl-md pr-md">
                                        <div className="project-point ">
                                            3
                                        </div>
                                    </div>
                                </DragDrop>
                            )
                        ))
                    }
                </Board>
            </div>
            {
                modalMode === 'add_project' && (
                    <Modal>
                        <AddProject/>
                    </Modal>
                )
            }
        </div>
    );
};

export default Projects;
