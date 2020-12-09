import react, {useState} from 'react';

function App() {
  const [list,setList] = useState([]);
	const handleChange = ()=>{
		
	}
	const submit = ()=>{
		setList({...list},)
	}
	return(
		<div>
			<input type='text' onChange={handleChange} />
			<button onClick={submit}>submit</button>
		</div>
	);	
}

export default App;