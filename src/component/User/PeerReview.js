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
        title: 'T???ng ??i???m',
        dataIndex: 'total',
        render: (text, record,index) => <p>{text}</p>,
    },
    {
        title: 'Th??i ????? l??m vi???c',
        render: (text, record,index) => <Input bordered={false} value={ThaidoState[index]} type={"number"} onWheel={(e) => e.target.blur()} placeholder="Nh???p s???" onChange={(e) => onChangeThaido(e,index)} ></Input>,
    },
    {
        title: 'Ph???i h???p teamwork',
        render: (text, record,index) => <Input bordered={false} value={PhoihopState[index]} type={"number"} onWheel={(e) => e.target.blur()} placeholder="Nh???p s???" onChange={(e) => onChangePhoihop(e,index)} ></Input>,
    },
    {
        title: 'G??p ?? cho ?????ng nghi???p (??i???m m???nh, ??i???m y???u)',
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
            <h1>????nh gi?? ?????ng nghi???p</h1>
            <h5>Ti??u chi?? ch????m ??i????m cho t????t ca?? ca??c ha??ng mu??c ??a??nh gia??: 
                (1). &#60; 5: Ke??m (2). T??? &#62; 5 ??????n &#60; = 7: Trung bi??nh (3). T??? &#62; 7 ??????n &#60; = 9: T????t (4). &#62; 9: Xu????t s????c
            </h5>
            <Table columns={columns} dataSource={data} pagination={false} bordered />
            <Button className="ButtonForm" onClick={onClickButton} >L??u ????nh gi??</Button>
        </div>
    );
};

export default PeerReview ;

