import Student from '../models/Student'

class StudentsService {
    async create(name, course, ira) {
        try {
            const student = await Student.create({ name, course, ira })
            return { data: student }
        }
        catch (error) {
            return { error: error.message }
        }
    }

    async findByPk(id) {
        try {
            const studentSearch = await Student.findByPk(id)

            if (studentSearch === null)
                return { error: "student não encontrado pelo id" }

            return { data: studentSearch }
        } catch (error) {
            return { error: 'Erro ao buscar student' }
        }
    }

    async update(student, name, course, ira) {
        try {
            await Student.update({ name, course, ira },
                { where: { id: student.id } })
            return { data: 'Student atualizado' }
        } catch (error) {
            return { error: 'Erro ao atualizar student' }
        }
    }

    async destroy(id) {
        try {
            const studentSearch = await Student.findByPk(id)
            if (studentSearch === null)
                return { error: "Student não encontrado pelo id" }

            await Student.destroy({ where: { id } })
            return { data: 'Student removido' }
        } catch (error) {
            return { error: 'Erro ao remover student' }
        }
    }
}

export default new StudentsService()