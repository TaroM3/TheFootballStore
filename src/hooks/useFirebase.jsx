import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebaseConfig"

//entra por parametro el nombre de la base de datos y devuelve un array de objetos
const useFirestore = (databaseName) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = collection(db, databaseName)
        getDocs(getData).then( (res) => {
            let arrayData = res.docs.map((data) => {
                return {...data.data(), id: data.id}
            })
            setData(arrayData)
        })
    }, [databaseName])
  return [data]
}

export default useFirestore