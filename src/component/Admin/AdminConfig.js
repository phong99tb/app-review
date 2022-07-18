import { Table, Cascader, Button  } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminConfig = () => {
    const [idConfig,setIdConfig]=useState(0)
    const [showList,setShowList]=useState("abc")
    let navigate = useNavigate();
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)
    const user = useSelector((state) => state.config)
    

    const columns = [
    {
        title: 'Stt',
        render: (text, row, index) => <p>{index+1}</p>,
    },
    {
        title: 'Tên chỉ tiêu',
        colSpan: 1, 
        dataIndex: showList,
        render: (text, row, index) => <p style={{textAlign:"left"}} >{showList[index].stt}</p>,
    },
    {
        title: 'Tỉ trọng',
        colSpan: 1,
        dataIndex: user,
        render: (text, row, index) => <p>2</p>,
    },
    {
        title: 'Liệt kê',
        colSpan: 1,
        dataIndex: 'lietke',
        render: (text, row, index) => <p>{text}</p>,
    },
    {
        title: '',
        colSpan: 1,
        dataIndex: 'group',
        render: (text, row, index) => <Button onClick={onClickDele} >Xóa</Button>,
    },
    ];

    // const data = [
    // {
    //     key: '1',
    //     stt:'1',
    //     name: 'Khối lượng công việc trong tháng',
    //     lietke: true,
    //     titrong: "20%",
    //     phone1: "10%",
    // },
    // {
    //     key: '1',
    //     stt:'2',
    //     name: 'Chất lượng công việc đã hoàn thành',
    //     tel: 'Khối lượng ',
    //     titrong: "20%",
    //     phone1: "10%",
    // },
    // ];
    // const options = [
    //     {
    //         value: 'NĂNG LỰC & KẾT QUẢ CÔNG VIỆC',
    //         label: '1. NĂNG LỰC & KẾT QUẢ CÔNG VIỆC',
    //     },
    //     {
    //         value: 'BONUS',
    //         label: '2. BONUS',
    //     },
    //     {
    //         value: 'THÁI ĐỘ LÀM VIỆC & TEAMWORK',
    //         label: '3. THÁI ĐỘ LÀM VIỆC & TEAMWORK',
    //     },
    // ];

    const options = user.map(
        (e,index) => ({
            value: user[index].group,
            label: (index+1)+". "+user[index].group,
            index: index,
        })
    )

    const onChange = (value,index) => {
        console.log(value);
        console.log("--user--",user[index[0].index].target);
        setShowList(user[index[0].index].target)
        setIdConfig(index[0].index)
      };

    const onClickDele = () => {
        console.log(options);

    }

    const onClickConfig = () => {
        navigate('/admin/EditConfig/add');
    }

    const onClickEdit = () => {
        navigate('/admin/EditConfig/edit');
    }
    return(
        <div>
            <Cascader options={options} onChange={onChange} placeholder="Please select" />
            <h1 style={{marginTop:30}}>Config chỉ tiêu đánh giá bản thân</h1>
            <Table columns={columns} dataSource={user} pagination={false} bordered />
            <div className="TwoButton" >
                <Button className="ButtonForm" onClick={onClickConfig} >Thêm chỉ tiêu</Button>
                <Button className="ButtonForm" onClick={onClickEdit} >Sửa chỉ tiêu</Button>
            </div>
        </div>
    );
};

export default AdminConfig ;

