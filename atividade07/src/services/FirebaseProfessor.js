import { getDocs, collection, addDoc, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore'

export default class FirebaseProfessorService {
    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'professors'))
            .then(
                (querySnapshot) => {
                    let professors = []
                    querySnapshot.forEach(
                        (professor) => {
                            professors.push({
                                _id: professor.id,
                                name: professor.data().name,
                                university: professor.data().university,
                                degree: professor.data().degree
                            })
                        }
                    )
                    callback(professors)
                }
            )
            .catch((error) => console.log(error))
    }

    static create = (firestore, callback, professor) => {
        addDoc(collection(firestore, 'professors'), professor)
            .then((professor) => {
                console.log("Professor criado: " + professor.id)
                callback()
            })
            .catch((error) => console.log(error))
    }


    static delete = (firestore, callback, id) => {
        const docRef = doc(firestore, 'professors', id)
        deleteDoc(docRef)
            .then((doc) => callback())
            .catch((error) => console.log(error))
    }

    static update = (firestore, callback, id, professor) => {
        const docRef = doc(firestore, 'professors', id)
        updateDoc(docRef, professor)
            .then((doc) => callback(true))
            .catch((error) => console.log(error))
    }

    static retrieve = (firestore, callback, id) => {
        const docRef = doc(firestore, 'professors', id)
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists())
                    callback(docSnap.data())
            })
            .catch((error) => console.log(error))
    }

}