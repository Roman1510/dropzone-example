import React from 'react'

const Textarea = ({ message, messageChange, isValid }) => {
  return (
    <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea
          value={message}
          className={`textarea ${!isValid ? 'is-danger' : 'is-info'}`}
          placeholder="Textarea"
          onChange={(e) => {
            messageChange(e.target.value)
          }}
        ></textarea>
      </div>
      {!isValid && <p class="help is-danger">This cannot be empty</p>}
    </div>
  )
}

export default Textarea
