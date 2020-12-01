import React from 'react';
import google from '../../../../assets/svgs/google.svg'
import slack from '../../../../assets/svgs/slack.svg'
import bank from '../../../../assets/svgs/bank.svg'
import Header from "../../../../common/partials/Header";
import Card from "../../../../common/partials/card";
import PieChart from "../../../../common/components/chart/PieChart";
import {Link} from 'react-router-dom'
import BarChart from "../../../../common/components/chart/BarChart";

const AdminDashboard: React.FC = () => {
    return (
        <>
            <Header
                title={"Dashboard: Personal Growth"}
                meta_desc={"This is dashboard for personal growth applications. "}
            />
            <div className="admin-dashboard">
                <div className="communication-channel">
                    <div className="mb-md">
                        <Card>
                            <div className="communication flex items-center">
                                <div className="communication-logo">
                                    <img src={google} alt=""/>
                                </div>
                                <div className="communication-name ml-sm ">
                                    <div className="sub-title">
                                        Google
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <Card>
                        <div className="communication flex items-center">
                            <div className="communication-logo">
                                <img src={slack} alt=""/>
                            </div>
                            <div className="communication-name ml-sm ">
                                <div className="sub-title">
                                    Slack
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="dashboard-chart">
                    <Card>
                        <PieChart/>
                    </Card>
                </div>
                <Link to={'/study'} className="dashboard-study">
                    <Card>
                        <div className="db-task title">
                            My Study
                        </div>
                        <div className="db-study-items">
                            <div className="study-item">
                                <div className="study-title flex justify-start items-center">
                                    <div className="key-number">
                                        01<span className={'sub-title'}>.&nbsp;</span>
                                    </div>
                                    <div className="sub-title">
                                        React with python.
                                    </div>
                                </div>
                                <div className="description ml-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, facere!
                                </div>
                            </div>
                        </div>
                    </Card>
                </Link>
                <div className="dashboard-account">
                    <div className="mb-md">
                        <Card>
                            <div className="db-bank flex items-center">
                                <div className="db-bank-logo">
                                    <img src={bank} alt=""/>
                                </div>
                                <div className="db-bank-name ml-sm ">
                                    <div className="sub-title">
                                        World Bank
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <Link to={'/my-account'} className="dashboard-chart mb-md">
                        <Card>
                            <BarChart/>
                        </Card>
                    </Link>
                </div>
                <div className="dashboard-tasks">
                    <Link to={'/tasks'} className="db-task title">
                        My Tasks <span className={'sub-title'}> ( 05) </span>
                    </Link>
                    <div className="task-items">
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                        <div className="task-item flex justify-between mt-md">
                            <div className="key-number">
                                01
                            </div>
                            <div className="task-name">
                                Create wireframe
                            </div>
                            <div className="task-status">
                                #
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-projects">
                    <Link to='/projects' className="db-project title">
                        Projects
                    </Link>
                    <div className="db-project-items">
                        <div className="db-project-item mt-md card">
                            <div className="study-title flex justify-start items-center">
                                <div className="key-number">
                                    01<span className={'sub-title'}>.&nbsp;</span>
                                </div>
                                <div className="sub-title">
                                    Data Structure In java
                                </div>
                            </div>
                            <div className="description ml-lg">
                                <div className="project-source">
                                    <span className={'bold'}>My Own Academy </span>
                                </div>
                                <div className="project-source">
                                    <span className={"bold"}>Tech Stack</span>
                                    <div className="tech-stack flex wrap">
                                        <div className="tech-stack-item">
                                            Java
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="db-project-item mt-md card">
                            <div className="study-title flex justify-start items-center">
                                <div className="key-number">
                                    02<span className={'sub-title'}>.&nbsp;</span>
                                </div>
                                <div className="sub-title">
                                    Do Something
                                </div>
                            </div>
                            <div className="description ml-lg">
                                <div className="project-source">
                                    <span className={'bold'}>Jhon Doe Academy</span>
                                </div>
                                <div className="project-source">
                                    <span className={"bold"}>Tech Stack</span>
                                    <div className="tech-stack flex wrap">
                                        <div className="tech-stack-item">
                                            React
                                        </div>
                                        <div className="tech-stack-item">
                                            Typescript
                                        </div>
                                        <div className="tech-stack-item">
                                            Hasura
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
