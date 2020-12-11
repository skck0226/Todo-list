import react from 'react';
import List from './List';

export default function Maplist({list}){
	
	const Map = ()=>{
		console.log('MapList->list : '+list)
		return(
			list.map((l)=>{
				return(
					<div className='item'>
						<List item={l} />
					</div>
				);
			})
		);
	}
	return(
		<div className='list' >
			{Map()}
		</div>
	);
}