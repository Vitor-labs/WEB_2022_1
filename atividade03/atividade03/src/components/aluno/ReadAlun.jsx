import React from "react";
import { students } from "./dados";
import StudentTableRow from "./AlunoTableRow";

const ReadAlun = () => {

    function generateTable() {
        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow student={student} key={i} />
            }
        )
    }
    return (
        <div>
            <h2>Listar Estudante</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Ira</th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
}

export default ReadAlun