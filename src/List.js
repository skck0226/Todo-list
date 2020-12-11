import react from 'react';

export default function List({item}){
	const deleteButton = (e)=>{
		
	}
	return(
		<div >
			<span>{item}</span>
			<button onClick={deleteButton} className='btn'>delete</button>
		</div>
	);	
}