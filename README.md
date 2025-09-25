# Fireberry Design System

Fireberry's React components. Use them to build your app.
https://design-system.fireberry.com/

## Installation

With npm:

```bash
npm install @fireberry/ds
```

## Usage

1. Go to `App.js` file, import `DSThemeContextProvider` from `@fireberry/ds` package and wrap your function with it (use isRtl flag for RTL support):

```tsx
import { DSThemeContextProvider } from '@fireberry/ds';

function App() {
    return (
        <DSThemeContextProvider isRtl={isRtl}>
            {...}
        </DSThemeContextProvider>
    );
  }
```

2. Import your desired component from `@fireberry/ds` and use it as mentioned in Fireberry Design System. e.g.,

```tsx
import { Button } from '@fireberry/ds';

function Component() {
  return <Button label="Button" color="success" variant="primary" onClick={() => {}} />;
}
```

## Development

To create a new component boilerplate run

```bash
npm run create-component
```

Fill the required arguments and start developing. Good luck!
