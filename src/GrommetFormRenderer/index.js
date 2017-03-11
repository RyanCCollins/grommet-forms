// @flow
import React from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFieldMap from '../FormFieldMap';
import type { FormFieldType } from '../GrommetForm/types';

export default function GrommetFormRenderer({ fields }: {
  fields: Array<FormFieldType>
}) {
  if (!fields.length) {
    return null;
  }
  return fields.map((item, i) => {
    const { field, type, ...formFieldProps } = item;
    return (
      <FormField key={`grommet-form-field-${item.type}-${i}`} {...formFieldProps}>
        {React.cloneElement(
          FormFieldMap[item.type].element,
          {
            ...field,
          },
        )}
      </FormField>
    );
  });
}