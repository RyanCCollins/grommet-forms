// @flow
import React from 'react';
import FormField from 'grommet/components/FormField';
import FormFieldMap from '../FormFieldMap';
import type { FormFieldType } from '../GrommetForm/types';

export default function GrommetFormRenderer({ fields }: {
  fields: Array<FormFieldType>
}) {
  if (!fields.length) {
    return null;
  }
  return (
    <span>
      {fields.map((item, i) => {
        const { field, type, ...formFieldProps } = item;
        const node = typeof type === 'string'
          ? FormFieldMap[type]
          : element;
        return (
          <FormField key={`grommet-form-field-${item.type}-${i}`} {...formFieldProps}>
            {React.cloneElement(
              node,
              {
                ...field,
              },
            )}
          </FormField>
        );
      })}
    </span>
  )
}
