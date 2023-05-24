import expresso from '../assets/images/expresso.svg'
import expressoAmericano from '../assets/images/americano.svg'
import expressoCremoso from '../assets/images/expressocremoso.svg'
import expressoGelado from '../assets/images/cafegelado.svg'
import cafeComLeite from '../assets/images/cafecomleite.svg'
import latte from '../assets/images/latte.svg'
import capuccino from '../assets/images/capuccino.svg'
import macchiato from '../assets/images/macchiato.svg'
import mochaccino from '../assets/images/mochaccino.svg'
import chocolatequente from '../assets/images/chocolatequente.svg'
import cubano from '../assets/images/cubano.svg'
import havaiano from '../assets/images/havaiano.svg'
import arabe from '../assets/images/arabe.svg'

const coffeeTypes = [
	{
		id: 1,
		description: 'tradicional',
	},
	{
		id: 2,
		description: 'com leite',
	},
	{
		id: 3,
		description: 'especial',
	},
	{
		id: 4,
		description: 'alcoílico',
	},
	{
		id: 5,
		description: 'gelado',
	},
]

export const coffeesList = [
	{
		id: 'Expresso Tradicional',
		title: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 9.9,
		img: expresso,
		types: [coffeeTypes[0]],
	},
	{
		id: 'Expresso Americano',
		title: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 9.9,
		img: expressoAmericano,
		types: [coffeeTypes[0]],
	},
	{
		id: 'Expresso Cremoso',
		title: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 9.9,
		img: expressoCremoso,
		types: [coffeeTypes[0]],
	},
	{
		id: 'Expresso Gelado',
		title: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 9.9,
		img: expressoGelado,
		types: [coffeeTypes[0], coffeeTypes[4]],
	},
	{
		id: 'Café com Leite',
		title: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 9.9,
		img: cafeComLeite,
		types: [coffeeTypes[0], coffeeTypes[1]],
	},
	{
		id: 'Latte',
		title: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: 9.9,
		img: latte,
		types: [coffeeTypes[0], coffeeTypes[1]],
	},
	{
		id: 'Capuccino',
		title: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: 9.9,
		img: capuccino,
		types: [coffeeTypes[0], coffeeTypes[1]],
	},
	{
		id: 'Macchiato',
		title: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		price: 9.9,
		img: macchiato,
		types: [coffeeTypes[0], coffeeTypes[1]],
	},
	{
		id: 'Mocaccino',
		title: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 9.9,
		img: mochaccino,
		types: [coffeeTypes[0], coffeeTypes[1]],
	},
	{
		id: 'Chocolate Quente',
		title: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 9.9,
		img: chocolatequente,
		types: [coffeeTypes[2], coffeeTypes[1]],
	},
	{
		id: 'Cubano',
		title: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: 9.9,
		img: cubano,
		types: [coffeeTypes[2], coffeeTypes[3], coffeeTypes[4]],
	},
	{
		id: 'Havaiano',
		title: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 9.9,
		img: havaiano,
		types: [coffeeTypes[2]],
	},
	{
		id: 'Árabe',
		title: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 9.9,
		img: arabe,
		types: [coffeeTypes[2]],
	},
	{
		id: 'Irlandês',
		title: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: 9.9,
		img: arabe,
		types: [coffeeTypes[2], coffeeTypes[3]],
	},
]
