export const validateFields = (form) => {
  let nameValid = true
  let textareaValid = true
  let selectValid = true

  if (form.name.length < 3) {
    nameValid = false
  }
  if (form.message.length < 1) {
    textareaValid = false
  }
  if (form.subject === '0') {
    selectValid = false
  }

  return { nameValid, textareaValid, selectValid }
}
