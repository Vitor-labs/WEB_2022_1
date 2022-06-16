import { collection, getDocs, onSnapshot, query, addDoc, getDoc, doc, updateDoc, deleteDoc, orderBy } from "firebase/firestore"

export default class FirebaseService {
    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'student'))
            .then((querySnapshot) => {
                let students = []
                querySnapshot.forEach(
                    (doc) => {
                        students.push({
                            _id: doc.id,
                            name: doc.data().name,
                            course: doc.data().course,
                            ira: doc.data().ira
                        })
                    }
                )
                callback(students)
            })
            .catch((error) => console.log(error))
    }

    static list_onSnapshot = (firestore, callback) => {
        const coll = collection(firestore, 'student')
        const q = query(coll, orderBy('name'))
        onSnapshot(
            q,
            (querySnapshot) => {
                let students = []
                querySnapshot.forEach(
                    (document) => {
                        students.push(
                            {
                                _id: document.id,
                                name: document.data().name,
                                course: document.data().course,
                                ira: document.data().ira
                            }
                        )
                    }
                )
                callback(students)
            }
        )
    }

    static create = (firestore, callback, data) => {
        addDoc(collection(firestore, 'student'), data)
            .then(
                (doc) => {
                    console.log("CREATE:" + doc.id)
                    callback()
                }
            )
            .catch((error) => console.log(error))
    }

    static retrieve = async (firestore, callback, _id) => {
        const docRef = doc(firestore, 'student', _id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            callback(docSnap.data())
        }
        else {
            console.log('Sem documento')
        }
    }

    static retrieve_promisse = (firestore, callback, _id) => {
        const docRef = doc(firestore, 'student', _id)
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) callback(docSnap.data())
            })
            .catch((err) => console.log(err))
    }

    static update = (firestore, callback, _id, body) => {
        const docRef = doc(firestore, 'student', _id)
        updateDoc(docRef, body)
            .then(
                () => {
                    callback(true)
                }
            )
            .catch((error) => console.log(error))
    }

    static delete = (firestore, callback, _id) => {
        const docRef = doc(firestore, 'student', _id)
        deleteDoc(docRef)
            .then(
                () => {
                    callback()
                }
            )
            .catch((error) => console.log(error))
    }

}