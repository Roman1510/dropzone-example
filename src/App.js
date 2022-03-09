/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import './App.css'
import ButtonsGroup from './components/buttonsgroup/ButtonsGroup'
import ContentList from './components/contentList/ContentList'
import DropzoneWrap from './components/dropzonewrap/DropzoneWrap'
import Filetypes from './components/filetypes/Filetypes'
import Input from './components/input/Input'
import Select from './components/select/Select'
import Textarea from './components/textarea/Textarea'
import STRUCTURE from './helpers/Structure.json'
import { validateFields } from './helpers/Validations'

function App() {
  const [records, setRecords] = useState([]) //list of data
  const [form, setForm] = useState(STRUCTURE)
  const [binary, setBinary] = useState('')
  const ref = useRef(null)
  const [validations, setValidations] = useState({
    nameValid: true,
    selectValid: true,
    textareaValid: true,
  })

  const resetData = () => {
    setForm(STRUCTURE)
    setBinary('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const check = validateFields(form)

    if (check.nameValid && check.selectValid && check.textareaValid) {
      setRecords([...records, form])
      resetData()
      ref.current.cleanFiles()
    } else {
      console.log(check)
      // if (check.nameValid === false) {
      //   setValidations({ ...validations, nameValid: false })
      // }
      // if (check.selectValid === false) {
      //   setValidations({ ...validations, selectValid: false })
      // }
      // if (check.textareaValid === false) {
      //   setValidations({ ...validations, textareaValid: false })
      // }
    }
  }
  const handleDelete = (index) => {
    setRecords(records.filter((_e, i) => index !== i))
  }

  const messageChange = (value) => {
    setForm({ ...form, message: value })
  }
  const nameChange = (value) => {
    setForm({ ...form, name: value })
  }
  const subjectChange = (value) => {
    setForm({ ...form, subject: value })
  }

  const filetypeChange = (name, value) => {
    setForm((prev) => {
      return { ...prev, filetypes: { ...form.filetypes, [name]: value } }
    })
  }
  useEffect(() => {
    setForm({ ...form, binary: binary })
  }, [binary])

  return (
    <>
      <div className="columns">
        <section className="section column is-half">
          <Input
            name={form.name}
            nameChange={nameChange}
            isValid={validations.nameValid}
          />
          <Select
            subject={form.subject}
            subjectChange={subjectChange}
            isValid={validations.selectValid}
          />
          <Textarea
            message={form.message}
            messageChange={messageChange}
            isValid={validations.textareaValid}
          />
          <Filetypes
            filetypes={form.filetypes}
            filetypeChange={filetypeChange}
          />
          <DropzoneWrap binary={binary} setBinary={setBinary} ref={ref} />
          <ButtonsGroup handleSubmit={handleSubmit} />
        </section>
        <section className="section column is-half">
          <ContentList
            content={records}
            handleDelete={(id) => {
              handleDelete(id)
            }}
          />
        </section>
      </div>
    </>
  )
}

export default App
