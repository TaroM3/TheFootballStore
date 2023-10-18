import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebaseConfig"
//entra por parametro el nombre de la base de datos y devuelve un array de objetos
const useFirestore = (databaseName, id = undefined) => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = collection(db, databaseName);

        if (id !== undefined) {
            const getRef = doc(getData, id)
            getDoc(getRef).then( (res) => {
                setData(res.data(), res.id)
                })
        }else{
            getDocs(getData).then( (res) => {
                let arrayData = res.docs.map((data) => {
                    return {...data.data(), id: data.id}
                })
                setData(arrayData)
            })
        }
    }, [databaseName, id])
  return [data]
}

export default useFirestore