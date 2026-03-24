import './App.css'
import Bai1 from './components/Bai1/Bai1'
import Bai2 from './components/Bai2/Bai2'

function App() {

  const posts = [
    { id: 1, title: "Domenic", body: "dcode" },
    { id: 2, title: "Sally", body: "Students" },
    { id: 3, title: "Lin", body: "dcode" },
  ]

  return (
    <>
      <Bai1 data={posts} />
      <Bai2 />
    </>
  )
}

export default App
