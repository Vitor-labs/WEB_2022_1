import React from "react";
import { Link } from "react-router-dom";

const AlunoTableRow = (props) => {
    const { id, name, course, ira } = props.student
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {course}
            </td>
            <td>
                {ira}
            </td>
            <td>
                <Link className="btn btn-warning" to={`/editStudent/${id}`}>Editar</Link>
            </td>
            <td>
                <button className="btn btn-danger">Apagar</button>
            </td>
        </tr>
    )
}
export default AlunoTableRow