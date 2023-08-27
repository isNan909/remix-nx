import * as React from 'react';

export function Card(props: any) {
	return (
		<div>
			<img src={props.image} alt={props.description} />
			<h3>{props.heading}</h3>
			<span>{props.price}</span>
			<button onClick={() => props.onClick()}>{props.children || 'Add to cart'}</button>
		</div>
	);
}

export default Card;