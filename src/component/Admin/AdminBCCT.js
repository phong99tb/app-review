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
            return (<Input placeholder="Nh???p s???" value={inputSelf1[index]} onChange={(e) => onInputChange(e,index) }  ></Input>)
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
        title: 'Li???t k??',
        dataIndex: area,
        render: RenderArea,
        onCell: sharedOnCell,
    },
    {
        title: 'T??? tr???ng',
        dataIndex: 'proportion',
        onCell: sharedOnCell,
    },
    {
        title: 'C?? nh??n t??? ????nh gi??',
        dataIndex: baocao,
        render: (text,record,index) => <p > {baocao[0].canhan[index]}</p>,
        onCell: sharedOnCell,
    },
    {
        title: 'Qu???n l?? tr???c ti???p ????nh gi??',
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
        title: "N??NG L???C & K???T QU??? C??NG VI???C",
    },
    {
        key: '2',
        proportion: '50%',
        tel: '1',
        point: "80%",
        title: "Kh???i l?????ng c??ng vi???c trong th??ng",
    },
    {
        key: '3',
        proportion: '50%',
        tel: '2',
        title: "Ch???t l?????ng c??ng vi???c ???? ho??n th??nh",
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
        title: "H??? tr??? ngo??i c??ng vi???c ch??nh",
    },
    {
        key: '6',
        proportion: '30%',
        tel: '2',
        point: "100%",
        title: "L??m th??m ngo??i gi???",
    },
    {
        key: '7',
        proportion: '20%',
        tel: '3',
        point: "100%",
        title: "Chia s??? ki???n th???c c??ng vi???c & chuy??n m??n",
    },
    {
        key: '8',
        proportion: '20%',
        tel: '4',
        point: "100%",
        title: "Kh??? n??ng s??ng t???o, ??p d???ng c??ng ngh???/quy tr??nh trong c??ng vi???c",
    },
    {
        key: '9',
        proportion: '100%',
        tel: 'III',
        point: "100%",
        title: "TH??I ????? L??M VI???C & TEAMWORK",
    },
    {
        key: '10',
        proportion: '15%',
        tel: '1',
        point: "100%",
        title: "T??nh ch??? ?????ng trong c??ng vi???c",
    },
    {
        key: '11',
        proportion: '15%',
        tel: '2',
        point: "100%",
        title: "Tinh th???n l??m vi???c nh??m, th??i ????? h???p t??c trong n???i b???/b??n ngoa??i",
    },
    {
        key: '12',
        proportion: '15%',
        tel: '3',
        point: "100%",
        title: "Th??i ????? l??m vi???c",
    },
    {
        key: '13',
        proportion: '15%',
        tel: '4',
        point: "100%",
        title: "Tu??n th??? n???i quy",
    },
    {
        key: '14',
        proportion: '20%',
        tel: '5',
        point: "100%",
        title: "V??n h??a ???ng x??? trong c??ng ty",
    },
    {
        key: '15',
        proportion: '15%',
        tel: '6',
        point: "100%",
        title: "Th??i ????? v?? t??c phong l??m vi???c",
    },
    {
        key: '16',
        proportion: '5%',
        tel: '7',
        point: "100%",
        title: "Tham gia ho???t ?????ng phong tr??o",
    },
];

return(
    <div>
            <h1>????nh gi?? b???n th??n</h1>
            <h5>Ti??u chi?? ch????m ??i????m cho t????t ca?? ca??c ha??ng mu??c ??a??nh gia??: 
                (1). &#60; 5: Ke??m (2). T??? &#62; 5 ??????n &#60; = 7: Trung bi??nh (3). T??? &#62; 7 ??????n &#60; = 9: T????t (4). &#62; 9: Xu????t s????c
            </h5>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <Button className="ButtonForm" onClick={onButtonClick} >Tho??t</Button>
        </div>
    );
};

export default AdminBCCT ;
