function Goods(props) {
	return (
		<div className="goods-block">
			<h3>{props.title}</h3>
			<p>{props.cost}</p>
			<img src={props.image} alt={props.title} title={props.title} />
		</div>
	);
}

export default Goods;