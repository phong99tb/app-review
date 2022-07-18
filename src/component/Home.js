import React from 'react';
import 'antd/dist/antd.css';
import App from '../App';
import {Link, Navigate, useNavigate} from "react-router-dom";
import { Button } from 'antd';

const Home=() => {
    const navigate=useNavigate()
    const onClickLogin = () => {
        navigate("/login")
    }

    const onClickDK = () => {
        navigate("/dang-ky")
    }

    return(
        <div >
            <div className='container' >
                <div className='header' >
                    <img src='/img/icon-vnTrip.png' style={{width:"120px",margin:"-20px"}} ></img>
                    <div>
                        <Button className='button' onClick={onClickDK} style={{marginRight:10}} >Đăng ký</Button>
                        <Button className='button' onClick={onClickLogin} >Đăng nhập</Button>
                    </div>
                </div>
            </div>
            <div className='content' >
            </div>
        </div>
    );
};

export default Home;
