import React, { forwardRef } from 'react'
import CustomDropzone from '../dropzone/CustomDropzone'

const DropzoneWrap = forwardRef(({ binary, setBinary }, ref) => {
  return (
    <div className="field">
      <div className="label"></div>
      <div className="control">
        <div className="field">
          <div className="control box drop-container">
            <CustomDropzone stateChanger={setBinary} ref={ref} />
            {binary.length ? (
              <img
                className="box p-0"
                width={'50px'}
                height={'50px'}
                src={`data:image/jpeg;base64,${binary}`}
                alt=""
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
})

export default DropzoneWrap
