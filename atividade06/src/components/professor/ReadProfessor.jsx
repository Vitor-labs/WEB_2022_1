import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProfessorTableRow from "./ProfessorTableRow";

//Firebase
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseProfessorService from "../../../services/FirebaseProfessorService";

const ListProfessorPage = () =>
    <FirebaseContext.Consumer>
        {(firebase) => <ListProfessor firebase={firebase} />}
    </FirebaseContext.Consumer>

function ListProfessor(props) {

    const [professors, setProfessors] = useState([])

    useEffect(
        () => {
            // Firebase

            FirebaseProfessorService.list(
                props.firebase.getFirestoreDb(),
                (professors) => setProfessors(professors)
            )
        }
        ,
        [professors]
    )

    function deleteProfessorById(_id) {
        let professorTemp = professors
        for (let e = 0; e < professorTemp.length; e++)
            if (professorTemp[e]._id === _id)
                professorTemp.splice(e, 1)

        setProfessors([...professorTemp])
    }


    function generateTable() {

        if (!professors) return
        return professors.map(
            (professor, i) => {
                return <ProfessorTableRow
                    professor={professor}
                    key={i}
                    // deleteProfessorById={deleteProfessorById}
                    firestore={props.firebase.getFirestoreDb()}
                />
            }
        )
    }


    return (
        <>
            <main>
                <h2>
                    Listar Professores
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulação</th>
                            <th colSpan={2} style={{ textAlign: "center" }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>

            <nav>
                <Link to="/" class="btn btn-outline-success">Home</Link>
            </nav>
        </>
    );
}

export default ListProfessorPage