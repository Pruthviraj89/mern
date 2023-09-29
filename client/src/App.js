import { useState } from 'react';
import Axios from 'axios';
function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");


	// by using node html http request

	// const handleOnSubmit = async (e) => {
	// 	e.preventDefault();
	// 	let result = await fetch(
	// 	'http://localhost:8400/register', {
	// 		method: "post",
	// 		body: JSON.stringify({ name, email }),
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	})
	// 	result = await result.json();
	// 	console.warn(result);
	// 	if (result) {
	// 		alert("Data saved succesfully");
	// 		setEmail("");
	// 		setName("");
	// 	}
	// }








	// by using axios html http request 
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		Axios({
			method:'post',
			url:'http://localhost:8400/register',
			data:{ name, email },
		}).catch(function(error){
			console.log(error);
		});
	}

	
	


	return (
		<>
			<h1>This is React WebApp </h1>
			<form action="">
				<input type="text" placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

		</>
	);
}

export default App;

