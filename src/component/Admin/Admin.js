import React from 'react';
import 'antd/dist/antd.css';
import App from '../../App';

import {Link} from "react-router-dom";

const Admin = () => {
    
    return(
        <div>
            <p>Đây là trang chủ</p>
            <Link to={"/admin/user"} >Admin</Link>
        </div>
    );
};

export default Admin;
