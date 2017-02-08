__NOTICE__:
This library is being actively developed.  Use with caution until a proper release has been published.

# Grommet Forms
Collection of higher order components for constructing forms with Grommet UX

# Inspiration
Forms can often be the most time consuming part of your project.  Tons of state? :check: complex hierarchies of data? Yep, you get the point.  What we found when we were building our forms was that the best method was to render the form from a data structure stored in your state tree and to alter that state through redux.  

Here's an example from a recent project of ours.

// In some reducer in your app
```
  sectionLayoutForm: {
    title: "Section Layout",
    id: 'section-layout-form',
    fields: [
      {
        label: "Flex Direction",
        error: null,
        help: "How should the content flow?  Row: left to right, Column: top to bottom.",
        name: "direction",
        type: "Select",
        value: 'row',
        fieldProps: {
          options: ["row", "column"],
        }
      },
      {
        label: "Justify Content",
        error: null,
        help: "Justify content to the left / right.",
        name: "justify",
        type: "Select",
        value: 'start',
        fieldProps: {
          options: ["start", "center", "between", "end"],
        }
      },
      {
        label: "Align Items",
        error: null,
        help: "Align items to the top / bottom.",
        name: "align",
        type: "Select",
        value: 'start',
        fieldProps: {
          options: ["start", "center", "end", "baseline", "stretch"],
        }
      },
      {
        label: "Padding",
        error: null,
        name: "pad",
        help: "How much space should the container add around content?",
        type: "Select",
        value: 'small',
        fieldProps: {
          options: ["small", "medium", "large", "none"],
        }
      },
      {
        label: "Full",
        error: null,
        help: "Should the section span the full width / height of the container.",
        name: "full",
        type: "Select",
        value: 'false',
        fieldProps: {
          options: ["horizontal", "vertical", "true", "false"],
        }
      },
      {
        label: 'Wrap',
        error: null,
        help: "Should the content ever wrap onto a new line?",
        name: 'wrap',
        type: 'Select',
        value: 'false',
        fieldProps: {
          options: ["true", "false"],
        }
      },
      {
        label: "Flex Basis",
        error: null,
        help: "The basis of inner items.  Prefer setting item size vs. flex-basis.",
        name: "basis",
        type: "Select",
        value: 'full',
        fieldProps: {
          options: [
            "xsmall", "small",
            "medium", "large",
            "xlarge", "xxlarge",
            "full", "1/2",
            "1/3", "2/3",
            "1/4", "3/4"
          ],
          onSearch: ({ target }, props) => props.options.filter(i => i.includes(target.value))
        }
      }
    ]
  },
```

// In your connected component
```
import GrommetForm from 'grommet-forms';
<GrommetForm form={this.props.sectionLayoutForm} />
```

We love JSX, but sometimes you just end up writing too much of it.  The hope with this library is that you will save yourself some keystrokeys.  Pass the form renderer a blob of data describing the hierarchy of your form / fields and get back a rendered form whose state is managed automatically by Redux (or not, that part is up to you!).

## Field Types
All of the Grommet form components are supported.  When you create your field object, set the `type` property to one of the [Grommet Form Field types](https://github.com/RyanCCollins/grommet-forms/blob/master/src/FormFieldMap.js).

Each object in your fields array must contain a `type` and a `value` property, along with FormField properties such as `help` and `label`.  The `fieldProps` object can contain any of the props that the field type supports, including functions.  Refer to the [Grommet Docs website](https://grommet.github.io/docs/components) for a list of supported props.  You can also reference the [source code](https://github.com/RyanCCollins/grommet-forms/blob/master/src/GrommetForm/types.js) to see the PropTypes (Flow Types) that we use internally.
