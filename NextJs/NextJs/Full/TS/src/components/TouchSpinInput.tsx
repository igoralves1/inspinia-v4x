'use client'
import clsx from 'clsx'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button, FormControl, FormControlProps } from 'react-bootstrap'
import { ButtonVariant } from 'react-bootstrap/types'
import { TbMinus, TbPlus } from 'react-icons/tb'

type PropsType = {
  min?: number
  max?: number
  value?: number
  setValue?: (value: number) => void
  className?: string
  inputClassName?: string
  buttonClassName?: string
  variant?: ButtonVariant
  size?: FormControlProps['size']
} & Omit<FormControlProps, 'value' | 'onChange'>

const TouchSpinInput = ({
  min = 0,
  max = 100,
  value,
  setValue,
  className,
  inputClassName,
  buttonClassName,
  variant = 'light',
  size,
  ...props
}: PropsType) => {
  const [localValue, setLocalValue] = useState<number>(value ?? 0)

  const increment = () => {
    if (!props.readOnly) {
      setLocalValue((prev) => {
        if (prev >= max) return prev
        return prev + 1
      })
    }
  }

  const decrement = () => {
    if (!props.readOnly) {
      setLocalValue((prev) => {
        if (prev <= min) return prev
        return prev - 1
      })
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    if (val === '') {
      setLocalValue(0)
      return
    }

    const newValue = parseInt(val)

    if (newValue < min) {
      setLocalValue(min)
      return
    }
    if (newValue > max) {
      setLocalValue(max)
      return
    }
    setLocalValue(newValue)
  }

  useEffect(() => {
    if (setValue) {
      setValue(localValue)
    }
  }, [localValue])

  return (
    <div className={clsx('input-group touchspin', className, size === 'sm' && 'input-group-sm', size === 'lg' && 'input-group-lg')}>
      <Button variant={variant} className={clsx('floating', buttonClassName)} disabled={props.disabled} onClick={decrement}>
        <TbMinus />
      </Button>
      <FormControl
        type="number"
        size={size}
        min={min}
        max={max}
        value={localValue}
        onChange={handleChange}
        className={clsx('border-0', inputClassName)}
        {...props}
      />
      <Button variant={variant} className={clsx('floating', buttonClassName)} disabled={props.disabled} onClick={increment}>
        <TbPlus />
      </Button>
    </div>
  )
}

export default TouchSpinInput
