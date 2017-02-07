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
  props: GrommetFormProps;
  render() {
    const { form } = this.props;
    return (
      <Form>
        <fieldset>
          <legend>{form.title}</legend>
          <GrommetFormRenderer form={form} />
        </fieldset>
      </Form>
    );
  }
}
