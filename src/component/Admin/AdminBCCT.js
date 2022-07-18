import { Table, Input, Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useNavigate } from "react-router-dom";


const AdminBCCT = () => {

    let navigator = useNavigate()
    const dispatch = useDispatch()
    const info = useSelector((state) => state.info)
    const baocao = useSelector((state) => state.baocao)
    // const iduser = useSelector((state) => state.id)
    const iduser = 1
    const Qldanhgia = info[iduser].Quanlydanhgia
    const DanhGia1 = info.map(
        (e,index) => ({
            DgDongNghiep:{...info[index].DgDongNghiep}
        })
    )
    const DanhGia2 = []   
    const num =[]
    let totalDN = []
    for (var i = 0; i < DanhGia1.length; i++) {
        DanhGia2.push(DanhGia1[i].DgDongNghiep)
        for (var j = 0; j < Object.keys(DanhGia2[i]).length; j++) {
            num.push(DanhGia2[i][j])
        }
    }     
    const { TextArea } = Input;
    const [inputSelf,setInputSelf] = useState([0,,,0,,,,,0,,,,,,,]);
    let area = [,,,,,,,,,,,,,,,,]
    let inputSelf1 = [...inputSelf]
    
    const DSFilter = num.filter(
        (e) =>
            e.fullname === info[iduser].fullname
    )

    for (var k = 0; k < DSFilter.length ; k++) {
        totalDN =(Number(totalDN) + Number(DSFilter[k].total)).toFixed(2);
    }

    const onButtonClick = () => {
        navigator(-1)
    } 
    
    const onInputChange = (e,index) => {
        inputSelf1.splice(index,1,Number(e.target.value))
        if (index < 3) {
            inputSelf1[0] = ((Number(inputSelf1[1]) + Number(inputSelf1[2]))/2 ).toFixed(2)
        }else if (index < 8) {
            inputSelf1[3] = ((Number(inputSelf1[4]) + Number(inputSelf1[5]) + Number(inputSelf1[6])+ Number(inputSelf1[7]))/4 ).toFixed(2)
        }else {
            inputSelf1[8] = ((Number(inputSelf1[9]) + Number(inputSelf1[10])+ Number(inputSelf1[11])+ Number(inputSelf1[12])+ Number(inputSelf1[13])+ Number(inputSelf1[14])+ Number(inputSelf1[15]))/7).toFixed(2)
        }
    }
    
    const onAreaChange = (e,index) => {
        console.log(index)
        area.splice(index,1,e.target.value)
        console.log(area)
    }
    
    const sharedOnCell = (_, index) => {
        if (index === 4  ) {
            return { colSpan: 1 };
        }
    };
    
    const sharedOnRender = (text,record,index) => {
        if (index === 0 ) {
            return (<p>{inputSelf[0]}</p>)
        }else if (index === 3) {
            return (<p>{inputSelf[3]}</p>)
        } else if (index === 8) {
            return (<p>{inputSelf[8]}</p>)
        } 
        else {
            return (<Input placeholder="Nhập số" value={inputSelf1[index]} onChange={(e) => onInputChange(e,index) }  ></Input>)
        }
    };
    
    const RenderArea = (text,record,index) => {
        if (index > 7 ) {
            return (<p>X</p>)
        }
        else {
            return (baocao[0].lietke[index])
        }
    };
    
const columns = [
        
    {
        title: '',
        colSpan: 2,
        dataIndex: 'tel',
        onCell: sharedOnCell,
    },
    {
        title: 'point',
        colSpan: 0,
        dataIndex: 'title',
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
        onCell: sharedOnCell,
    },
    {
        title: 'Liệt kê',
        dataIndex: area,
        render: RenderArea,
        onCell: sharedOnCell,
    },
    {
        title: 'Tỷ trọng',
        dataIndex: 'proportion',
        onCell: sharedOnCell,
    },
    {
        title: 'Cá nhân tự đánh giá',
        dataIndex: baocao,
        render: (text,record,index) => <p > {baocao[0].canhan[index]}</p>,
        onCell: sharedOnCell,
    },
    {
        title: 'Quản lý trực tiếp đánh giá',
        dataIndex: baocao,
        render: (text,record,index) => <p > {baocao[0].quanly[index]}</p>,
        onCell: sharedOnCell,
    },
];

const data = [
    {
        key: '1',
        proportion: '100%',
        tel: 'I',
        point: "20%",
        title: "NĂNG LỰC & KẾT QUẢ CÔNG VIỆC",
    },
    {
        key: '2',
        proportion: '50%',
        tel: '1',
        point: "80%",
        title: "Khối lượng công việc trong tháng",
    },
    {
        key: '3',
        proportion: '50%',
        tel: '2',
        title: "Chất lượng công việc đã hoàn thành",
    },
    {
        key: '4',
        proportion: '100%',
        tel: 'II',
        point: "100%",
        title: "BONUS",
    },
    {
        key: '5',
        proportion: '30%',
        tel: '1',
        point: "100%",
        title: "Hỗ trợ ngoài công việc chính",
    },
    {
        key: '6',
        proportion: '30%',
        tel: '2',
        point: "100%",
        title: "Làm thêm ngoài giờ",
    },
    {
        key: '7',
        proportion: '20%',
        tel: '3',
        point: "100%",
        title: "Chia sẻ kiến thức công việc & chuyên môn",
    },
    {
        key: '8',
        proportion: '20%',
        tel: '4',
        point: "100%",
        title: "Khả năng sáng tạo, áp dụng công nghệ/quy trình trong công việc",
    },
    {
        key: '9',
        proportion: '100%',
        tel: 'III',
        point: "100%",
        title: "THÁI ĐỘ LÀM VIỆC & TEAMWORK",
    },
    {
        key: '10',
        proportion: '15%',
        tel: '1',
        point: "100%",
        title: "Tính chủ động trong công việc",
    },
    {
        key: '11',
        proportion: '15%',
        tel: '2',
        point: "100%",
        title: "Tinh thần làm việc nhóm, thái độ hợp tác trong nội bộ/bên ngoài",
    },
    {
        key: '12',
        proportion: '15%',
        tel: '3',
        point: "100%",
        title: "Thái độ làm việc",
    },
    {
        key: '13',
        proportion: '15%',
        tel: '4',
        point: "100%",
        title: "Tuân thủ nội quy",
    },
    {
        key: '14',
        proportion: '20%',
        tel: '5',
        point: "100%",
        title: "Văn hóa ứng xử trong công ty",
    },
    {
        key: '15',
        proportion: '15%',
        tel: '6',
        point: "100%",
        title: "Thái độ và tác phong làm việc",
    },
    {
        key: '16',
        proportion: '5%',
        tel: '7',
        point: "100%",
        title: "Tham gia hoạt động phong trào",
    },
];

return(
    <div>
            <h1>Đánh giá bản thân</h1>
            <h5>Tiêu chí chấm điểm cho tất cả các hạng mục đánh giá: 
                (1). &#60; 5: Kém (2). Từ &#62; 5 đến &#60; = 7: Trung bình (3). Từ &#62; 7 đến &#60; = 9: Tốt (4). &#62; 9: Xuất sắc
            </h5>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <Button className="ButtonForm" onClick={onButtonClick} >Thoát</Button>
        </div>
    );
};

export default AdminBCCT ;
