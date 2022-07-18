import { Table, Cascader, Button  } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminConfigEdit = () => {
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
        title: 'Tên chỉ tiêu',
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
        title: 'Liệt kê',
        colSpan: 1,
        dataIndex: 'lietke',
        render: (text, row, index) => <p>{text}</p>,
    },
    ];

    const data = [
    {
        key: '1',
        stt:'1',
        name: 'Khối lượng công việc trong tháng',
        lietke: true,
        titrong: "20%",
        phone1: "10%",
    },
    {
        key: '1',
        stt:'2',
        name: 'Chất lượng công việc đã hoàn thành',
        tel: 'Khối lượng ',
        titrong: "20%",
        phone1: "10%",
    },
    ];
    const options = [
        {
            value: 'NĂNG LỰC & KẾT QUẢ CÔNG VIỆC',
            label: '1. NĂNG LỰC & KẾT QUẢ CÔNG VIỆC',
        },
        {
            value: 'BONUS',
            label: '2. BONUS',
        },
        {
            value: 'THÁI ĐỘ LÀM VIỆC & TEAMWORK',
            label: '3. THÁI ĐỘ LÀM VIỆC & TEAMWORK',
        },
    ];
    const onChange = (value) => {
        console.log(value);
      };

    const onClickConfig = () => {
        navigate('/admin/EditConfig');
    }

    const onClickExit = () => {
        navigate(-1);
    }
    return(
        <div>
            <Cascader options={options} onChange={onChange} placeholder="Please select" />
            <h1 style={{marginTop:30}} >Config chỉ tiêu đánh giá bản thân</h1>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <div className="TwoButton" >
                <Button className="ButtonForm" onClick={onClickConfig} >Lưu thay đổi</Button>
                <Button className="ButtonForm" onClick={onClickExit} >Thoát</Button>
            </div>
        </div>
    );
};

export default AdminConfigEdit ;

