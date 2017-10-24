import React from 'react'
import {connect} from 'react-redux'
import {clickBtn} from '../actions'

const BtnField = ({clickBtn, color}) => {
  console.log(color)
  return (
    <div>
      <button style={{backgroundColor: color}} onClick={() => clickBtn()}>
        Click Me
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {color} = state.reducers.btnReducer
  return {
    color
  }
}

export default connect(mapStateToProps, {clickBtn})(BtnField)
