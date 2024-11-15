import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import Button from './components/Button'
import Header from './components/Header'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {

  return (
    <>
      <Header title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("클릭 됨");
        }}
      />
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("클릭 됨");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("클릭 됨");
        }}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
