import '../styles/globals.css'

// Setup FontAwesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas)

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'black',
    values: [
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
}
