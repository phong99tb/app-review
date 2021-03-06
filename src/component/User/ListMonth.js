import { Table, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { DatePicker } from 'antd';
import { useNavigate } from "react-router-dom";
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';

HighchartsMore(Highcharts)

const ListMonth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const info = useSelector((state) => state.info)
    const danhgia = useSelector((state) => state.danhgia)
    // const iduser = useSelector((state) => state.id)
    const iduser = 1

    const sharedOnCell = (_, index) => {
        if (index === 4  ) {
            return { colSpan: 1 };
        }
    };
    const sharedOnGroup = (_, index) => {
        if (index === 0 || index === 3 || index === 8  ) {
            return { colSpan: 2 };
        }
    };
    const sharedOn = (_, index) => {
        if (index === 0 || index === 3 || index === 8 ) {
            return { colSpan: 0 };
        }
    };
    
    const [idThang,setIdThang] = useState(0)
    const [changeDG,setChangeDG] = useState(danhgia[0])
    let thang = []

    const onChange = (date, dateString) => {
        thang = danhgia.filter((e) => {
            return dateString === e.thang
        });
        console.log("--ngay--",thang[0]);
        console.log("--index--",danhgia.indexOf(thang[0]));
        setIdThang(danhgia.indexOf(thang[0]));
    };  
    
    useEffect(() => {
        setChangeDG(danhgia[idThang])
    }, [idThang]);

    const RenderArea = (text,record,index) => {
        if (index > 7 ) {
            return (<p></p>)
        }
        else {
            return (<div style={{textAlign:"left"}} >{changeDG.lietke[index]}</div>)
        }
    };
    const RenderTitle = (text,record,index) => {
        if (index === 0 || index === 3 || index === 8 ) {
            return (<p style={{textAlign:"center", fontWeight:"600"}} >{text}</p>)
        }
        else {
            return (<p style={{textAlign:"left"}} >{text}</p>)
        }
    };
    const RenderStt = (text,record,index) => {
        if (index === 0 || index === 3 || index === 8 ) {
            return (<p style={{textAlign:"center", fontWeight:"600"}} >{text}</p>)
        }
        else {
            return (<p style={{textAlign:"center"}} >{text}</p>)
        }
    };
    const RenderTytrong = (text,record,index) => {
        if (index === 0 || index === 3 || index === 8 ) {
            return (<p style={{textAlign:"center", fontWeight:"600"}} >{text}</p>)
        }
        else {
            return (<p style={{textAlign:"center"}} >{text}</p>)
        }
    };
    const RenderQuanly = (text,record,index) => {
        if (index === 0 || index === 3 || index === 8 ) {
            return (<p style={{textAlign:"center", fontWeight:"600"}} >{changeDG.quanly[index]}</p>)
        }
        else {
            return (<p style={{textAlign:"center"}} >{changeDG.quanly[index]}</p>)
        }
    };
    const sharedOnRender = (text,record,index) => {
        if (index === 0 ) {
            return (<p style={{fontWeight:"600"}} >{changeDG.canhan[index]}</p>)
        }else if (index === 3) {
            return (<p style={{fontWeight:"600"}} >{changeDG.canhan[index]}</p>)
        } else if (index === 8) {
            return (<p style={{fontWeight:"600"}} >{changeDG.canhan[index]}</p>)
        } 
        else {
            return (<p>{changeDG.canhan[index]}</p>)
        }
    };

    const columns = [
        {
            title: '',
            colSpan: 2,
            dataIndex: 'tel',
            render: RenderStt,
            onCell: sharedOnCell,
        },
        {
            title: 'point',
            colSpan: 0,
            dataIndex: 'title',
            render: RenderTitle,
            onCell: sharedOnGroup,
        },
        {
            title: 'Li???t k??',
            dataIndex: changeDG,
            render: RenderArea,
            onCell: sharedOn,
        },
        {
            title: 'T??? tr???ng',
            dataIndex: 'proportion',
            render: RenderTytrong,
            onCell: sharedOnCell,
        },
        {
            title: 'C?? nh??n t??? ????nh gi??',
            dataIndex: changeDG,
            render: sharedOnRender,
            // render: (text,record,index) => <p > {changeDG.canhan[index]}</p>,
            onCell: sharedOnCell,
        },
        {
            title: 'Qu???n l?? tr???c ti???p ????nh gi??',
            dataIndex: changeDG,
            render: RenderQuanly,
            // render: (text,record,index) => <p > {changeDG.quanly[index]}</p>,
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

    const columnsDN = [
        
        {
            colSpan: 2,
            dataIndex: 'danhgia',
            render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
            onCell: sharedOnCell,
        },
    ];

    const dataDN = [
        {
            key: '1',
            danhgia: "L??m vi???c c??ng ???n, nh??ng c?? 1 s??? th??? c???n c???i thi???n v??? k?? n??ng m???m",
        },
        {
            key: '1',
            danhgia: "L??m vi???c ch??a ???n l???m, c???n ph???i h???c h???i v??? c??ch l??m vi???c l??m sao cho chuy??n nghi???p h??n",
        },
        {
            key: '1',
            danhgia: "C???n r??n luy???n th??m v??? k??? n??ng",
        },
        {
            key: '1',
            danhgia: "H???ng nhi???u ki???n th???c, c???n ph???i t??? h???c nhi???u h??n",
        },
        {
            key: '1',
            danhgia: "Giao ti???p t???t nh??ng k??? n??ng v???n c??n h???n ch???",
        },
        {
            key: '1',
            danhgia: "L??m vi???c ch??a ???n l???m, c???n ph???i h???c h???i v??? c??ch l??m vi???c l??m sao cho chuy??n nghi???p h??n",
        },
        {
            key: '1',
            danhgia: "L??m vi???c ch??a ???n l???m, c???n ph???i h???c h???i v??? c??ch l??m vi???c l??m sao cho chuy??n nghi???p h??n",
        },
    ];

    const options = {
        chart: {
            polar: true,
            type: 'line'
        },
    
        accessibility: {
            description: '????nh gi?? hi???u su???t c??ng vi???c'
        },
    
        title: {
            text: '',
            x: -80
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['N??ng l???c & k???t qu??? c??ng vi???c', 'Th??i ????? l??m vi???c & Teamwork', '?????ng nghi???p ????nh gi??', 'Bonus'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
        },
        series: [{
                showInLegend: false,
            name: '??i???m s???',
            data: [4, 4, 4, 3],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
      };

      const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current > moment().endOf('day');
      };

    
    return(
        <div>
            <DatePicker style={{marginBottom:25 }} onChange={onChange} picker="month" disabledDate={disabledDate} />
            <p style={{fontSize:"27px", fontWeight:500}} >T???ng ??i???m:  <span style={{color:"red"}} >3.53 / 4 - T???t</span></p>
            <div style={{display:"flex", justifyContent:"space-between", padding:10, backgroundColor:"white"}} >
                <div style={{width:"49.5%"}} >
                <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
                <div style={{width:"49.5%"}} >
                    <h1 style={{margin:"0px 0 15px"}}>????nh gi?? c???a ?????ng nghi???p</h1>
                    <Table showHeader={false} columns={columnsDN} dataSource={dataDN} pagination={false} bordered />
                </div>
            </div>
            <p style={{fontSize:"15px", fontWeight:500, marginTop:40}} >????nh gi?? chung</p>
            <p style={{border:"1px solid #fff", backgroundColor:"white", padding:"10px 30px", textAlign:"justify", margin:"20px 0 30px"}} > - Tinh th???n ?????ng ?????i cao, s???n s??ng h???p t??c v???i c??c th??nh vi??n trong nh??m ????? ho??n th??nh c??ng vi???c 
                <br/>- R???t gi???i trong vi???c khuy???n kh??ch c??c th??nh vi??n kh??c th???c hi???n c??ng vi???c b???ng n??? l???c t???t nh???t c???a h??? 
                <br/>- Kh??? n??ng x??? l?? ??p l???c t???t 
                <br/>- S???n s??ng thay ?????i ????? ph?? h???p v???i phong c??ch l??m vi???c c???a to??n team
            </p>
            <h1 style={{margin:"30px 0 10px"}} >????nh gi?? b???n th??n</h1>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
        </div>
    );
};

export default ListMonth ;
