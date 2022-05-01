import React, { useState } from "react";

const CreateAlun = () => {
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [ira, setIra] = useState(0)

    const handleSubmit = (event) => {
        alert(event.target.value)
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
export default CreateAlun