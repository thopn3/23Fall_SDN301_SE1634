import jwt from 'jsonwebtoken'

const listByPassURL = [
    '/users/login',
    '/users/register',
    // ....
]

function checkExistURL(url){
    const result = listByPassURL.find(u => u.toLocaleLowerCase().trim() == url.toLowerCase().trim())
    if(result)
        return true
    else
        return false
}

const checkToken = (req, res, next) => {
    // Xác định những request đi qua không cần kiểm tra
    // Bypass: login, register, ....
    // debugger
    if(checkExistURL(req.url)){
        // Chuyển tiếp
        next()
        // Kết thúc quá trình kiểm tra
        return
    }

    try {
        // Xác thực JWT của request cần kiểm tra
        const token = req.headers?.authorization?.split(' ')[1]
        const jwtObject = jwt.verify(token, process.env.SECRET_KEY_JWT)
        // debugger
        // Bóc ra dữ liệu của expired (Thời gian sống của token)
        let isExpired = Date.now() >= jwtObject.exp*1000 // false: Còn time; true: hết time
        // debugger
        if(isExpired){
            res.status(400).json({
                message: 'Access token expired'
            })
            res.end()
        }else{
            next()
            return
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default checkToken