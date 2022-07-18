import { Button, Table } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminGroupEdit = () => {
    let navigate = useNavigate();
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)

    const columns = [
    {
        title: 'Stt',
        dataIndex: 'stt',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Tên Group',
        colSpan: 1,
        dataIndex: 'name',
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
        dataIndex: 'titrong',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Quản lý',
        colSpan: 1,
        dataIndex: 'titrong',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Đồng nghiệp',
        colSpan: 1,
        dataIndex: 'titrong',
        render: (text, row, index) => <p>{text}</p>,
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

    const onClickCheck = () => {
        navigate(-1);
    }

    const onClickExit = () => {
        navigate(-1);
    }
    return(
        <div>
            <h1>Config group đánh giá bản thân</h1>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <div className="TwoButton" >
                <Button className="ButtonForm" onClick={onClickCheck} >Lưu chỉnh sửa</Button>
                <Button className="ButtonForm" onClick={onClickExit} >Thoát</Button>
            </div>
        </div>
    );
};

export default AdminGroupEdit ;

