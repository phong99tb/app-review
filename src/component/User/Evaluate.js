import React, {useState, useEffect} from 'react'
import { Button, Select, Table, message, Form } from "antd";
import {dataReviewDefault, point} from "../../contants/review";
import {setDNQL, setEvaluate} from "../../api";
const { Option } = Select;

const Evaluate = () => {
    const [isUserReview, setIsUserReview] = useState(true)
    const [listUserOfLeader, setListUserOfLeader] = useState(false)
    const [userSelect, setUserSelect] = useState('')
    const [idSelect, setIdSelect] = useState('')
    const [data, setData] = useState([
        {
            "configId":1,
            "pointManager":0
        },{
            "configId":2,
            "pointManager":0
        },{
            "configId":3,
            "pointManager":0
        },{
            "configId":4,
            "pointManager":0
        },{
            "configId":5,
            "pointManager":0
        },{
            "configId":6,
            "pointManager":0
        },{
            "configId":7,
            "pointManager":0
        },{
            "configId":8,
            "pointManager":0
        },{
            "configId":9,
            "pointManager":0
        },{
            "configId":10,
            "pointManager":0
        },{
            "configId":11,
            "pointManager":0
        },{
            "configId":12,
            "pointManager":0
        },{
            "configId":13,
            "pointManager":0
        },{
            "configId":14,
            "pointManager":0
        },{
            "configId":15,
            "pointManager":0
        },{
            "configId":16,
            "pointManager":0
        }
    ])
    
    const [dataReview, setDataReview] = useState(dataReviewDefault)
    let token = JSON.parse(window.localStorage.getItem('token'));

    const columns = [
        {
            title: '',
            dataIndex: 'stt',
            colSpan: 2,
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
            title: '',
            dataIndex: 'title' ,
            render: (text,record,index) => {
                if (index === 0 || index === 3 || index === 8 ) {
                    return (
                        <p style={{textAlign:"center", fontWeight:"600"}} >{text}</p>
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
            dataIndex: 'description',
            render: (text, record, index) => <p key={index} style={{fontWeight: 600}}>{record?.description}</p>,
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
            dataIndex: 'pointUser',
            render: (text, record, index) => <p key={index} style={{fontWeight: 600}}>{record?.pointUser}</p>
        },
        {
            title: 'Qu???n l?? tr???c ti???p ????nh gi??',
            dataIndex: data,
            render: (text, record, index) => {
                if (index === 0 ) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{data[0].pointManager}</p>) //Math.round({data[0].pointManager} * 100) / 100
                } else if (index === 3) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{data[3].pointManager}</p>)
                } else if (index === 8) {
                    return (<p style={{textAlign:"center", fontWeight:"600"}} >{data[8].pointManager}</p>)
                } else {
                    return  <Select bordered={false} placeholder={'Ch???n s??? ??i???m'} value={record?.pointManager}  style={{ width: '100%' }} onChange={(value)=> handleChangePoint(value, index)}>
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

    // call API l???y d??? li???u ?????ng nghi???p
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await setDNQL(token)
                if (result?.status === 200) {
                    let listUser = result?.data.map((item) => {
                        return {
                            label: item?.last_name + ' ' + item?.first_name,
                            value: item?.user_id
                        }
                    })
                    setListUserOfLeader(listUser)
                }
            } catch (err) {
                throw err
            }
        };
        fetchData();
    },[]);

    // X??t gi?? tr??? m???c ?????nh c???a select v?? idGroup
    useEffect(() => {
       setUserSelect(listUserOfLeader?.[0])
       setIdSelect(listUserOfLeader?.[0]?.value)
    },[listUserOfLeader]);

    const handleProvinceChange = (value) => {
        setUserSelect(value)
        setIdSelect(value)
    };


    const handleChangePoint = (value, index) => {

        console.log("----value----", value)
        let _dataReview = [...data]
        _dataReview[index].pointManager = Number(value)
        _dataReview[0].pointManager = (Math.round((_dataReview[1].pointManager*0.5 + _dataReview[2].pointManager*0.5 ) * 100) / 100)
        _dataReview[3].pointManager = (Math.round((_dataReview[4].pointManager*0.3 + _dataReview[5].pointManager*0.3 + _dataReview[6].pointManager*0.2 + _dataReview[7].pointManager*0.2 ) * 100) / 100)
        _dataReview[8].pointManager = (Math.round((_dataReview[9].pointManager*0.15 + _dataReview[10].pointManager*0.15 + _dataReview[11].pointManager*0.15 + _dataReview[12].pointManager*0.15 + _dataReview[13].pointManager*0.2 + _dataReview[14].pointManager*0.15 + _dataReview[15].pointManager*0.05 )* 100) / 100)
        setData(_dataReview)
        console.log("--data--",data);
    }

    const saveReviewEvaluate = async() => {
        try {
            const results = await setEvaluate(token, data, idSelect ) 
            if (results.message === "Success") {
                message.success("???? l??u k???t qu??? ????nh gi??")
            }
        } catch (err) {
            message.error(err?.response?.data?.message)
            throw err
        }
    }

    if(isUserReview){
        return(
            <div>
                <h1>T??n c???a ng?????i c???n ????nh gi?? </h1>
                <Select value={userSelect} style={{width: 205,}} onChange={handleProvinceChange} options={listUserOfLeader} />
                <Table style={{marginTop:"30px"}} columns={columns} dataSource={dataReview} pagination={false} bordered />
                <Button type="primary" htmlType="submit" className="ButtonForm" onClick={saveReviewEvaluate} >L??u ????nh gi??</Button>
            </div>
        );
    }
    return(
        <div>
            <h1>T??n c???a ng?????i c???n ????nh gi?? - Th??ng</h1>
            <Select value={userSelect} style={{width: 205,}} onChange={handleProvinceChange} options={listUserOfLeader} />
            <h1 style={{margin: "20px 0", fontSize:"24px"}}>Th??nh vi??n ch??a th???c hi???n ????nh gi??. Y??u c???u qu???n l?? nh???c nh??? ????? th??nh vi??n ????nh gi?? ????ng h???n.</h1>
        </div>
    )
};

export default Evaluate ;

