import React from 'react'

const ContentList = ({ content, handleDelete }) => {
  return (
    <div>
      <h1 className="title">{content.length ? 'Submitted records:' : ''}</h1>
      {content.map((item, idx) => {
        return (
          <div key={idx} className="box columns">
            <div className="column is-two-thirds">
              <h1>{item.name}</h1>
              <h2>{item.subject}</h2>
              <p>{item.message}</p>
            </div>
            <div className="column is-one-third has-text-left">
              <img
                className="box p-0"
                width={'50px'}
                height={'50px'}
                src={`data:image/jpeg;base64,${item.binary}`}
                alt=""
              />
              <div className="container">
                <span
                  class="icon"
                  onClick={() => {
                    handleDelete(idx)
                  }}
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ContentList
