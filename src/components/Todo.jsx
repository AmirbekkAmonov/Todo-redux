import TodoForm from './TodoForm/TodoForm';
import TodoCard from './TodoCard/TodoCard';
import Header from './Header/Header';
import './Todo.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Index() {
    const [isOpen, setIsOpen] = useState(true);
    const todos = useSelector(state => state.add.todos) || [];
    const searchQuery = useSelector((state) => state.search.query);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const filteredTodos = todos.filter(todo =>
        todo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        todo.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    return (
        <section className="container">
            <div className={`left ${isOpen ? "open" : "closed"}`}>
                <h1>Todo List</h1>
                <TodoForm />
            </div>
            <div className={`right ${isOpen ? "small" : "full"}`}>
                <Header  toggleMenu={toggleMenu}/>
                <div className="right-content">
                    {todos.length === 0 ? (
                        <h2 className="not-found">📭 Hozircha hech qanday ma'lumot yo‘q!</h2>
                    ) : filteredTodos.length === 0 ? (
                        <h2 className="not-found">🚫 Hech narsa topilmadi!</h2>
                    ) : (
                        filteredTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
                    )}
                </div>
            </div>
        </section>
    );
}

export default Index;
