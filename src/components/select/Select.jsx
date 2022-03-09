import React from 'react'

const Select = ({ subject, subjectChange, isValid }) => {
  return (
    <div className="field">
      <label className="label">Subject</label>
      <div className="control">
        <div className={`select ${!isValid && 'is-danger'}`}>
          <select
            value={subject}
            onChange={(e) => {
              subjectChange(e.target.value)
            }}
          >
            <option value="0">Select dropdown</option>
            <option value="1">First value</option>
            <option value="2">Second value</option>
          </select>
        </div>
      </div>
      {!isValid && <p class="help is-danger">Please select a value</p>}
    </div>
  )
}

export default Select
