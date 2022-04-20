import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { professors } from "./dados";

const Update = () => {
    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")

    const params = useParams()

    //Repetindo: chamado toda vez que o método é modificaado
    useEffect(
        () => {
            const professor = professors[params.id]
            setName(professor.name)
            setUniversity(professor.university)
            setDegree(professor.degree)
        },
        [params.id]
    )

    const handleSubmit = (event) => {
        alert(`Nome: ${name}, Universidade: ${university}, Degree: ${degree}`)
        console.log(event.target.value)
    }

    return (
        <div>
            <h2>Criar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nome</label>
                    <input type="text"
                        name="name"
                        className="form-control"
                        value={name ?? ""}
                        onChange={(event) => setName(event.target.value)}
                    // Operador de coalescencia
                    // ?? se course for nulo ou indefinido - retorna String vazia 
                    //    onChange - enveto de clicar e começar a digitar
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Universidade</label>
                    <input type="text"
                        name="university"
                        className="form-control"
                        value={university ?? ""}
                        onChange={(event) => setUniversity(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Titulação</label>
                    <input type="text"
                        name="degree"
                        className="form-control"
                        value={degree ?? 0}
                        onChange={(event) => setDegree(event.target.value)}
                    />
                </div>
                <div className="form-group" style={{ paddingTop: 10 }}>
                    <input type="submit" value="Criar Professor"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}
export default Update