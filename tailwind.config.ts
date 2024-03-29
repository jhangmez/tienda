import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#C00100',
          onPrimary: '#FFFFFF',
          primaryContainer: '#FFDAD4',
          onPrimaryContainer: '#410000',
          primaryFixed: '#FFDAD4',
          onPrimaryFixed: '#410000',
          primaryFixedDim: '#FFB4A8',
          onPrimaryFixedVariant: '#930100',
          secondary: '#775651',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#FFDAD4',
          onSecondaryContainer: '#2C1512',
          secondaryFixed: '#FFDAD4',
          onSecondaryFixed: '#2C1512',
          secondaryFixedDim: '#E7BDB6',
          onSecondaryFixedVariant: '#5D3F3B',
          tertiary: '#705C2E',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#FBDFA6',
          onTertiaryContainer: '#251A00',
          tertiaryFixed: '#FBDFA6',
          onTertiaryFixed: '#251A00',
          tertiaryFixedDim: '#DEC48C',
          onTertiaryFixedVariant: '#564419',
          error: '#BA1A1A',
          onError: '#FFFFFF',
          errorContainer: '#FFDAD6',
          onErrorContainer: '#410002',
          outline: '#857370',
          background: '#FFFBFF',
          onBackground: '#201A19',
          surface: '#FFF8F6',
          onSurface: '#201A19',
          surfaceVariant: '#F5DDDA',
          onSurfaceVariant: '#534341',
          inverseSurface: '#362F2E',
          inverseOnSurface: '#FBEEEC',
          inversePrimary: '#FFB4A8',
          shadow: '#000000',
          surfaceTint: '#C00100',
          outlineVariant: '#D8C2BE',
          scrim: '#000000',
          surfaceContainerHighest: '#EDE0DD',
          surfaceContainerHigh: '#F3E5E3',
          surfaceContainer: '#F8EBE9',
          surfaceContainerLow: '#FEF1EE',
          surfaceContainerLowest: '#FFFFFF',
          surfaceBright: '#FFF8F6',
          surfaceDim: '#E4D7D5'
        },
        dark: {
          primary: '#FFB4A8',
          onPrimary: '#690100',
          primaryContainer: '#930100',
          onPrimaryContainer: '#FFDAD4',
          primaryFixed: '#FFDAD4',
          onPrimaryFixed: '#410000',
          primaryFixedDim: '#FFB4A8',
          onPrimaryFixedVariant: '#930100',
          secondary: '#E7BDB6',
          onSecondary: '#442925',
          secondaryContainer: '#5D3F3B',
          onSecondaryContainer: '#FFDAD4',
          secondaryFixed: '#FFDAD4',
          onSecondaryFixed: '#2C1512',
          secondaryFixedDim: '#E7BDB6',
          onSecondaryFixedVariant: '#5D3F3B',
          tertiary: '#DEC48C',
          onTertiary: '#3E2E04',
          tertiaryContainer: '#564419',
          onTertiaryContainer: '#FBDFA6',
          tertiaryFixed: '#FBDFA6',
          onTertiaryFixed: '#251A00',
          tertiaryFixedDim: '#DEC48C',
          onTertiaryFixedVariant: '#564419',
          error: '#FFB4AB',
          onError: '#690005',
          errorContainer: '#93000A',
          onErrorContainer: '#FFDAD6',
          outline: '#A08C89',
          background: '#201A19',
          onBackground: '#EDE0DD',
          surface: '#181211',
          onSurface: '#D0C4C2',
          surfaceVariant: '#534341',
          onSurfaceVariant: '#D8C2BE',
          inverseSurface: '#EDE0DD',
          inverseOnSurface: '#201A19',
          inversePrimary: '#C00100',
          shadow: '#000000',
          surfaceTint: '#FFB4A8',
          outlineVariant: '#534341',
          scrim: '#000000',
          surfaceContainerHighest: '#3B3332',
          surfaceContainerHigh: '#2F2827',
          surfaceContainer: '#251E1D',
          surfaceContainerLow: '#201A19',
          surfaceContainerLowest: '#120D0C',
          surfaceBright: '#3F3736',
          surfaceDim: '#181211'
        }
      },
      opacity: {
        '8': '.08',
        '12': '.12',
        '16': '.16'
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: '#C00100',
            secondary: '#775651'
          }
        },
        dark: {
          // ...
          colors: {
            primary: '#FFB4A8',
            secondary: '#E7BDB6'
          }
        }
        // ... custom themes
      }
    })
  ]
}
export default config
