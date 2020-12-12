import react, {useEffect} from 'react';
import {useRecoilState, useSetRecoilState, useRecoilValue} from 'recoil';
import { listState, todoGetter } from './Atoms';
export default function List(props){
	const list = useRecoilValue(todoGetter);
	const setList = useSetRecoilState(listState);
	const deleteButton = (e)=>{
		let _id = Number(e.target.id)+1; 
		let arr = [
			...list.slice(0,e.target.id),
			...list.slice(_id)
		];
		setList(arr);
	}
	useEffect(()=>{
	})
	return(
		<div>
			<span>{props.item} {props.id}</span>
			<button id={props.id}onClick={deleteButton} className='btn'>delete</button>
		</div>
	);	
}