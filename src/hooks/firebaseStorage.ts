import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../db/firebase";

export async function uploadImage(file: File) {
  try {
    const storageRef = ref(storage, `images/${file.name}`)
    await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(storageRef)
    return fileURL
  } catch (error) {
    console.error("Erro ao enviar a imagem: ", error)
    throw error
  }
}
