import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react'
import Dropzone from 'react-dropzone'
import './CustomDropzoneStyle.css'
import { ab2str } from '../../helpers/DataConversion.js'

const CustomDropzone = forwardRef(({ stateChanger }, ref) => {
  const [files, setFiles] = useState([])
  const handleDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => {
          return { name: file.name, size: file.size }
        })
      )
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          //file content operations
          const binaryStr = reader.result
          stateChanger(ab2str(binaryStr))
        }
        reader.readAsArrayBuffer(file)
      })
    },
    [stateChanger]
  )
  const cleanFiles = () => {
    setFiles([])
  }

  useImperativeHandle(ref, () => {
    return {
      cleanFiles: cleanFiles,
    }
  })
  return (
    <div>
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        styles={{
          dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
          inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        {files.length ? <strong>File:</strong> : ''}
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              {file.name}, size: {file.size} bytes
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default CustomDropzone
