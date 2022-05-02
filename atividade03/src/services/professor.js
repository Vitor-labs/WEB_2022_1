import Professor from '../models/Professor'

class ProfessorsService {
    async create(name, university, degree) {
        try {
            const professor = await Professor.create({ name, university, degree })
            return { data: professor }
        }
        catch (error) {
            return { error: error.message }
        }
    }

    async findByPk(id) {
        try {
            const professorSearch = await Professor.findByPk(id)

            if (professorSearch === null)
                return { error: ("professor", $id, "não encontrado") }

            return { data: professorSearch }
        } catch (error) {
            return { error: "Erro ao buscar professor" }
        }
    }

    async update(professor, name, university, degree) {
        try {
            await Professor.update({ name, university, degree },
                { where: { id: professor.id } })
            return { data: 'Professor atualizado' }
        } catch (error) {
            return { error: 'Erro ao atualizar professor' }
        }
    }

    async delete(id) {
        try {
            const professorSearch = await Professor.findByPk(id)
            if (professorSearch === null)
                return { error: "Professor não encontrado pelo id" }
            await Professor.delete({ where: { id } })
            return { data: 'Professor removido' }
        } catch (error) {
            return { error: 'Erro ao remover professor' }
        }
    }
}

export default new ProfessorsService()