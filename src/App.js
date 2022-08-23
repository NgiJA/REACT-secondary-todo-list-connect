import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoContainer from './components/TodoContainer';

function App() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:8080/todos')
			.then((res) => {
				// { data, status, statusText, headers, request }
				console.log(res.data);
				setTodos(res.data.todos);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className='container mt-5 mb-3' style={{ maxWidth: 576 }}>
			<div className='my-4'>
				<TodoForm />
			</div>
			<TodoContainer />
		</div>
	);
}

export default App;
