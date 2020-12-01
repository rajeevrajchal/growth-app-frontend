import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom'
import '../auth.scss'
import Logo from "../../../common/components/logo";
import logo from '../../../assets/svgs/diagram.svg'
import {useDispatch} from "react-redux";
import {loginUser} from "../services/authAction";
import {userDataInterafce} from "../interface";
import Header from "../../../common/partials/Header";
import ButtonLoader from "../../../common/partials/buttonloader";

const Login: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [loginData, setLoginData] = useState<userDataInterafce>({
        password: '',
        email: ''
    })
    const dispatch = useDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist()
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        await dispatch(loginUser(loginData))
        setIsLoading(false)
    }
    return (
        <>
            <Header
                title={"Login"}
                meta_desc={'login screen '}
            />
            <div className={'auth_layout'}>
                <div className="background">
                </div>
                <div className={'card login elevated'}>
                    <div className="flex column">
                        <div className="flex justify-center">
                            <Logo logo={logo}/>
                        </div>
                        <div className="title capitalize text-center">
                            Grow with us
                        </div>
                    </div>
                    <form action="" className={'pl-lg pr-lg'} onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-group">
                            <div className="input-box">
                                <i className="material-icons">
                                    perm_identity
                                </i>
                                <input
                                    type="text"
                                    name={'email'}
                                    placeholder={"Email / User "}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-box">
                                <i className="material-icons pointer"
                                   onClick={() => setIsVisible(!isVisible)}>
                                    {isVisible ? 'visibility' : 'visibility_off'}
                                </i>
                                <input type={isVisible ? "text" : 'password'}
                                       name={'password'}
                                       placeholder={" Password "}
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="flex justify-center">
                                <button className="btn primary text-center" type={"submit"}>
                                    <span>Login</span> {isLoading && <ButtonLoader/>}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="forget-password-section flex justify-between pl-lg pr-lg">
                        <div className="text-area">
                            Forget Password ?
                        </div>
                        <div className="register-text">
                            <Link to={"/register"}>Register</Link>
                        </div>
                    </div>
                    <div className="text-center uppercase bold pl-lg pr-lg">
                        Or
                    </div>
                    <div className="extra-login-options pl-lg pr-lg">
                        <div className="input-group">
                            <div className="flex-centred">
                                <div className="btn primary text-center">
                                    Google
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="flex-centred">
                                <div className="btn primary text-center">
                                    Facebook
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;