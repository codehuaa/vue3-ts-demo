import axios from "../utils/request"

import { LoginFormInt } from "../types/login"

export function login(data: LoginFormInt) {
    return axios({
        url: "/login",
        method: "post",
        data
    })
}