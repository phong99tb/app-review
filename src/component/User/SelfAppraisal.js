import { Table, Button, Tooltip, Select, message, Form } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { saveMyself, setDSDongNghiep } from "../../api";
import axios from "axios";
import {dataReviewDefault, point} from "../../contants/review";
import TextArea from "antd/lib/input/TextArea";
const { Option } = Select;

const SelfAppraisal = () => {
    const [month, setMonth] = useState(moment().get("month"))
    const [date, setDate] = useState(moment().date())
    const [listUserOfUser, setListUserOfUser] = useState()
    const [dataSend, setDataSend] = useState({
        "reviewSelf":[
        {
            "configId":1,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":2,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":3,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":4,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":5,
            "description":"ABC",
            "pointSelf": 0   
        }, {
            "configId":6,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":7,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":8,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":9,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":10,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":11,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":12,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":13,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":14,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":15,
            "description":"ABC",
            "pointSelf": 0
          
        }, {
            "configId":16,
            "description":"ABC",
            "pointSelf": 0
          
        }
    ],
        "reviewPartner":[
            {
                "partnerId":56,
                "pointAttitude":2,
                "pointTeamwork":3,
                "pointTotal":3,
                "feedback":"hfkdshfkdshf"
            }
        ],
        "generalAssessment":{
            "content":"fdskfhsdkfhkdsfhdskfh"
        }
    })

    let token = JSON.parse(window.localStorage.getItem('token'));
    let info = JSON.parse(window.localStorage.getItem('info'));       

    const tooltip = ["Trung bình của khối lượng và chất lượng","cdf","zxcv","Được cộng thêm nếu làm tốt","zxcv","xzcv","xcv","cbc","Là chủ đạo trong công việc"]
    
    const columns = [    
        {
            title: '',
            colSpan: 2,
            dataIndex: 'stt',
            render: (text,record,index) => {
                if (index === 0 || index === 3 || index === 8 ) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{text}</p>)
                }
                else {
                    return (<p style={{textAlign:"center"}} >{text}</p>)
                }
            },
        },
        {
            title: 'title',
            dataIndex: 'title',
            render: (text,record,index) => {
                if (index === 0 || index === 3 || index === 8 ) {
                    return (
                        <Tooltip title={tooltip[index]} >
                            <p style={{textAlign:"center", fontWeight:"600"}} >{text}</p>
                        </Tooltip>
                    )
                }
                else {
                    return (<p style={{textAlign:"left"}} >{text}</p>)
                }
            },
            colSpan: 0,
            onCell: (record,index) => {
                if (index === 0 || index === 3 || index === 8  ) {
                    return { colSpan: 2 };
                }
            },
        },
        {
            title: 'Liệt kê',
            render: (text,record,index) => {
                if (index > 7 ) {
                    return (<p style={{height:42}}> </p>)
                }
                else {
                    return (
                        <TextArea onChange={(value) => handleUser(value,index)}  bordered={false} style={{textAlign:"left"}} ></TextArea>
                    )
                }
            },
            onCell: (record, index) => {
                if (index === 0 || index === 3 || index === 8 ) {
                    return { colSpan: 0 };
                }
            },
        },
        {
            title: 'Tỷ trọng',
            dataIndex: 'proportion',
            render: (text,record,index) => {
                if (index === 0 || index === 3 || index === 8 ) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{text}</p>)
                }
                else {
                    return (<p style={{textAlign:"center"}} >{text}</p>)
                }
            },
        },
        {
            title: 'Cá nhân tự đánh giá',
            dataIndex: dataSend,
            render: (text, record, index) => {
                if (index === 0 ) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{dataSend.reviewSelf[0].pointSelf}</p>) //Math.round({data[0].pointManager} * 100) / 100
                } else if (index === 3) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{dataSend.reviewSelf[3].pointSelf}</p>)
                } else if (index === 8) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{dataSend.reviewSelf[8].pointSelf}</p>)
                } else {
                    return <Select bordered={false} placeholder={'Chọn số điểm'} value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handlePointUser(value, index)}>
                        {
                            Array.isArray(point) && point.map((item)=> {
                                return  <Option value={item?.value}>{item?.label}</Option>
                        })
                        }
                    </Select>
                }
            }
        },
    ];

    const columnDN = [  
    {
        title: 'STT',
        render: (text, row, index) => <p >{index+1}</p>,
    },
    {
        title: 'Họ Tên',
        dataIndex: "label",
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
    },
    {
        title: 'Tổng điểm',
        dataIndex: 'pointTotal',
        render: (text, record,index) => <p>{text}</p>,
    },
    {
        title: 'Thái độ làm việc',
        render: (text, record, index) => {
            return   <Select bordered={false} placeholder={'Chọn số điểm'} value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handlePointAttitude(value, index)}>
                {
                    Array.isArray(point) && point.map((item)=> {
                        return  <Option value={item?.value}>{item?.label}</Option>
                    })
                }
            </Select>
        }
    },
    {
        title: 'Phối hợp teamwork',
        render: (text, record, index) => {
            return   <Select bordered={false} placeholder={'Chọn số điểm'} value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handlePointTeamwork(value, index)}>
                {
                    Array.isArray(point) && point.map((item)=> {
                        return  <Option value={item?.value}>{item?.label}</Option>
                    })
                }
            </Select>
        }
    },
    {
        title: 'Góp ý cho đồng nghiệp (điểm mạnh, điểm yếu)',
        dataIndex: 'name',
        render: (text, record, index) => {
            return   <TextArea bordered={false}  value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handleFeedback(value, index)}>
                {
                    Array.isArray(point) && point.map((item)=> {
                        return  <Option value={item?.value}>{item?.label}</Option>
                    })
                }
            </TextArea>
        }
    },
    ];

    // call API đồng nghiệp
    useEffect(() => {
        const fetchData = async () => {
            if(date>5) {
                setMonth(month+1)
            }
            try {
                const result = await setDSDongNghiep(token)
                if (result?.status === 200) {
                    let listUser = result?.data.map((item) => {
                        return {
                            partnerId: item?.user_id,
                            pointAttitude:0,
                            pointTeamwork:0,
                            pointTotal:0,
                            feedback:"abc",
                            label: item?.last_name + ' ' + item?.first_name,
                        }
                    })
                    setListUserOfUser(listUser)
                }
            } catch (err) {
                throw err
            }
        };
        fetchData();
    },[]);

    //Tạo data đánh giá đồng nghiệp để call API
    useEffect(() => {
        let dataAll = {...dataSend}
        console.log(dataAll.reviewPartner);
        dataAll.reviewPartner = listUserOfUser?.map((item) => {
            return {
                partnerId: item?.partnerId,
                pointAttitude:item?.pointAttitude,
                pointTeamwork:item?.pointTeamwork,
                pointTotal:item?.pointTotal,
                feedback:item?.feedback,
            }
        })
        setDataSend(dataAll)
    },[listUserOfUser]);

    // Nút lưu đánh giá
    const onButtonClick = async() => {
        try {
            console.log("--dataSend--",dataSend);
            const results = await saveMyself(token,dataSend)
            if (results?.message === "Success") {
                message.success("Đã lưu kết quả đánh giá")
            }
        } catch (err) {
            message.error(err?.response?.data?.message)
            throw err
        }
    } 

    // Liệt kê của phần User
    const handleUser = (value,index) => {
        let dataAll = {...dataSend}
        dataAll.reviewSelf[index].description = value.target.value
        setDataSend(dataAll)
    }

    // Điểm của user tự đánh giá
    const handlePointUser = (value, index) => {
        let dataAll = {...dataSend}
        dataAll.reviewSelf[index].pointSelf = Number(value)
        dataAll.reviewSelf[0].pointSelf = (Math.round((dataAll.reviewSelf[1].pointSelf*0.5 + dataAll.reviewSelf[2].pointSelf*0.5 ) * 100) / 100)
        dataAll.reviewSelf[3].pointSelf = (Math.round((dataAll.reviewSelf[4].pointSelf*0.3 + dataAll.reviewSelf[5].pointSelf*0.3 + dataAll.reviewSelf[6].pointSelf*0.2 + dataAll.reviewSelf[7].pointSelf*0.2 ) * 100) / 100)
        dataAll.reviewSelf[8].pointSelf = (Math.round((dataAll.reviewSelf[9].pointSelf*0.15 + dataAll.reviewSelf[10].pointSelf*0.15 + dataAll.reviewSelf[11].pointSelf*0.15 + dataAll.reviewSelf[12].pointSelf*0.15 + dataAll.reviewSelf[13].pointSelf*0.2 + dataAll.reviewSelf[14].pointSelf*0.15 + dataAll.reviewSelf[15].pointSelf*0.05 )* 100) / 100)
        setDataSend(dataAll)
    }

    // Điểm thái độ đồng nghiêp
    const handlePointAttitude = (value, index) => {
        let dataAttitude = [...listUserOfUser]
        dataAttitude[index].pointAttitude = Number(value)
        dataAttitude[index].pointTotal = dataAttitude[index].pointAttitude * 0.5 + dataAttitude[index].pointTeamwork * 0.5
        setListUserOfUser(dataAttitude)
    }

    // Điểm phối hợp đồng nghiệp
    const handlePointTeamwork = (value, index) => {
        let dataTeamwork = [...listUserOfUser]
        dataTeamwork[index].pointTeamwork = Number(value)
        dataTeamwork[index].pointTotal = dataTeamwork[index].pointAttitude * 0.5 + dataTeamwork[index].pointTeamwork * 0.5
        setListUserOfUser(dataTeamwork)
    }

    // đánh giá đồng nghiệp
    const handleFeedback = (value, index) => {
        let dataFeedback = [...listUserOfUser]
        dataFeedback[index].feedback = value.target.value
        setListUserOfUser(dataFeedback)
        console.log(dataFeedback);
    }

    // đánh giá chung
    const handleAll = (value) => {
        let dataAll = {...dataSend}
        dataAll.generalAssessment.content = value.target.value
        setDataSend(dataAll)
    }

    if (date === 3 || date === 4 || date === 7) 
        return(
            <div>
                <div>
                    <div style={{display:"flex"}}>
                        <h1 style={{lineHeight:"32px"}}>Đánh giá bản thân tháng {month} </h1>
                    </div>
                    <Table columns={columns} dataSource={dataReviewDefault} pagination={false} bordered />
                </div>
                <div style={{paddingTop:50}}>
                    <h1>Đánh giá chung</h1>
                    <TextArea onChange={(value) => handleAll(value)} ></TextArea>
                </div>
                <div style={{paddingTop:50}}>
                    <h1>Đánh giá đồng nghiệp</h1>
                    <Table columns={columnDN} dataSource={listUserOfUser} pagination={false} bordered />
                    <Button type="primary" htmlType="submit" className="ButtonForm" onClick={onButtonClick} >Lưu đánh giá</Button>
                </div>
            </div>
        );
        return (
            <div>
                <span style={{fontSize:30, margin:"0 auto"}}>Hiện tại chưa đến thời gian đánh giá tháng {month}. Mời bạn quay lại sau ! </span>
            </div>
        );
};

export default SelfAppraisal ;