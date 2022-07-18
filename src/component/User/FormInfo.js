import { Button, Table, Form, Input, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { info } from '../../api/index';
import axios from "axios"
import { setEmail, setGroup, setToken } from "../../redux/actions";
import { setInfo } from "../../api";


const FormInfo = () => {
    const dispatch = useDispatch()
    let info = JSON.parse(window.localStorage.getItem('info'));
    
    let groups = info.map((info, index, infoUser) => {
        return info.group + " "
    })

    let groupState = info.map((info, index, infoUser) => {
        return {
            idGroup: info.group_id,
            group: info.group
        }
    })
    dispatch(setGroup(groupState))

    return (
        <div className="rightInfo">
                <p style={{ fontSize: "20px" }} > Email: <span style={{color:"#fd8c13"}} >{info[0].email}</span></p>
                <p style={{ fontSize: "20px" }} > Họ tên: <span style={{color:"#fd8c13"}}>{info[0].last_name} {info[0].first_name}</span></p>
                <p style={{ fontSize: "20px" }} > Chức vụ: <span style={{color:"#fd8c13"}} >{info[0].position}</span></p>
                <p style={{ fontSize: "20px" }} > Họ tên quản lý: <span style={{color:"#fd8c13"}} >{info[0].last_name_manager} {info[0].first_name_manager}</span></p>
                <p style={{ fontSize: "20px" }} > Chức vụ quản lý: <span style={{color:"#fd8c13"}} >{info[0].position_manager}</span></p>
                <p style={{ fontSize: "20px" }} > Role: <span style={{color:"#fd8c13"}} >{info[0].role_name}</span></p>
                <p style={{ fontSize: "20px" }} > Nhóm: <span style={{color:"#fd8c13"}} >{groups}</span></p>
        </div>
    );
}

export default FormInfo;

