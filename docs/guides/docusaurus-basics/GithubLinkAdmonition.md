# GithubLinkAdmonition Component

This `GithubLinkAdmonition` React component renders an Admonition with a GitHub icon, a title, and a link to a specified GitHub resource. The link text and type of Admonition can be customized.

## Usage

To use the component, provide the required `link` to a GitHub repository or page, and optionally customize the `text`, `type`, `title`, and any additional `children` content.

### Props

| Prop     | Type       | Default  | Description                                                                                                   |
|----------|------------|----------|---------------------------------------------------------------------------------------------------------------|
| `link`   | `string`   | N/A      | **Required**. URL to the GitHub page you want to link to.                                                     |
| `text`   | `string`   | Same as `link` | Optional. Text to display as the clickable link.                                                             |
| `type`   | `AdmonitionType` | `"info"` | Optional. Type of Admonition to use, accepts `"info"`, `"tip"`, `"warning"`, `"note"`, or `"danger"`.       |
| `title`  | `string`   | `"Github"` | Optional. Title for the Admonition.                                                                          |
| `children` | `ReactNode` | N/A  | Optional. Additional content to display within the Admonition.                                               |

### Example

```jsx
import GithubLinkAdmonition from './GithubLinkAdmonition';

const MyComponent = () => {
  return (
    <div>
      <GithubLinkAdmonition
        link="https://github.com/your-repo"
        text="View the GitHub Repository"
        type="tip"
        title="Important GitHub Link"
      >
        <p>Check out this GitHub repository for more information!</p>
      </GithubLinkAdmonition>
    </div>
  );
};
```

### Styling

- **Icon**: Displays a GitHub icon from `/static/img/github.svg`.
- **Bold Label**: "URL" label appears bold for emphasis.
- **Type-Specific Admonition**: Different colors/styles will apply based on the `type` prop.

The `GithubLinkAdmonition` is helpful for prominently displaying GitHub links with contextual information. Use it in documentation or instructional pages where GitHub resources are referenced.