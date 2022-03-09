import React from 'react'

const Input = ({ name, nameChange, isValid }) => {
  return (
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          value={name}
          className={`input ${!isValid && 'is-danger'}`}
          type="text"
          placeholder="Text input"
          onChange={(e) => {
            nameChange(e.target.value)
          }}
        />
      </div>
      {!isValid && <p class="help is-danger">This input is invalid</p>}
    </div>
  )
}

export default Input
