import * as yup from 'yup';
import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form as FForm } from 'formik';
import { validUserSchema } from '@abb/common';
import { InputField } from '../../shared/InputField';

interface FormValues {
  email: string,
  password: string,
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RegisterComponent extends React.PureComponent<FormikProps<FormValues> & Props> {

  render() {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;
    return (
      <FForm className="login-form">
        <Field
          name="email"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="email"
          component={InputField}
        />
        <Field
          name="password"
          type="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="password"
          component={InputField}
        />
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          Or <a href="">login now!</a>
        </Form.Item>
      </FForm>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterComponent);