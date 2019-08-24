import React from 'react'

const Layout = (props) => {
  let str = ''
  for(let index = 0; index < props.col; index++) {
    str += (props.cw + ' ')
  }
  let myStyle = {
    display: 'grid',
    gridTemplateRows: props.rh,
    gridTemplateColumns: str
  }

  return (
    <div style={myStyle}>
      {props.children}
    </div>
  )
}

export default Layout