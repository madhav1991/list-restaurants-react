import React from 'react'
import { connect } from 'react-redux'


const AddCity= ({dispatch}) => {
  return (
    <div>
      <input ref={node => input = node} />
      <button type="submit">
        Add Todo
      </button>
    </div>
  )
}


export default connect()(AddCity)
