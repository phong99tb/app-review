const initState = {
    Quanlydanhgia: [],
    info:[
        {
            id:1,
            username: "phong",
            password:"789",
            fullname:"Nguyễn Trung Phong",
            vitricv:"Thực tập sinh Tech",
            danhgia:"Nguyễn Thành Đạt",
            chucvu:"Lead team Tech",
            TotalDN: [],
            CaNhanDG: [],
            Lietke: [],
            Quanlydanhgia: [],
            DgDongNghiep: [
                {
                    nameDN:"Nguyễn Trung Phong",
                    fullname: "Nguyễn Thành Đạt",
                    total: [],
                    Thaido: [],
                    Phoihop: [],
                    Gopy: [],
                },
                {
                    nameDN:"Nguyễn Trung Phong",
                    fullname: "Lê Như Hậu",
                    total: [],
                    Thaido: [],
                    Phoihop: [],
                    Gopy: [],
                },
            ],
          },
          {
            id:2,
            username:"dat",
            password:"456",
            fullname:"Nguyễn Thành Đạt",
            vitricv:"Lead team Tech",
            danhgia:"Nguyễn Tùng Linh",
            chucvu:"Giám đốc Tech",
            TotalDN: [],
            CaNhanDG: [],
            Lietke: [],
            Quanlydanhgia: [],
            DgDongNghiep: [
                {
                    nameDN:"Nguyễn Thành Đạt",
                    fullname: "Nguyễn Trung Phong",
                    total: [],
                    Thaido: [],
                    Phoihop: [],
                    Gopy: [],
                },
                {
                    nameDN:"Nguyễn Thành Đạt",
                    fullname: "Lê Như Hậu",
                    total: [],
                    Thaido:[],
                    Phoihop:[],
                    Gopy:[],
                },
            ],
          },
          {
            id:3,
            username:"hau",
            password:"123",
            fullname:"Lê Như Hậu",
            vitricv:"Thực tập sinh Tech",
            danhgia:"Nguyễn Thành Đạt",
            chucvu:"Lead team Tech",
            TotalDN: [],
            CaNhanDG: [],
            Lietke: [],
            Quanlydanhgia: [],
            DgDongNghiep: [
                {
                    nameDN:"Lê Như Hậu",
                    fullname: "Nguyễn Thành Đạt",
                    total: [],
                    Thaido:[],
                    Phoihop:[],
                    Gopy:[],
                },
                {
                    nameDN:"Lê Như Hậu",
                    fullname: "Nguyễn Trung Phong",
                    total: [],
                    Thaido:[],
                    Phoihop:[],
                    Gopy:[],
                },
            ],
          },
        //   {
        //     id:4,
        //     username:"phuc",
        //     password:"123",
        //     fullname:"Nguyễn Anh Phúc",
        //     vitricv:"Thực tập sinh Tech",
        //     danhgia:"Nguyễn Thành Đạt",
        //     chucvu:"Lead team Tech",
        //     Quanlydanhgia: [],
        //   },
        //   {
        //     id:5,
        //     username:"hanh",
        //     password:"123",
        //     fullname:"Phạm Thị Hạnh",
        //     vitricv:"Back end",
        //     danhgia:"Ê Bông",
        //     chucvu:"Lead team BE",
        //     Quanlydanhgia: [],
        //   },
        //   {
        //     id:6,
        //     username:"huong",
        //     password:"123",
        //     fullname:"Nguyễn Thị Hương",
        //     vitricv:"Tester",
        //     danhgia:"Nguyễn Thị Xoan",
        //     chucvu:"Lead team Test",
        //     Quanlydanhgia: [],
        //   }
    ],
    id:[],
    danhgia:[
        {
            thang:'2022-02',
            lietke:[,"Học redux","ổn",,"đá bóng","tối ở lại","áp dụng công nghệ hay","rất sáng tạo",],
            canhan:[7,8,8,9,8,7,8,5,8,9,8,7,5,5,8,9],
            quanly:[6,8,9,8,7,7,7,8,9,8,7,5,5,6,7,8],
        },
        {
            thang:'2022-03',
            lietke:[,"Học redux","ổn",,"đá bóng","tối ở lại","áp dụng công nghệ hay","rất sáng tạo",],
            canhan:[9,9,6,8,7,5,6,5,7,5,6,8,7,5,6,5],
            quanly:[5,7,5,8,5,4,5,6,9,7,8,9,8,7,5,8],
        },
        {
            thang:'2022-04',
            lietke:[,"Học redux","ổn",,"đá bóng","tối ở lại","áp dụng công nghệ hay","rất sáng tạo",],
            canhan:[5.5,5,6,6,8,7,9,5,6,8,4,5,6,8,9,4],
            quanly:[9,8,7,5,8,9,7,8,9,7,6,9,8,4,8,7],
        },
        {
            thang:'2022-05',
            lietke:[,"Học react router","rất tốt",,"chơi bóng","về đúng giờ","công nghệ AI","sáng tạo cũng ổn",],
            canhan:[7,8,5,9,8,6,5,4,8,6,9,8,7,4,5,8],
            quanly:[9,8,7,5,9,8,8,9,5,6,9,8,7,8,9,8],
        }
    ],
    user:[
        {
            stt:'1',
            name: 'Nguyễn Trung Phong',
            email: 'phong99tb@gmail.com',
            date: "10/8/1999",
            chucvu: "User",
            quanly: "Nguyễn Thành Đạt",
        },
        {
            stt:'2',
            name: 'Nguyễn Thành Đạt',
            email: 'thanhdat@gmail.com',
            date: "4/9/1999",
            chucvu: "User",
            quanly: "Nguyễn Thành Đạt",
        },
        {
            stt:'3',
            name: 'Lê Như Hậu',
            email: 'nhuhau@gmail.com',
            date: "9/10/1999",
            chucvu: "Manager",
            quanly: "Nguyễn Tùng Linh",
        },
    ],
    baocao:[
        {
            id:1,
            name:"Nguyễn Trung Phong",
            lietke:[,"Học redux","ổn",,"đá bóng","tối ở lại","áp dụng công nghệ hay","rất sáng tạo",],
            canhan:[5.5,5,6,6,8,7,9,5,6,8,4,5,6,8,9,4],
            quanly:[9,8,7,5,8,9,7,8,9,7,6,9,8,4,8,7],
            nangluc:[{
                canhan:8,
                quanly:9,
                tong:8.8,
            }],
            bonus:[{
                canhan:9,
                quanly:7,
                tong:7.4,
            }],
            thaido:[{
                canhan:7,
                quanly:8,
                dongnghiep:8,
                tong:7.9,
            }],
            tong:9
        },
        {
            id:2,
            name:"Nguyễn Thành Đạt",
            lietke:[,"Học redux","ổn",,"đá bóng","tối ở lại","áp dụng công nghệ hay","rất sáng tạo",],
            canhan:[5.5,5,6,6,8,7,9,5,6,8,4,5,6,8,9,4],
            quanly:[9,8,7,5,8,9,7,8,9,7,6,9,8,4,8,7],
            nangluc:[{
                canhan:6,
                quanly:7,
                tong:9,
            }],
            bonus:[{
                canhan:7,
                quanly:6,
                tong:5.6,
            }],
            thaido:[{
                canhan:7,
                quanly:6,
                dongnghiep:5,
                tong:6.8,
            }],
            tong:6
        },
        {
            id:3,
            name:"Lê Như Hậu",
            lietke:[,"Học redux","ổn bình thường",,"bóng chuyền","tối ở lại","sử dụng call api","sáng tạo",],
            canhan:[5.5,4,6,6,5,9,7,5,8,8,4,5,6,8,9,4],
            quanly:[3,7,6,9,6,10,1,9,7,2,6,4,9,4,7,7],
            nangluc:[{
                canhan:9,
                quanly:6,
                tong:7,
            }],
            bonus:[{
                canhan:8,
                quanly:6,
                tong:6.7,
            }],
            thaido:[{
                canhan:4,
                quanly:3,
                dongnghiep:6,
                tong:7,
            }],
            tong:7
        }
    ],
    config:[
        {
            group:"NĂNG LỰC & KẾT QUẢ CÔNG VIỆC",
            titrong:"40%",
            canhan:"10%",
            quanly:"50%",
            dongnghiep:"40%",
            target:[
                {
                    stt:1,
                    name: "Công việc trong tháng đã hoàn thành (đánh giá theo khối lượng công việc)",
                },
                {
                    stt:2,
                    name: "Chất lượng các công việc đã hoàn thành",
                },
            ]
        },
        {
            group:"BONUS",
            titrong:"10%",
            canhan:"40%",
            quanly:"60%",
            dongnghiep:"0%",
            target:[
                {
                    stt:1,
                    name: "Hỗ trợ ngoài công việc chính",
                },
                {
                    stt:2,
                    name: "Làm thêm ngoài giờ",
                },
                {
                    stt:3,
                    name: "Chia sẻ kiến thức công việc & chuyên môn",
                },
                {
                    stt:4,
                    name: "Công việc đã áp dụng công nghệ hoặc quy trình sáng tạo",
                },
            ]
        },
        {
            group:"THÁI ĐỘ LÀM VIỆC & TEAMWORK",
            titrong:"60%",
            canhan:"10%",
            quanly:"50%",
            dongnghiep:"40%",
            target:[
                {
                    stt:1,
                    name: "Tính chủ động trong công việc",
                },
                {
                    stt:2,
                    name: "Tinh thần làm việc nhóm, thái độ hợp tác trong nội bộ/bên ngoài",
                },
                {
                    stt:3,
                    name: "Thái độ làm việc",
                },
                {
                    stt:4,
                    name: "Tuân thủ nội quy",
                },
                {
                    stt:5,
                    name: "Văn hóa ứng xử trong công ty",
                },
                {
                    stt:6,
                    name: "Thái độ và tác phong làm việc",
                },
                {
                    stt:7,
                    name: "Tham gia hoạt động phong trào",
                },
            ]
        }
    ],
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozMiwiZW1haWwiOiJoYWkudC5sZUB2bnRyaXAudm4iLCJtYW5hZ2VyX2lkIjozMSwibmFtZXMiOiJtYW5hZ2VyIiwiaWF0IjoxNjU2MzgzMTg4LCJleHAiOjE2NTY0Njk1ODh9.k2nhBuvDTGEHH1Jn4oEzWisy-DiR45iV5bBURBipyiA",
    email:"phong@vntrip.vn",
    group:[]
}

const rootReducer = (state = initState,action) => {
    switch (action.type) {
        case "TotalDN" :
            return{
                ...state,
                TotalDN:action.payload
            }
        case "Info" :
            return {
                ...state,
                info:action.payload
            }
        case "Id" :
            return {
                ...state,
                id:action.payload
            }
        case "Danhgia" :
            return {
                ...state,
                danhgia:action.payload
            }
        case "User" :
            return {
                ...state,
                user:action.payload
            }
        case "Baocao" :
            return {
                ...state,
                baocao:action.payload
            }
        case "Config" :
            return {
                ...state,
                config:action.payload
            }
        case "Token" :
            return {
                ...state,
                token:action.payload
            }
        case "Email" :
            return {
                ...state,
                email:action.payload
            }
        case "Group" :
            return {
                ...state,
                group:action.payload
            }
        default : 
            return state;
    }
}

export default rootReducer;