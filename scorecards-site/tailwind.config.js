/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const baseFontSize = 10

/**
 * @typedef {{
 *  from: number
 *  to: number
 *  increment: number
 * }}
 * PxToRemObject
 */

/**
 * Convert a pixel value to rems.
 * @param {number} base Base font size in pixels.
 * @param {number} px Pixel size to convert.
 * @returns {string} Size in rems.
 */
const rem = (base, px) => `${px / base}rem`

/**
 * Map pixel values to their equivilent rem values.
 * @param {number} base Base font size in pixels.
 * @param  {...number|PxToRemObject} items
 * @returns {object}
 */
const pxToRem = (base, ...items) => {
  const pxs = {}

  for (const item of items) {
    if (typeof item === 'number') {
      pxs[item] = rem(base, item)
    } else {
      const { from, to, increment } = item

      for (let px = from; px <= to; px += increment) {
        pxs[px] = rem(base, px)
      }
    }
  }

  return pxs
}

module.exports = {
  // mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,vue}',
      './components/*.{js,vue}',
      './modules/**/*.{js,vue}',
    ],
    options: {
      safelist: [
        /^delay-/,
        'text-center',
        'text-right',
        'text-left',
        'fixed',
        'md:text-center',
        'md:text-left',
      ],
    },
  },
  // plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    // ...
    container: false,
  },
  theme: {
    spacing: {
      0: 0,
      ...pxToRem(
        baseFontSize,
        { from: 1, to: 25, increment: 1 },
        { from: 26, to: 100, increment: 2 },
        { from: 20, to: 200, increment: 5 },
        { from: 100, to: 200, increment: 8 },
        { from: 100, to: 250, increment: 10 },
        { from: 200, to: 500, increment: 25 },
        38,
        64,
        27,
        42,
        112,
        118,
        120,
        122,
        128,
        152,
        158,
        192,
        216,
        223,
        250,
        298,
        322,
        333,
        345
      ),
    },
    fontSize: {
      ...pxToRem(
        baseFontSize,
        128,
        120,
        90,
        81,
        58,
        54,
        50,
        44,
        38,
        36,
        33,
        25,
        24,
        23,
        22,
        21,
        20,
        19,
        16,
        15,
        14,
        13,
        12,
        11
      ),
    },
    colors: {
      black: {
        DEFAULT: '#000000',
        overlay: 'rgba(0, 0, 0, 0.12)',
      },
      blue: {
        medium: '#6349FF',
      },
      purple: {
        light: 'rgba(99, 73, 255, 1)',
        dark: '#2A1E71',
      },
      orange: {
        medium: '#FFC398',
        dark: '#793030',
      },
      pastel: {
        orange: '#FFEAD7',
        light: 'rgba(255, 234, 215, 1)',
        neutral: '#E9E9E9',
        blue: '#DDEFF1',
      },
      gray: {
        greyBkg: 'rgba(241, 233, 229, 1)',
        light: '#E9E9E9',
        medium: '#AFAFAF',
        dark: '#444444',
      },
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#FFFFFF',
    },
    lineHeight: {
      none: 0,
      ...pxToRem(
        baseFontSize,
        98,
        64,
        60,
        53,
        49,
        48,
        43,
        44,
        42,
        40,
        32,
        30,
        29,
        26,
        23,
        22,
        18,
        16,
        17,
        15,
        13
      ),
    },
    minHeight: {
      screen: '100vh',
      ...pxToRem(baseFontSize, 440, 400, 480, 700, 320, 180, 146),
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '20px',
      full: '9999px',
      large: '12px',
    },
    extend: {
      width: {
        832: '832px',
      },
      maxWidth: {
        0: '0',
        full: '100%',
        '1/2': '50%',
        none: 'none',

        '15em': '15em',
        '14%': '14%',
        122: '122px',
        315: '315px',
        334: '334px',
        352: '352px',
        440: '440px',
        500: '500px',
        690: '690px',
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        800: '800ms',
      },
    },
  },
}