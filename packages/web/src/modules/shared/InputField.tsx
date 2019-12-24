import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Input, InputNumber } from 'antd';


export const InputField: React.SFC<FieldProps<any> & { prefix: React.ReactNode; label?: string; useNumberComponent?: boolean; }> = ({
  field: { onChange, ...field }, // { name, value, onChange, onBlur }
  form: { setFieldValue, touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name];

  const Comp = useNumberComponent ? InputNumber : Input;

  return (
    <Form.Item
      label={label}
      help={errorMessage}
      validateStatus={
        errorMessage ? 'error' : undefined
      }
    >
      <Comp
        {...field}
        {...props}
        onChange={
          useNumberComponent ? (newValue: any) =>
            setFieldValue(field.name, newValue) :
            onChange
        }
      />
    </Form.Item>
  )
} 