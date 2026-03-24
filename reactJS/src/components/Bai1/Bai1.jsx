import './Table.css'

function Table({ data }) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className={index % 2 !== 0 ? 'highlight-row' : ''}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
