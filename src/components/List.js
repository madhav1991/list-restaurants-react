import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom';

class List extends React.Component{
  constructor(props) {
    super(props)
  }
  
  render(){
    const {address, area, name }=this.props
    return (
     <div className='parent-div'>
        <div className='address'>
          Address: {address}
          </div>
        <div className='area'>
          Area: {area}
          </div>
        <div className='name'>
          Name: {name}
        </div>
      </div>
    )
  } 
}

List.propTypes = {
  address: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default List;
