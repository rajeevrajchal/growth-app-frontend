import React from 'react';
import {useDispatch} from "react-redux";
import {closeModal} from "../../../../../store/actions";

const AddProject = () => {
    const dispatch = useDispatch()
    return (
        <div className={'add-project'}>
            <form action="" onSubmit={() => console.log('this is submit form ')}>
                <div className="input-group">
                    <div className="input-box">
                        <i className="material-icons"> card_travel </i>
                        <input type="text" name={'name'} placeholder={'your project name '}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <i className="material-icons"> people </i>
                        <input type="text" name={'client'} placeholder={'your project client '}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <i className="material-icons"> biotech </i>
                        <input type="text" name={'deadline'} placeholder={'your project tech '}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <i className="material-icons"> date_range </i>
                        <input type="date" name={'deadline'} placeholder={'your project deadline '}/>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <i className="material-icons"> date_range </i>
                        <input type="date" name={'deadline'} placeholder={'your project deadline '}/>
                    </div>
                </div>

                <div className="form-button flex justify-between align-center items-center mt-md mb-md">
                    <div className="btn danger" onClick={() => dispatch(closeModal())}>
                        Cancel
                    </div>
                    <div className="btn primary">
                        Save
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProject;
