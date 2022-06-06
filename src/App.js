import './App.css';
import Header from './Header/Header'
import Goods from './Goods';

const siteData = {
	site_name: 'my test site name',
	nav: [
		{
			'link': 'nav1',
			'text': 'my link'
		},
		{
			'link': 'nav2',
			'text': 'my link 2'
		},
		{
			'link': 'nav3',
			'text': 'my link 3'
		}
	]

}

const goods = [{
	'title': 'apple',
	'cost': 330,
	'image': 'https://cdn2.iconfinder.com/data/icons/gardening-caramel-vol-1/256/APPLE-256.png'
}, {
	'title': 'pear',
	'cost': 530,
	'image': 'https://cdn1.iconfinder.com/data/icons/kitchen-and-food-2/44/pear-256.png'
}, {
	'title': 'berry',
	'cost': 240,
	'image': 'https://cdn2.iconfinder.com/data/icons/fruit-and-vegetable-64/340/fruit_vegan_berry_cherry_sour_organic_food-256.png'
}]

function App() {
	return (
		<>
			<Header data={siteData}></Header>
			{goods.map(item => <Goods key={item.title} title={item.title} cost={item.cost} image={item.image} />)}
		</>
	);
}

export default App;
