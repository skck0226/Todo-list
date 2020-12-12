import react, {useEffect} from 'react';
import {useRecoilState, useSetRecoilState, useRecoilValue} from 'recoil';
import { listState, todoGetter } from './Atoms';
export default function List(props){
	const list = useRecoilValue(todoGetter);
	const setList = useSetRecoilState(listState);
	const is = (a,b)=>{
		if(a!=b) return true;	
	}
	const deleteButton = (e)=>{
		setList(list.filter((l)=>{return is(l.id,props.id)}));
	}
	return(
		<div>
			<span>{props.item} {props.id}</span>
			<button id={props.id}onClick={deleteButton} className='btn'>delete</button>
		</div>
	);	
}