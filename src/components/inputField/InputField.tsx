import React from 'react'
import './InputField.scss'

interface InputFieldProps {
  name: string
  value: any
  setValue: any
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { name, value, setValue } = props

  return (
    <div className='input-field'>
      <p>{name}:</p>
      <input className='inputInteger' type="number" name={name} value={value} onChange={e => setValue(Number(e.target.value))} />
    </div>
  )
}

export default InputField
