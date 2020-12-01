import React, {useState} from 'react';
import exit from '../../../../../assets/svgs/exit.svg'
import man from '../../../../../assets/svgs/man.svg'
import bank from '../../../../../assets/svgs/bank.svg'
import {useDispatch} from "react-redux";
import {closeModal, logoutUser} from "../../../../../store/actions";

const UserAction = () => {
    const [isExpand, setIsExpand] = useState<boolean>(false)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutUser())
        dispatch(closeModal())
    }
    return (
        <>
            {
                isExpand ? (
                    <div className="expanded-ua">
                        <div className="text-center capitalize pt-md">
                            " Are You Sure You want to logout "
                        </div>
                        <div className="button-area flex justify-between align-center mt-md">
                            <div className="btn success text-center" onClick={() => dispatch(closeModal())}>
                                <span>Stay In </span>
                            </div>
                            <div className="btn primary text-center capitalize" onClick={() =>handleLogout() }>
                                <span> Yes Exit </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={'user-action flex wrap'}>
                        <div className="ua-card elevated pointer flex-centred">
                            <div className="ua-image">
                                <img src={man} alt=""/>
                            </div>
                        </div>
                        <div className="ua-card elevated pointer">
                            <div className="ua-image">
                                <img src={bank} alt=""/>
                            </div>
                        </div>
                        <div className="ua-card elevated pointer" onClick={() => setIsExpand(true)}>
                            <div className="ua-image">
                                <img src={exit} alt=""/>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default UserAction;
