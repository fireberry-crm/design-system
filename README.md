# Fireberry Design System

`@fireberry/ds` is the React component library for [Fireberry](https://fireberry.com) apps. It provides the building blocks (buttons, form inputs, typography, icons, theming) so apps look native to the Fireberry platform out of the box.

- Storybook: https://design-system.fireberry.com
- Developer docs: https://developers.fireberry.com/docs/design-system
- npm: https://www.npmjs.com/package/@fireberry/ds
- GitHub: https://github.com/fireberry-crm/design-system

## Installation

```bash
npm install @fireberry/ds@latest
```

## Quick start

Wrap your app with `DSThemeContextProvider` once, then use the components anywhere inside it:

```tsx
import { Button, Color, DSThemeContextProvider, Typography, TypographyType, Variant } from '@fireberry/ds';

function App() {
  return (
    <DSThemeContextProvider isRtl={false}>
      <Typography type={TypographyType.h1}>Welcome</Typography>
      <Button label="Continue" color={Color.success} variant={Variant.primary} onClick={() => {}} />
    </DSThemeContextProvider>
  );
}
```

`DSThemeContextProvider` accepts a single optional prop, `isRtl: boolean` (defaults to `false`).

All exports come from the package root — there are no subpath imports such as `@fireberry/ds/button`. See [`src/index.ts`](src/index.ts) and [`src/components/index.ts`](src/components/index.ts) for the full list of public exports, and [Storybook](https://design-system.fireberry.com) for props and live examples.

## Theming

```tsx
import { useDSThemeContext } from '@fireberry/ds';

function MyComponent() {
  const { theme, isRtl, palette } = useDSThemeContext();
  return <div style={{ color: palette.green5 }}>...</div>;
}
```

`DSPalette` is also exported as a value if you need access to the palette outside React.

## Development

To create a new component boilerplate run

```bash
npm run create-component
```

Fill the required arguments and start developing. Good luck!

Common scripts:

```bash
npm run storybook       # start Storybook locally
npm run build-storybook # build the static Storybook site
npm run type-check      # type-check the package
npm run build           # build the package for publishing
```
