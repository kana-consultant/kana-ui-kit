import type { Preview } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/styles/tokens.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    a11y: { test: 'todo' },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
  ],
}

export default preview
