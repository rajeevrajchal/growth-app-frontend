import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../../../store/actions";
import Modal from "../../../../common/partials/modal";
import {RootState} from "../../../../store/interface";
import UserAction from "./container/useraction";

const Nav = () => {
    const dispatch = useDispatch()
    const {modalMode} = useSelector((state: RootState) => state.modalReducer)
    return (
        <div className={'nav flex justify-end align-center items-center'}>
            <div className="user flex justify-between align-center items-center pointer"
                 onClick={() => dispatch(openModal('user_action'))}>
                <div className="user-name pa-md">
                    Jhon Doe
                </div>
                <div className="user-logo">
                    <img
                        src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__480.png"
                        alt="user-profile"/>
                </div>
            </div>
            {
                modalMode === 'user_action' && (
                    <Modal userAction={true}>
                        <UserAction/>
                    </Modal>
                )
            }
        </div>
    );
};

export default Nav;
