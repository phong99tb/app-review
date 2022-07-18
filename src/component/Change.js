import { Button, Table } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Change = () => {
    let navigate = useNavigate();
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)

    const onClickAdmin = () => {
        navigate('/admin/user');
    }
    const onClickUser = () => {
        navigate('/home/user');
    }
    return(
        <div>
            <h1>Chuyển</h1>
            <div className="TwoButton" >
                <Button className="ButtonForm" onClick={onClickUser} >User</Button>
            </div>
        </div>
    );
};

export default Change ;

