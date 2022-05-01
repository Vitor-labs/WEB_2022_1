import React from "react";
import { professors } from "./dados";
import ProfessorTableRow from "./ProfessorTableRow";

export const ListProfessor = () => {
    function generateTable() {
        if (!professors) return
        return professors.map(
            (professor, i) => {
                return <ProfessorTableRow professor={professor} key={i} />
            }
        )
    }

    return (
        <div>
            <h2>Listar Professore</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Universidade</th>
                    <th>Titulação</th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
        </div>
    )
} 