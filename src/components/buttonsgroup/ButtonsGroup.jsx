import React from 'react'

const ButtonsGroup = ({ handleSubmit, handleCancel }) => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button onClick={handleSubmit} className="button is-link">
          Submit
        </button>
      </div>
      <div className="control">
        <button onClick={handleCancel} className="button is-link is-light">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ButtonsGroup
