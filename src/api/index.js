

import {postRequest} from "./request.js";

//注册
export const register = (data) => {
    return postRequest("/member/register.php",data);
};
//发送验证码
export const register_mail = (data) => {
    return postRequest("/member/mail/register_mail.php",data);
};
//登录
export const land = (data) => {
    return postRequest("/member/land.php",data);
};
//列表
export const soft_list = (data) => {
    return postRequest("/member/soft/soft_list.php",data);
};