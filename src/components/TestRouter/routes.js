import React from 'react'
import { Route } from 'react-router-dom'
import { Button } from 'ppfish'
import Layout from './layout'

function TestOne() {
  return (
    <div>I'm TestOne</div>
  )
}

function TestTwo(props) {
  const { push } = props.router
  return (
    <div>
      I'm TestTwo
      <Button onClick={() => {push('/test1')}}>To One</Button>
    </div>
  )
}

function TestThree() {
  return (
    <div>I'm TestThree</div>
  )
}

function NotFound() {
  return (
    <div>Not Found</div>
  )
}

const routes = (
  <Route path="/" component={Layout}>
      <Route path="/" component={TestOne} />
      <Route path="/test1" component={TestOne} />
      <Route path="/test2" component={TestTwo} />
      <Route path="/test3" component={TestThree} />
      <Route component={NotFound} />
  </Route>
)

export default routes
