import professor from '../models/professor';

interface Iprofessor {
    name: string,
    university: string,
    degree: string
}


class ProfessorsService {
    async getAll() {
        return await professor.find(), "professor created"
    }

    async getById(id: string) {
        return await professor.findById(id), "professor found"
    }


    async create(iprofessor: Iprofessor) {
        return await professor.create(iprofessor), "professor created"
    }

    async update(id: string, iprofessor: Iprofessor) {
        return await professor.findByIdAndUpdate(id, iprofessor), "professor updated"
    }

    async delete(id: string) {
        return await professor.findByIdAndDelete(id), "professor deleted"
    }
}

module.exports = new ProfessorsService()
