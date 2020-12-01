import React from 'react';
import './modal.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/interface";
import {closeModal} from "./services/modalAction";

interface ModalPropsInterface {
    children: React.ReactNode
    userAction?: boolean
}

const Modal: React.FC<ModalPropsInterface> = (props) => {
    const {
        children,
        userAction
    } = props
    const dispatch = useDispatch()
    const {isOpenModal} = useSelector((state: RootState) => state.modalReducer)
    return (
        <>
            {
                isOpenModal && (
                    <div className="modal">
                        <div className="modal-backdrop" onClick={() => dispatch(closeModal())}>
                        </div>
                        <div className="modal-card">
                            {
                                !userAction && (
                                    <div className="modal-close">
                                        <i className="material-icons pointer"
                                           onClick={() => dispatch(closeModal())}>clear</i>
                                    </div>
                                )
                            }
                            <div className="modal-container">
                                {
                                    children
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Modal;
