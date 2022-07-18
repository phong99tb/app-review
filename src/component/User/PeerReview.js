import { Table, Button, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PeerReview = () => {

    const dispatch = useDispatch()
    const info = useSelector((state) => state.info)
    // const iduser = useSelector((state) => state.id)
    const iduser = 1
    const DGDongNghiep = info[iduser].DgDongNghiep

    const { TextArea } = Input;
    const [totalState,setTotalState] = useState([])
    const [ThaidoState,setThaidoState] = useState([])
    const [PhoihopState,setPhoihopState] = useState([])
    const [AreaState,setAreaState] = useState([])

    ThaidoState.length=AreaState.length=PhoihopState.length=totalState.length=DGDongNghiep.length;


    const onChangeThaido = (e,index) => {
        ThaidoState.splice(index,1,Number(e.target.value))
        info[iduser].DgDongNghiep[index].Thaido = ThaidoState[index]
        totalState[index] = (ThaidoState[index] + PhoihopState[index])/2
        info[iduser].DgDongNghiep[index].total = totalState[index]
        console.log(ThaidoState[index])
    }
    const onChangePhoihop = (e,index) => {
        PhoihopState.splice(index,1,Number(e.target.value))
        info[iduser].DgDongNghiep[index].Phoihop=PhoihopState[index]
        totalState[index] = (ThaidoState[index] + PhoihopState[index])/2
        info[iduser].DgDongNghiep[index].total = totalState[index]
    }
    const onClickButton = () => {
        setThaidoState(ThaidoState)
        setPhoihopState(PhoihopState)
        setAreaState(AreaState)
        console.log(totalState)
        dispatch(info(info))
    }

    useEffect(() => {
        setTotalState(totalState)
    },[totalState]);
    
    const onAreaChange = (e,index) => {
        AreaState.splice(index,1,e.target.value)
        info[iduser].DgDongNghiep[index].Gopy = AreaState[index]
    }

    const columns = [
        
    {
        title: '',
        colSpan: 2,
        dataIndex: 'stt',
    },
    {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'fullname',
        render: (text, row, index) => <p >{text}</p>,
    },
    {
        title: 'Tổng điểm',
        dataIndex: 'total',
        render: (text, record,index) => <p>{text}</p>,
    },
    {
        title: 'Thái độ làm việc',
        render: (text, record,index) => <Input bordered={false} value={ThaidoState[index]} type={"number"} onWheel={(e) => e.target.blur()} placeholder="Nhập số" onChange={(e) => onChangeThaido(e,index)} ></Input>,
    },
    {
        title: 'Phối hợp teamwork',
        render: (text, record,index) => <Input bordered={false} value={PhoihopState[index]} type={"number"} onWheel={(e) => e.target.blur()} placeholder="Nhập số" onChange={(e) => onChangePhoihop(e,index)} ></Input>,
    },
    {
        title: 'Góp ý cho đồng nghiệp (điểm mạnh, điểm yếu)',
        dataIndex: 'name',
        render: (text, record,index) => <TextArea bordered={false} value={AreaState[index]} onChange={(e) => onAreaChange(e,index)} ></TextArea>,
    },
    ];

    const data = info[iduser].DgDongNghiep.map(
        (e,index) => ({
            stt: index+1,
            nameDN: info[iduser].DgDongNghiep[index].nameDN,
            fullname: info[iduser].DgDongNghiep[index].fullname,
            total: info[iduser].DgDongNghiep[index].total,
            Thaido: info[iduser].DgDongNghiep[index].Thaido,
            Phoihop: info[iduser].DgDongNghiep[index].Phoihop,
            Gopy: info[iduser].DgDongNghiep[index].Gopy,
        })
    )


    return(
        <div>
            <h1>Đánh giá đồng nghiệp</h1>
            <h5>Tiêu chí chấm điểm cho tất cả các hạng mục đánh giá: 
                (1). &#60; 5: Kém (2). Từ &#62; 5 đến &#60; = 7: Trung bình (3). Từ &#62; 7 đến &#60; = 9: Tốt (4). &#62; 9: Xuất sắc
            </h5>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <Button className="ButtonForm" onClick={onClickButton} >Lưu đánh giá</Button>
        </div>
    );
};

export default PeerReview ;

