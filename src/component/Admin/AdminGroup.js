import { Button, Table } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminGroup = () => {
    let navigate = useNavigate();
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)
    const user = useSelector((state) => state.config)

    const columns = [
    {
        title: 'Stt',
        dataIndex: 'stt',
        render: (text, row, index) => <p>{index+1}</p>,
    },
    {
        title: 'Tên Group',
        colSpan: 1,
        dataIndex: 'group',
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
    },
    {
        title: 'Tỉ trọng',
        colSpan: 1,
        dataIndex: 'titrong',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Cá nhân',
        colSpan: 1,
        dataIndex: 'canhan',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Quản lý',
        colSpan: 1,
        dataIndex: 'quanly',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Đồng nghiệp',
        colSpan: 1,
        dataIndex: 'dongnghiep',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: '',
        colSpan: 1,
        dataIndex: 'group',
        render: (text, row, index) => <Button>Xóa</Button>,
    },
    ];

    const data = [
    {
        key: '1',
        stt:'1',
        name: 'NĂNG LỰC & KẾT QUẢ CÔNG VIỆC',
        lietke: true,
        titrong: "20%",
        phone1: "10%",
    },
    {
        key: '1',
        stt:'2',
        name: 'BONUS',
        tel: 'Khối lượng công việc trong tháng',
        titrong: "20%",
        phone1: "10%",
    },
    {
        key: '1',
        stt:'3',
        name: 'THÁI ĐỘ LÀM VIỆC & TEAMWORK',
        lietke: true,
        titrong: "20%",
        phone1: "10%",
    },
    ];

    const onClickAdd = () => {
        navigate('/admin/EditGroup/add');
    }
    const onClickEdit = () => {
        console.log(user);
        // navigate('/admin/EditGroup/edit');
    }
    return(
        <div>
            <h1>Config group đánh giá bản thân</h1>
            <Table columns={columns} dataSource={user} pagination={false} bordered />
            <div className="TwoButton" >
                <Button className="ButtonForm" onClick={onClickAdd} >Thêm Group</Button>
                <Button className="ButtonForm" onClick={onClickEdit} >Sửa Group</Button>
            </div>
        </div>
    );
};

export default AdminGroup ;

