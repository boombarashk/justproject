import { useParams } from 'react-router-dom'

function Chapter() {
    let { id } = useParams();
    return <div>
        This is {id} chapter.
    </div>
}

export default Chapter
