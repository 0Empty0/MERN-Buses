import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosRequestHeaders,
} from 'axios'

const instance: AxiosInstance = axios.create({
	baseURL: 'http://localhost:3002/api',
})

instance.interceptors.request.use((config): AxiosRequestConfig => {
	const authConfig: { [key: string]: any } | AxiosRequestHeaders =
		config.headers!

	authConfig.Authorization = localStorage.getItem('token')

	return config
})

export default instance
