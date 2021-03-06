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

    const tooltip = ["Trung b??nh c???a kh???i l?????ng v?? ch???t l?????ng","cdf","zxcv","???????c c???ng th??m n???u l??m t???t","zxcv","xzcv","xcv","cbc","L?? ch??? ?????o trong c??ng vi???c"]
    
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
            title: 'Li???t k??',
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
            title: 'T??? tr???ng',
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
            title: 'C?? nh??n t??? ????nh gi??',
            dataIndex: dataSend,
            render: (text, record, index) => {
                if (index === 0 ) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{dataSend.reviewSelf[0].pointSelf}</p>) //Math.round({data[0].pointManager} * 100) / 100
                } else if (index === 3) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{dataSend.reviewSelf[3].pointSelf}</p>)
                } else if (index === 8) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{dataSend.reviewSelf[8].pointSelf}</p>)
                } else {
                    return <Select bordered={false} placeholder={'Ch???n s??? ??i???m'} value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handlePointUser(value, index)}>
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
        title: 'H??? T??n',
        dataIndex: "label",
        render: (text, row, index) => <p style={{textAlign:"left"}} >{text}</p>,
    },
    {
        title: 'T???ng ??i???m',
        dataIndex: 'pointTotal',
        render: (text, record,index) => <p>{text}</p>,
    },
    {
        title: 'Th??i ????? l??m vi???c',
        render: (text, record, index) => {
            return   <Select bordered={false} placeholder={'Ch???n s??? ??i???m'} value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handlePointAttitude(value, index)}>
                {
                    Array.isArray(point) && point.map((item)=> {
                        return  <Option value={item?.value}>{item?.label}</Option>
                    })
                }
            </Select>
        }
    },
    {
        title: 'Ph???i h???p teamwork',
        render: (text, record, index) => {
            return   <Select bordered={false} placeholder={'Ch???n s??? ??i???m'} value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handlePointTeamwork(value, index)}>
                {
                    Array.isArray(point) && point.map((item)=> {
                        return  <Option value={item?.value}>{item?.label}</Option>
                    })
                }
            </Select>
        }
    },
    {
        title: 'G??p ?? cho ?????ng nghi???p (??i???m m???nh, ??i???m y???u)',
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

    // call API ?????ng nghi???p
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

    //T???o data ????nh gi?? ?????ng nghi???p ????? call API
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

    // N??t l??u ????nh gi??
    const onButtonClick = async() => {
        try {
            console.log("--dataSend--",dataSend);
            const results = await saveMyself(token,dataSend)
            if (results?.message === "Success") {
                message.success("???? l??u k???t qu??? ????nh gi??")
            }
        } catch (err) {
            message.error(err?.response?.data?.message)
            throw err
        }
    } 

    // Li???t k?? c???a ph???n User
    const handleUser = (value,index) => {
        let dataAll = {...dataSend}
        dataAll.reviewSelf[index].description = value.target.value
        setDataSend(dataAll)
    }

    // ??i???m c???a user t??? ????nh gi??
    const handlePointUser = (value, index) => {
        let dataAll = {...dataSend}
        dataAll.reviewSelf[index].pointSelf = Number(value)
        dataAll.reviewSelf[0].pointSelf = (Math.round((dataAll.reviewSelf[1].pointSelf*0.5 + dataAll.reviewSelf[2].pointSelf*0.5 ) * 100) / 100)
        dataAll.reviewSelf[3].pointSelf = (Math.round((dataAll.reviewSelf[4].pointSelf*0.3 + dataAll.reviewSelf[5].pointSelf*0.3 + dataAll.reviewSelf[6].pointSelf*0.2 + dataAll.reviewSelf[7].pointSelf*0.2 ) * 100) / 100)
        dataAll.reviewSelf[8].pointSelf = (Math.round((dataAll.reviewSelf[9].pointSelf*0.15 + dataAll.reviewSelf[10].pointSelf*0.15 + dataAll.reviewSelf[11].pointSelf*0.15 + dataAll.reviewSelf[12].pointSelf*0.15 + dataAll.reviewSelf[13].pointSelf*0.2 + dataAll.reviewSelf[14].pointSelf*0.15 + dataAll.reviewSelf[15].pointSelf*0.05 )* 100) / 100)
        setDataSend(dataAll)
    }

    // ??i???m th??i ????? ?????ng nghi??p
    const handlePointAttitude = (value, index) => {
        let dataAttitude = [...listUserOfUser]
        dataAttitude[index].pointAttitude = Number(value)
        dataAttitude[index].pointTotal = dataAttitude[index].pointAttitude * 0.5 + dataAttitude[index].pointTeamwork * 0.5
        setListUserOfUser(dataAttitude)
    }

    // ??i???m ph???i h???p ?????ng nghi???p
    const handlePointTeamwork = (value, index) => {
        let dataTeamwork = [...listUserOfUser]
        dataTeamwork[index].pointTeamwork = Number(value)
        dataTeamwork[index].pointTotal = dataTeamwork[index].pointAttitude * 0.5 + dataTeamwork[index].pointTeamwork * 0.5
        setListUserOfUser(dataTeamwork)
    }

    // ????nh gi?? ?????ng nghi???p
    const handleFeedback = (value, index) => {
        let dataFeedback = [...listUserOfUser]
        dataFeedback[index].feedback = value.target.value
        setListUserOfUser(dataFeedback)
        console.log(dataFeedback);
    }

    // ????nh gi?? chung
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
                        <h1 style={{lineHeight:"32px"}}>????nh gi?? b???n th??n th??ng {month} </h1>
                    </div>
                    <Table columns={columns} dataSource={dataReviewDefault} pagination={false} bordered />
                </div>
                <div style={{paddingTop:50}}>
                    <h1>????nh gi?? chung</h1>
                    <TextArea onChange={(value) => handleAll(value)} ></TextArea>
                </div>
                <div style={{paddingTop:50}}>
                    <h1>????nh gi?? ?????ng nghi???p</h1>
                    <Table columns={columnDN} dataSource={listUserOfUser} pagination={false} bordered />
                    <Button type="primary" htmlType="submit" className="ButtonForm" onClick={onButtonClick} >L??u ????nh gi??</Button>
                </div>
            </div>
        );
        return (
            <div>
                <span style={{fontSize:30, margin:"0 auto"}}>Hi???n t???i ch??a ?????n th???i gian ????nh gi?? th??ng {month}. M???i b???n quay l???i sau ! </span>
            </div>
        );
};

export default SelfAppraisal ;