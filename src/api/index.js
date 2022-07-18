import axios from "axios"

export const loginUser = async (user , password ) => {
    try {
        const data = {
            email: user,
            password: password
        }
        const results = await axios.post("https://team-api.vntrip.vn/auth/login", data)
        return results.data
    } catch (err) {
        throw err
    }
}

export const setInfo = async (token) => {
    try {
        const info = await axios.get("https://team-api.vntrip.vn/users/profile",{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return info.data.data
    } catch (err) {
        throw err
    }
}

export const setDNQL = async (token) => {
    try {
        const DNQL = await axios.get("https://team-api.vntrip.vn/users/list-staff-under-management",{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return DNQL.data
    } catch (err) {
        throw err
    }
}

export const setDSDongNghiep = async (token) => {
    try {
        const DSDongNghiep = await axios.get("https://team-api.vntrip.vn/users/list-colleagues-same-group/",{   
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return DSDongNghiep.data
    } catch (err) {
        throw err
    }
}

export const setEvaluate = async (token, data, idGroup) => {
    try {
        const Qldanhgia = await axios.post("https://team-api.vntrip.vn/users/review-manager/"+idGroup,data, {
            headers: {
                Authorization: 'Bearer ' + token
            },
        })
        return Qldanhgia.data
    } catch (err) {
        throw err
    }
}

export const saveMyself = async (token, data) => {
    try {
        const results = await axios.post("https://team-api.vntrip.vn/users/report", data,{
            headers: {
                Authorization: 'Bearer ' + token
            },
        })
        return results.data
    } catch (err) {
        throw err
    }
}

