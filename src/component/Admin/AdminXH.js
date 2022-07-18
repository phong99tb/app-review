import { Table } from 'antd';


const Ratings = () => {
    const columns = [
      {
          title: 'Hạng',
          dataIndex: 'ratings',
      },
      {
          title: 'Tên',
          dataIndex: 'name',
      },
      {
          title: 'Điểm',
          dataIndex: 'point',
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        ratings: 1,
        point: '9',
      },
      {
        key: '2',
        name: 'Jim Green',
        ratings: 2,
        point: '7',
      },
      {
        key: '3',
        name: 'Joe Black',
        ratings: 3,
        point: '5',
      },
      {
        key: '4',
        name: 'John Brown',
        ratings:4,
        point: '9',
      },
      {
        key: '5',
        name: 'Jim Green',
        ratings:5,
        point: '7',
      },
      {
        key: '6',
        name: 'Joe Black',
        ratings:6,
        point: '5',
      },
      {
        key: '7',
        name: 'John Brown',
        ratings:7,
        point: '9',
      },
      {
        key: '8',
        name: 'Jim Green',
        ratings:8,
        point: '7',
      },
      {
        key: '9',
        name: 'Joe Black',
        ratings:9,
        point: '5',
      },
      {
        key: '10',
        name: 'John Brown',
        ratings: 10,
        point: '9',
      },
    ];

    return (
        <div>
            <h1>Bảng xếp hạng</h1>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} bordered />
        </div>
    );
};

export default Ratings ;
