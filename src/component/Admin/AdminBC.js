import { Table, Space, Button } from 'antd';
import { DatePicker } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

const AdminBC = () => {
    const info = useSelector((state) => state.info)
    const iduser = useSelector((state) => state.id)
    const user = useSelector((state) => state.baocao)

    const baocao = user.map(
        (e,index) => ({
            stt:index + 1,
            fullname: user[index].name,
            CaNhan1: user[index].nangluc[0].canhan,
            QuanLy1: user[index].nangluc[0].quanly,
            Total1: user[index].nangluc[0].tong,
            CaNhan2: user[index].bonus[0].canhan,
            QuanLy2: user[index].bonus[0].quanly,
            Total2: user[index].bonus[0].tong,
            CaNhan3: user[index].thaido[0].canhan,
            QuanLy3: user[index].thaido[0].quanly,
            DongNghiep: user[index].thaido[0].dongnghiep,
            Total3: user[index].thaido[0].tong,
            Total4: user[index].tong,
        })
    )

    function PickerWithType({ type, onChange }) {
        if (type === 'date') return <DatePicker onChange={onChange} />;
        return <DatePicker picker={type} onChange={onChange} />;
    }
    const [type, setType] = useState('month');

    const onClickDital = (index) => {
        console.log(user.indexOf(user[index]));
    }

    return(
        <div>
            <Space style={{textAlign:'left' }} >
                <PickerWithType type={type} onChange={value => console.log(value)} />
            </Space>
            <h1>Báo cáo tháng </h1>
            <Table dataSource={baocao} bordered >
                <Column title="Stt" dataIndex="stt" key="stt" />
                <Column title="Name" dataIndex="fullname" key="fullname" />
                <ColumnGroup title="NĂNG LỰC & KẾT QUẢ CÔNG VIỆC (40%)">
                <Column title="Cá nhân 20%" dataIndex="CaNhan1"  />
                <Column title="Quản lý 80%" dataIndex="QuanLy1" key="lastName" />
                <Column title="Tổng" dataIndex="Total1" key="lastName" />
                </ColumnGroup>
                <ColumnGroup title="BONUS (10%)">
                <Column title="Cá nhân 20%" dataIndex="CaNhan2" key="firstName" />
                <Column title="Quản lý 80%" dataIndex="QuanLy2" key="lastName" />
                <Column title="Tổng" dataIndex="Total2" key="lastName" />
                </ColumnGroup><ColumnGroup title="THÁI ĐỘ LÀM VIỆC & TEAMWORK (60%)">
                <Column title="Cá nhân 10%" dataIndex="CaNhan3" key="firstName" />
                <Column title="Quản lý 50%" dataIndex="QuanLy3" key="lastName" />
                <Column title="Đồng nghiệp 40%" dataIndex="DongNghiep" key="lastName" />
                <Column title="Tổng" dataIndex="Total3" key="lastName" />
                </ColumnGroup>
                <Column title="Kết quả" dataIndex="Total4" key="kết quả" />
                <Column
                title=""
                key="action"
                render={(text, record,index) => (
                    <Button onClick={(e) => onClickDital(index)} >
                        <Link to="/admin/baocao/chitiet">Xem chi tiết</Link>
                    </Button>
                )}
                />
            </Table>
        </div>
    );
};

export default AdminBC ;
