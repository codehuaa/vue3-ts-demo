// 定义一个接口（ts的用法）
export interface LoginFormInt {
    username: string
    password: string
}

export class LoginData {
    loginForm: LoginFormInt = {
        username: "",
        password: ""
    }
}