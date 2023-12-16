import React from 'react'
import ReduxProvider from '../ReduxProvider'
import FormLogin from './FormLogin'

const FormLoginWrapper = () => {
  return (
    <ReduxProvider>
      <FormLogin />
    </ReduxProvider>
  )
}

export default FormLoginWrapper