function convertStateToCode(name: string) {
	switch (name) {
		case 'Acre':
			return 'AC'
		case 'Alagoas':
			return 'Al'
		case 'Amapá':
			return 'AP'
		case 'Amazonas':
			return 'AM'
		case 'Bahia':
			return 'BA'
		case 'Ceará':
			return 'CE'
		case 'Distrito Federal':
			return 'DF'
		case 'Espírito Santo':
			return 'ES'
		case 'Goiás':
			return 'GO'
		case 'Maranhão':
			return 'MA'
		case 'Mato Grosso':
			return 'MT'
		case 'Mato Grosso do Sul':
			return 'MS'
		case 'Minas Gerais':
			return 'MG'
		case 'Pará':
			return 'PA'
		case 'Paraíba':
			return 'PB'
		case 'Paraná':
			return 'PR'
		case 'Pernambuco':
			return 'PE'
		case 'Piauí':
			return 'PI'
		case 'Rio de Janeiro':
			return 'RJ'
		case 'Rio Grande do Norte':
			return 'RN'
		case 'Rio Grande do Sul':
			return 'RS'
		case 'Rond&ohat;nia':
			return 'RO'
		case 'Rondônia':
			return 'RO'
		case 'Roraima':
			return 'RR'
		case 'Santa Catarina':
			return 'SC'
		case 'São Paulo':
			return 'SP'
		case 'Sergipe':
			return 'SE'
		case 'Tocantins':
			return 'TO'

		default:
			return ''
	}
}

export { convertStateToCode }
