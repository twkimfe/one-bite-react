import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'react study',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'react 1',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'react 2',
    date: new Date().getTime(),
  }
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  )
};

export default App