// @flow
import React from 'react';
import Form from 'grommet/components/Form';
import GrommetFormRenderer from '../GrommetFormRenderer';
import type { FormType } from './types';

type GrommetFormProps = {
  form: FormType,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class GrommetForm extends React.Component {
  static defaultProps: {
    plain: false,
    compact: false,
    onSubmit: () => void,
    pad: 'none',
  };
  props: GrommetFormProps;
  render() {
    const { form } = this.props;
    const { title, fields, ...formProps } = form;
    return (
      <Form {...formProps}>
        <fieldset>
          <legend>{title}</legend>
          <GrommetFormRenderer fields={fields} />
        </fieldset>
      </Form>
    );
  }
}
