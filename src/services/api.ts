import axios from 'axios'

export const localeApi = axios.create({
	baseURL: 'https://us1.locationiq.com/v1/',
})
