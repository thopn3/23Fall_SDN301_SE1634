import jwt from 'jsonwebtoken'

const checkToken = (req, res, next) => {
    // Xác định những request đi qua không cần kiểm tra
    // Bypass: login, register, ....
    debugger
    if(req.url.toLowerCase() == '/users/login'.toLowerCase() || 
       req.url.toLowerCase() == '/users/register'.toLowerCase()){
        // Chuyển tiếp
        next()
        // Kết thúc quá trình kiểm tra
        return
    }

    // Xác thực JWT của request cần kiểm tra
    const token = req.headers?.authorization?.split(' ')[1]

    try {
        const jwtObject = jwt.verify(token, process.env.SECRET_KEY_JWT);
        // Bóc ra dữ liệu của expired (Thời gian sống của token)

    } catch (error) {
        
    }
}

export default checkToken