import { Pop } from "./Pop.js"

export function getFormData(form) {
  try {
    const formData = new FormData(form)
    const obj = {}
    formData.forEach((val, key) => {
      obj[key] = val
    })
    return obj
  } catch (error) {
    console.error('Could not extract form data', error)
    Pop.error(error)
  }
}