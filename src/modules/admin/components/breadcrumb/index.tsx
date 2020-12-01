import React, {useState} from 'react';

interface BreadCrumbProps {
    handleClick: () => void
}

const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
    const {
        handleClick
    } = props
    const [projectListingType, setProjectListingType] = useState('drag_indicator')
    const handleChangeProjectListingType = (type: any) => {
        setProjectListingType(type)
    }
    return (
        <div className="project-titles flex justify-between align-center items-center">
            <div className="project-listing-type flex justify-between items-center align-center">
                <div
                    className={`pointer flex-centred ${projectListingType === 'drag_indicator' ? 'activeButton' : ''} `}
                    onClick={() => handleChangeProjectListingType('drag_indicator')}
                >
                    <i className="material-icons text-center"
                    >
                        drag_indicator
                    </i>
                </div>
                <div className={`pointer ml-sm ${projectListingType === 'order' ? 'activeButton' : ''} `}
                     onClick={() => handleChangeProjectListingType('order')}
                >
                    <i className="material-icons"
                    >
                        reorder
                    </i>
                </div>
            </div>
            <div className="btn primary flex-centered" onClick={() => handleClick()}>
                <i className="material-icons">
                    add
                </i>
            </div>
        </div>
    );
};

export default BreadCrumb;
