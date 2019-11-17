import React from 'react'
import styled from 'styled-components'
import stylesheets from '../uiConfig/functions/builders/stylesheets'

export default function Bllago(props) {
  let styles = stylesheets(props)
  let Element = styled[props.component]`
    ${styles}
  `
  return (
    <React.Fragment>
      <Element>{props.children}</Element>
    </React.Fragment>
  )
}
