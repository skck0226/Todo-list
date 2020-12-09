import react from 'react';
import List from './List';

export default function Maplist({list}){
	const Map = ()=>{
		console.log('MapList->list : '+list)
		return(
			list.map((l)=>{
				return <List item={l} />;
			})
		);
	}
	return(
		<div>
			{Map()}
		</div>
	);
}