import react, {useState, useEffect} from 'react';
import List from './List';
import Maplist from './Maplist';
function App() {
  	const [list,setList] = useState([]);
	const [value,setValue] = useState('');
	const handleChange = (e)=>{
		setValue(e.target.value);
	}
	const submit = ()=>{
		setList(list.concat(value));
	}
	useEffect(()=>{
		console.log('List:'+list);
		console.log('Value:'+value)
	})
	return(
		<div>
			<input type='text' value={value} onChange={handleChange} />
			<button onClick={submit}>submit</button>
			<Maplist list={list} />
		</div>
	);	
}

export default App;