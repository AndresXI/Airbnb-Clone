import * as React from 'react';
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form as FForm } from 'formik';
import { NormalizedErrorMap } from '@abb/controller';

import { InputField } from '../../shared/InputField';

interface FormValues {
  newPassword: string,
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class ForgotPasswordComponent extends React.PureComponent<FormikProps<FormValues> & Props> {

  render() {
    return (
      <FForm className="login-form">
        <Field
          name="newPassword"
          type="password"
          placeholder="New Password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          component={InputField}
        />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Change Password
          </Button>
        </Form.Item>
      </FForm>
    );
  }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ newPassword: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(ForgotPasswordComponent);
