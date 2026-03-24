import './App.css'
import Table from './components/Bai1/Table'
import Toggle from './components/Bai2/Toggle'

function App() {

    const posts = [
        {id: 1, title: "Domenic", body: "dcode"},
        {id: 2, title: "Sally", body: "Students"},
        {id: 3, title: "Lin", body: "dcode"},
    ]

  return (
    <>
        <Table data={posts} />
        <Toggle />
    </>
  )
}

export default App
