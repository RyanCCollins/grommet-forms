# Grommet Forms
Collection of higher order components for constructing forms with Grommet UX

Coming soon!

# Inspiration
Forms can often be the most time consuming part of your project.  Tons of state? :check: complex hierarchies of data? Yep, you get the point.  What we found when we were building our forms was that the best method was to render the form from a data structure stored in your state tree and to alter that state through redux.  

Here's an example from a recent project of ours.

// In some reducer in your app
```
  sectionLayoutForm: {
    title: "Section Layout",
    error: null,
    id: 'section-layout-form',
    fields: [
      {
        label: "Flex Direction",
        help: "How should the content flow?  Row: left to right, Column: top to bottom.",
        name: "direction",
        type: "Select",
        options: ["row", "column"],
        value: 'row'
      },
      {
        label: "Justify Content",
        help: "Justify content to the left / right.",
        name: "justify",
        type: "Select",
        options: ["start", "center", "between", "end"],
        value: 'start'
      },
      {
        label: "Align Items",
        help: "Align items to the top / bottom.",
        name: "align",
        type: "Select",
        options: ["start", "center", "end", "baseline", "stretch"],
        value: 'start'
      },
      {
        label: "Padding",
        name: "pad",
        help: "How much space should the container add around content?",
        type: "Select",
        options: ["small", "medium", "large", "none"],
        value: 'small'
      },
      {
        label: "Full",
        help: "Should the section span the full width / height of the container.",
        name: "full",
        type: "Select",
        options: ["horizontal", "vertical", "true", "false"],
        value: 'false'
      },
      {
        label: 'Wrap',
        help: "Should the content ever wrap onto a new line?",
        name: 'wrap',
        type: 'Select',
        options: ["true", "false"],
        value: 'false'
      },
      {
        label: "Flex Basis",
        help: "The basis of inner items.  Prefer setting item size vs. flex-basis.",
        name: "basis",
        type: "Select",
        options: [
          "xsmall", "small",
          "medium", "large",
          "xlarge", "xxlarge",
          "full", "1/2",
          "1/3", "2/3",
          "1/4", "3/4"
        ],
        value: 'full'
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
All of the [Grommet form components](https://grommet.github.io/docs/components) are supported.  When you create your field object, set the `type` property to one of the [Grommet Form Field types](https://github.com/RyanCCollins/grommet-forms/blob/master/src/FormFieldMap.js).
