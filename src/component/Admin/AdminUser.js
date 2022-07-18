import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminUser = () => {
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)
    const user=useSelector((state) => state.user)
    const dispatch=useDispatch()
    let navigate = useNavigate();
    
    const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Họ tên',
        colSpan: 1,
        dataIndex: 'name',
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
    },
    {
        title: 'Email',
        colSpan: 1,
        dataIndex: 'email',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Ngày sinh',
        colSpan: 1,
        dataIndex: 'date',
        render: (text, row, index) => <p>{text}</p>,
    },
    // {
    //     title: 'Chức vụ',
    //     colSpan: 1,
    //     dataIndex: 'chucvu',
    //     render: (text, row, index) => <p>{text}</p>,
    // },
    {
        title: 'Người quản lý',
        colSpan: 1,
        dataIndex: 'quanly',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: '',
        colSpan: 1,
        dataIndex: 'stt',
        render: (text, row, index) => <Button onClick={(e)=> onClickIndex(index)} >Chỉnh sửa</Button>,
    },
    {
        title: '',
        colSpan: 1,
        dataIndex: 'group',
        render: (text, row, index) => <Button onClick={(e)=> onClickDele(index)} >Xóa</Button>,
    },
    ];

    const [data,setData] = useState()

    
    const onClickAdd = () => {
        navigate('/admin/user/add');
    }
    const onClickIndex = (index) => {
        console.log(data[index]);
        console.log(data);
    }
    const onClickDele = (index) => {
        console.log(data[index]);
        data.splice(index,1)
        setData(data)
        navigate("/admin/user")
        // dispatch(user(data))
    }
    useEffect(() => {
        setData(user)
    }, [data]);
    return(
        <div>
            <h1>Danh sách</h1>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <Button className="ButtonForm" onClick={onClickAdd} >Thêm User</Button>
        </div>
    );
};

export default AdminUser ;

