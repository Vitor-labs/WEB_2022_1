import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import StudentTableRow from "./StudentTableRow";


import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseService from "../../../services/FirebaseStudentServices";

const ListStudentPage = () =>
    <FirebaseContext.Consumer>
        {(firebase) => <ListStudent firebase={firebase} />}
    </ FirebaseContext.Consumer>


function ListStudent(props) {

    const [students, setStudents] = useState([])

    useEffect(
        () => {

            FirebaseService.list(
                props.firebase.getFirestoreDb(),
                (students) => {
                    setStudents(students)
                }
            )
        }
        ,
        [students]
    )

    function deleteStudentById(_id) {
        let studentsTemp = students
        for (let i = 0; i < studentsTemp.length; i++)
            if (studentsTemp[i]._id === _id)
                studentsTemp.splice(i, 1)

        setStudents([...studentsTemp])
    }

    function generateTable() {

        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow
                    student={student}
                    key={i}
                    deleteStudentById={deleteStudentById}
                    firestore={props.firebase.getFirestoreDb()}
                />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Estudantes
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
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

export default ListStudentPage