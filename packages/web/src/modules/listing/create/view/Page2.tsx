import * as React from 'react';
import { Field } from 'formik'
import { InputField } from '../../../shared/InputField';
import { Form } from 'antd';

export const Page2 = () => (
  <>
    <Field
      label="Price"
      useNumberComponent={true}
      name="price"
      placeholder="Price"
      component={InputField}
    />
    <Field
      label="Beds"
      name="beds"
      useNumberComponent={true}
      placeholder="Beds"
      component={InputField}
    />
    <Field
      label="Guests"
      name="guests"
      useNumberComponent={true}
      placeholder="Guests"
      component={InputField}
    />
  </>
)
