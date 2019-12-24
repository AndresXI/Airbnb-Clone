import * as React from 'react';
import { Field } from 'formik'
import { InputField } from '../../../shared/InputField';
import { Form } from 'antd';

export const Page3 = () => (
  <>
    <Field
      label="Latitude"
      name="latitude"
      placeholder="Latitude"
      component={InputField}
    />
    <Field
      label="Longitude"
      name="longitude"
      placeholder="Longitude"
      component={InputField}
    />
    <Field
      name="amenities"
      placeholder="Amenities"
      component={InputField}
    />
  </>
)