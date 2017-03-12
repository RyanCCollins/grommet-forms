__NOTICE__:
This library is being actively developed.  Use with caution until a proper release has been published.

# Grommet Forms
Collection of higher order components for constructing forms with Grommet UX

# Inspiration
Forms can often be the most time consuming part of your project.  Tons of state? :check: complex hierarchies of data? Yep, you get the point.  What we found when we were building our forms was that the best method was to render the form from a data structure stored in your state tree and to alter that state through redux.  

Here's an example from a recent project of ours.

This is the object that sits in the state in your redux store.  It describes the form requirements declaratively.
```

export const settingsForm = {
  title: 'Settings',
  id: 'settings-form',
  compact: false,
  fields: [
    {
      label: 'Allow Layout',
      htmlFor: 'layout',
      type: 'CheckBox',
      error: null,
      help: 'Should the layout be editable in the cms?',
      field: {
        checked: false,
        onChange: null,
        id: 'layout',
        name: 'layout'
      }
    }
  ]
};
```

// In your connected component
```
import GrommetForm from 'grommet-forms';
<GrommetForm form={this.props.settingsForm} />
```

We love JSX, but sometimes you just end up writing too much of it.  The hope with this library is that you will save yourself some keystrokes.  Pass the form renderer a blob of data describing the hierarchy of your form / fields and get back a rendered form whose state you will manage using redux.

## Field Types
All of the Grommet form components are supported.  When you create your field object, set the `type` property to one of the [Grommet Form Field types](https://github.com/RyanCCollins/grommet-forms/blob/master/src/FormFieldMap.js).

Each object in your fields array must contain a `type` and a `value` property, along with FormField properties such as `help` and `label`.  The `fieldProps` object can contain any of the props that the field type supports, including functions.  Refer to the [Grommet Docs website](https://grommet.github.io/docs/components) for a list of supported props.  You can also reference the [source code](https://github.com/RyanCCollins/grommet-forms/blob/master/src/GrommetForm/types.js) to see the PropTypes (Flow Types) that we use internally.
