import React from 'react'

const Filetypes = ({filetypes,filetypeChange}) => {
  return (
    <div className="field">
      <label className="label">File types</label>
      <div className="control">
        <label className="checkbox mx-1">
          <input
            checked={filetypes.docx}
            type="checkbox"
            onChange={(e) => {
              filetypeChange('docx', e.target.checked)
            }}
          />
          .docx
        </label>
        <label className="checkbox mx-1">
          <input
            checked={filetypes.pdf}
            type="checkbox"
            onChange={(e) => {
              filetypeChange('pdf', e.target.checked)
            }}
          />
          .pdf
        </label>
        <label className="checkbox mx-1">
          <input
            checked={filetypes.jpeg}
            type="checkbox"
            onChange={(e) => {
              filetypeChange('jpeg', e.target.checked)
            }}
          />
          .jpeg
        </label>
      </div>
    </div>
  )
}

export default Filetypes
