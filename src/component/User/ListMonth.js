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
            title: 'Liệt kê',
            dataIndex: changeDG,
            render: RenderArea,
            onCell: sharedOn,
        },
        {
            title: 'Tỷ trọng',
            dataIndex: 'proportion',
            render: RenderTytrong,
            onCell: sharedOnCell,
        },
        {
            title: 'Cá nhân tự đánh giá',
            dataIndex: changeDG,
            render: sharedOnRender,
            // render: (text,record,index) => <p > {changeDG.canhan[index]}</p>,
            onCell: sharedOnCell,
        },
        {
            title: 'Quản lý trực tiếp đánh giá',
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
            danhgia: "Làm việc cũng ổn, nhưng có 1 số thứ cần cải thiện về ký năng mềm",
        },
        {
            key: '1',
            danhgia: "Làm việc chưa ổn lắm, cần phải học hỏi về cách làm việc làm sao cho chuyên nghiệp hơn",
        },
        {
            key: '1',
            danhgia: "Cần rèn luyện thêm về kỹ năng",
        },
        {
            key: '1',
            danhgia: "Hổng nhiều kiến thức, cần phải tự học nhiều hơn",
        },
        {
            key: '1',
            danhgia: "Giao tiếp tốt nhưng kỹ năng vẫn còn hạn chế",
        },
        {
            key: '1',
            danhgia: "Làm việc chưa ổn lắm, cần phải học hỏi về cách làm việc làm sao cho chuyên nghiệp hơn",
        },
        {
            key: '1',
            danhgia: "Làm việc chưa ổn lắm, cần phải học hỏi về cách làm việc làm sao cho chuyên nghiệp hơn",
        },
    ];

    const options = {
        chart: {
            polar: true,
            type: 'line'
        },
    
        accessibility: {
            description: 'Đánh giá hiệu suất công việc'
        },
    
        title: {
            text: '',
            x: -80
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['Năng lực & kết quả công việc', 'Thái độ làm việc & Teamwork', 'Đồng nghiệp đánh giá', 'Bonus'],
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
            name: 'Điểm số',
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
            <p style={{fontSize:"27px", fontWeight:500}} >Tổng điểm:  <span style={{color:"red"}} >3.53 / 4 - Tốt</span></p>
            <div style={{display:"flex", justifyContent:"space-between", padding:10, backgroundColor:"white"}} >
                <div style={{width:"49.5%"}} >
                <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
                <div style={{width:"49.5%"}} >
                    <h1 style={{margin:"0px 0 15px"}}>Đánh giá của đồng nghiệp</h1>
                    <Table showHeader={false} columns={columnsDN} dataSource={dataDN} pagination={false} bordered />
                </div>
            </div>
            <p style={{fontSize:"15px", fontWeight:500, marginTop:40}} >Đánh giá chung</p>
            <p style={{border:"1px solid #fff", backgroundColor:"white", padding:"10px 30px", textAlign:"justify", margin:"20px 0 30px"}} > - Tinh thần đồng đội cao, sẵn sàng hợp tác với các thành viên trong nhóm để hoàn thành công việc 
                <br/>- Rất giỏi trong việc khuyến khích các thành viên khác thực hiện công việc bằng nỗ lực tốt nhất của họ 
                <br/>- Khả năng xử lý áp lực tốt 
                <br/>- Sẵn sàng thay đổi để phù hợp với phong cách làm việc của toàn team
            </p>
            <h1 style={{margin:"30px 0 10px"}} >Đánh giá bản thân</h1>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
        </div>
    );
};

export default ListMonth ;
