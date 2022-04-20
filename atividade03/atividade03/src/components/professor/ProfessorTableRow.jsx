import { Link } from "react-router-dom"

const ProfessorTableRow = (props) => {
    const { id, name, university, degree } = props.professor
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td>
                <Link className="btn btn-warning" to={`/editProfessor/${id}`}>Editar</Link>
            </td>
            <td>
                <button className="btn btn-danger">Apagar</button>
            </td>
        </tr>
    )
}
export default ProfessorTableRow