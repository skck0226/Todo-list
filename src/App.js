import react, {useState, useEffect} from 'react';
import List from './List';
import Maplist from './Maplist';
import './App.css';
function App() {
  	const [list,setList] = useState([]);
	const [value,setValue] = useState('');
	const handleChange = (e)=>{
		setValue(e.target.value);
	}
	const submit = ()=>{
		setList(list.concat(value));
		setValue('');
	}
	useEffect(()=>{
		console.log('List:'+list);
		console.log('Value:'+value)
	})
	return(
		<div className='App'>
			<Maplist list={list} />
			<div className='form'>
				<input type='text' value={value} onKeyPress={(e)=>{if(e.key=='Enter') submit();}} onChange={handleChange} />
				<button onClick={submit}>submit</button>
			</div>
		</div>
	);	
}

export default App;