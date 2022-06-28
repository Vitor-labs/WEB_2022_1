import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

//Firebase
import FirebaseContext from '../../../utils/FirebaseContext';
import FirebaseProfessorService from '../../../services/FirebaseProfessorService';

const CreateProfessorPage = () =>
    <FirebaseContext.Consumer>
        {(firebase) => <CreateProfessor firebase={firebase} />}
    </ FirebaseContext.Consumer>

function CreateProfessor(props) {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProfessor = { name, university, degree }

        //Firebase
        FirebaseProfessorService.create(
            props.firebase.getFirestoreDb(),
            (id) => {
                alert(`Criando o professor`)
                navigate("/listProfessor")
            },
            newProfessor
        )
    }

    return (
        <>
            <main>
                <h2>
                    Criar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Universidade: </label>
                        <input type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Titulação: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <input type="submit" value="Criar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/" class="btn btn-outline-success">Home</Link>
            </nav>
        </>
    );
}

export default CreateProfessorPage