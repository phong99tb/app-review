import { Button, Table } from "antd";
import { useSelector } from "react-redux";

const AdminPermission = () => {
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)

    const columns = [
    {
        title: 'Stt',
        dataIndex: 'stt',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: 'Họ và tên',
        colSpan: 1,
        dataIndex: 'name',
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
    },
    {
        title: 'Người quản lý',
        colSpan: 1,
        dataIndex: 'quanly',
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
    },
    {
        title: 'Quyền',
        colSpan: 1,
        dataIndex: 'quyen',
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
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
        name: 'Nguyễn Trung Phong',
        lietke: true,
        quanly: "Nguyễn Thành Đạt",
        quyen: "Quản lý",
    },
    {
        key: '1',
        stt:'2',
        name: 'Lê Như Hậu',
        tel: 'Khối lượng công việc trong tháng',
        quanly: "Nguyễn Thành Đạt",
        quyen: "User",
    },
    {
        key: '1',
        stt:'3',
        name: 'Nguyễn Thành Đạt',
        lietke: true,
        quanly: "Nguyễn Thành Đạt",
        quyen: "User",
    },
    ];

    const onClickCheck = () => {
        console.log(info[iduser].fullname)
        console.log(info)
    }
    return(
        <div>
            <h1>Chỉnh sửa quyền</h1>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <div className="TwoButton" >
                <Button className="ButtonForm" onClick={onClickCheck} >Thêm User</Button>
                <Button className="ButtonForm" onClick={onClickCheck} >Thay đổi quyền</Button>
            </div>
        </div>
    );
};

export default AdminPermission ;

