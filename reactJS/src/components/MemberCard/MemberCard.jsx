
import { useState } from 'react'

function MemberCard({ name, role }) {

    const [likes, setLikes] = useState(0)

    return (
        <div
            className="card-item"
        >
            <h3>{name}</h3>
            <p>{role}</p>
            <button onClick={() => setLikes(likes + 1)}>Bình chọn {likes}</button>
        </div>

    )
}
export default MemberCard