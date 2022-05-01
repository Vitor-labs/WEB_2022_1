import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { students } from "./dados"

const UpdateAlun = () => {
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIra] = useState(0)

    const params = useParams()

    //chamado toda vez que o estado é modificado
    useEffect(
        () => {
            const student = students[params.id]
            setName(student.name)
            setCourse(student.course)
            setIra(student.ira)
        },
        [params.id]
    )

    const handleSubmit = (event) => {
        //aqui código de comunicação com o backend
        alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`)
        console.log(event.target.value)
    }

    return (
        <div>
            <h2>Criar Estudante</h2>
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
                    <label htmlFor="">Curso</label>
                    <input type="text"
                        name="course"
                        className="form-control"
                        value={course ?? ""}
                        onChange={(event) => setCourse(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">IRA</label>
                    <input type="text"
                        name="ira"
                        className="form-control"
                        value={ira ?? 0}
                        onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <div className="form-group" style={{ paddingTop: 10 }}>
                    <input type="submit" value="Criar Estudante"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}
export default UpdateAlun