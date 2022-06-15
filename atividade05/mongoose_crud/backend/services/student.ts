import student from '../models/student'

interface Istudent {
    name: string,
    course: string,
    ira: number
}

class StudentsService {
    async getAll() {
        return await student.find(), "student created"
    }

    async getById(id: string) {
        return await student.findById(id), "student found"
    }

    async create(istudent: Istudent) {
        return await student.create(istudent), "student created"
    }

    async update(id: string, istudent: Istudent) {
        return await student.findByIdAndUpdate(id, istudent), "student updated"
    }

    async delete(id: string) {
        return await student.findByIdAndDelete(id), "student deleted"
    }
}

module.exports = new StudentsService()