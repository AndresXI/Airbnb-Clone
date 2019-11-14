import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ChangePasswordView } from './view/ChangePasswordView';
import { ChangePasswordController } from '@abb/controller';

export default class ChangePasswordConnector extends Component<RouteComponentProps<{ key: string; }>> {

  render() {
    const { match: { params: { key } } } = this.props;
    console.log('key ', key);
    return (
      <ChangePasswordController>
        {({ submit }) => <ChangePasswordView key={key} submit={this.submit} />}
      </ChangePasswordController>
    )
  }
}
