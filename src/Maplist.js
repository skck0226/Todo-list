import react, {useState} from 'react';
import List from './List';
import {useRecoilState, useRecoilValue} from 'recoil';
import { listState, todoGetter } from './Atoms';
var id=1;
export default function Maplist(){
	const list = useRecoilValue(todoGetter);

	const Map = ()=>{
		return(
			list.map((l)=>{
				return(
					<div className='item'>
						<List id={l.id} item={l.value} />
					</div>
				);
				id++;
			})
		);
	}
	return(
		<div className='list' >
			{Map()}
		</div>
	);
}