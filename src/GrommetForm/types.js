export type ValueType = { value: string, label: string } | string;

export type SelectOnChangeArguments = {
  target: EventTarget,
  option: ?ValueType,
  value: ?Array<ValueType>
};

export type SelectField = {
  inline: boolean,
  multiple: boolean,
  onChange: Function,
  value: ValueType,
  options: Array<ValueType>,
  onChange: (args: SelectOnChangeArguments) => void,
  onSearch: (event: Event) => void,
  placeHolder?: string,
}

export type TextInputField = {
  defaultValue?: string,
  id: string,
  name: string,
  onDOMChange: (event: Event) => void,
  onSelect: ?(suggestion: string) => void,
  placeHolder?: ?string,
  suggestions?: ?string[],
  value: string
}

export type SearchInputField = {
  defaultValue?: string,
  id: string,
  name: string,
  onDOMChange: (event: Event) => void,
  onSelect: ?(suggestion: string) => void,
  placeHolder?: ?string,
  suggestions?: ?string[],
  value: ValueType,
}

export type NumberInputField = {
  defaultValue?: number,
  disabled: boolean,
  id: string,
  max: number,
  min: number,
  name: string,
  onChange: (event: Event) => void,
  step: number,
  value: ValueType,
}

export type DateTimeField = {
  format: string,
  id: string,
  onChange: (date: string) => void,
  step: number,
  value: string | Date,
}

export type RadioButtonField = {
  checked: boolean,
  defaultChecked: boolean,
  disabled: boolean,
  id: string,
  label: string | HTMLElement,
  name: string,
  onChange: Function,
  value: string,
}

export type CheckBoxField = {
  checked: boolean,
  defaultChecked: boolean,
  disabled: boolean,
  id: string,
  label: string | HTMLElement,
  name: string,
  onChange: Function,
  reverse: boolean,
  toggle: boolean,
}

export type FormFieldType = {
  help?: ?string,
  error?: ?string,
  htmlFor: string,
  label: string,
  type: 'CheckBox' | 'RadioButton'
    | 'DateTime' | 'NumberInput'
    | 'SearchInput' | 'TextInput' | 'Select',
  field: CheckBoxField | RadioButtonField
    | DateTimeField | NumberInputField
    | TextInputField | SearchInputField
    | TextInputField | SelectField,
}

type FormPaddingType = 'none' | 'small' | 'medium' | 'large';
export type FormType = {
  title: string,
  compact: boolean,
  onSubmit: Function,
  plain: boolean,
  pad: FormPaddingType | { vertical: FormPaddingType, horizontal: FormPaddingType },
  fields: Array<FormFieldType>,
}
