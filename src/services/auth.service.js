import Cookies from "js-cookie"

import { $axios } from "../api"

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			// Когда данные пришли записали в куки
			if (data.token) Cookies.set("token", data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService() // экземпляр клааса!

// type - login or register т.е эндпоинт: http:localhost/auth/register

// main - или логи или регистрация - сделали общий...
