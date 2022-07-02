/*! reasonable colors v0.4.0 | MIT License | https://github.com/matthewhowell/reasonable-colors */

/* ******

This is an example Tailwind configuration containing the reasonable colors.
It will generate the tailwind color utilities e.g. bg-azure-4 or text-emerald-2

Available values for colors (instead of tailwinds default blue, slate, …):
	gray,
	rose, raspberry, red, orange, cinnamon, amber, yellow, lime,
	chartreuse, green, emerald, aquamarine, teal, cyan, powder, sky
	cerulean, azure, blue, indigo, violet, purple, magenta, pink

Available values for the shades (instead of tailwinds defaults 200, 500, …) :
	1, 2, 3, 4, 5, 6

Minimum contrast can be inferred by the difference between two shade numbers

- Difference of 2: (3:1)
- Difference of 3: (4.5:1)
- Difference of 4: (7:1)

More information available at: https://www.reasonable.work/colors 

****** */
module.exports = {
    content: [],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#ffffff',
        gray: {
         1: '#f6f6f6',
         2: '#e2e2e2',
         3: '#8b8b8b',
         4: '#6f6f6f',
         5: '#3e3e3e',
         6: '#222222',
        },
        rose: {
         1: '#fff7f9',
         2: '#ffdce5',
         3: '#ff3b8d',
         4: '#db0072',
         5: '#800040',
         6: '#4c0023',
        },
        raspberry: {
          1: '#fff8f8',
          2: '#ffdddf',
          3: '#ff426c',
          4: '#de0051',
          5: '#82002c',
          6: '#510018',
        },
        red: {
         1: '#fff8f6',
         2: '#ffddd8',
         3: '#ff4647',
         4: '#e0002b',
         5: '#830014',
         6: '#530003',
        },
        orange: {
         1: '#fff8f5',
         2: '#ffded1',
         3: '#fd4d00',
         4: '#cd3c00',
         5: '#752100',
         6: '#401600',
        },
        cinnamon: {
         1: '#fff8f3',
         2: '#ffdfc6',
         3: '#d57300',
         4: '#ac5c00',
         5: '#633300',
         6: '#371d00',
        },
        amber: {
         1: '#fff8ef',
         2: '#ffe0b2',
         3: '#b98300',
         4: '#926700',
         5: '#523800',
         6: '#302100',
        },
        yellow: {
         1: '#fff9e5',
         2: '#ffe53e',
         3: '#9c8b00',
         4: '#7d6f00',
         5: '#463d00',
         6: '#292300',
        },
        lime: {
         1: '#f7ffac',
         2: '#d5f200',
         3: '#819300',
         4: '#677600',
         5: '#394100',
         6: '#222600',
        },
        chartreuse: {
         1: '#e5ffc3',
         2: '#98fb00',
         3: '#5c9b00',
         4: '#497c00',
         5: '#264500',
         6: '#182600',
        },
        green: {
          1: '#e0ffd9',
          2: '#72ff6c',
          3: '#00a21f',
          4: '#008217',
          5: '#004908',
          6: '#062800',
        },
        emerald: {
         1: '#dcffe6',
         2: '#5dffa2',
         3: '#00a05a',
         4: '#008147',
         5: '#004825',
         6: '#002812',
        },
        aquamarine: {
          1: '#daffef',
          2: '#42ffc6',
          3: '#009f78',
          4: '#007f5f',
          5: '#004734',
          6: '#00281b',
        },
        teal: {
         1: '#d7fff7',
         2: '#00ffe4',
         3: '#009e8c',
         4: '#007c6e',
         5: '#00443c',
         6: '#002722',
        },
        cyan: {
         1: '#c4fffe',
         2: '#00fafb',
         3: '#00999a',
         4: '#007a7b',
         5: '#004344',
         6: '#002525',
        },
        powder: {
          1: '#dafaff',
          2: '#8df0ff',
          3: '#0098a9',
          4: '#007987',
          5: '#004048',
          6: '#002227',
        },
        sky: {
          1: '#e3f7ff',
          2: '#aee9ff',
          3: '#0094b4',
          4: '#007590',
          5: '#00404f',
          6: '#001f28',
        },
        cerulean: {
          1: '#e8f6ff',
          2: '#b9e3ff',
          3: '#0092c5',
          4: '#00749d',
          5: '#003c54',
          6: '#001d2a',
        },
        azure: {
         1: '#e8f2ff',
         2: '#c6e0ff',
         3: '#008fdb',
         4: '#0071af',
         5: '#003b5e',
         6: '#001c30',
        },
        blue: {
          1: '#f0f4ff',
          2: '#d4e0ff',
          3: '#0089fc',
          4: '#006dca',
          5: '#00386d',
          6: '#001a39',
        },
        indigo: {
         1: '#f3f3ff',
         2: '#deddff',
         3: '#657eff',
         4: '#0061fc',
         5: '#00328a',
         6: '#001649',
        },
        violet: {
          1: '#f7f1ff',
          2: '#e8daff',
          3: '#9b70ff',
          4: '#794aff',
          5: '#2d0fbf',
          6: '#0b0074',
        },
        purple: {
          1: '#fdf4ff',
          2: '#f7d9ff',
          3: '#d150ff',
          4: '#b01fe3',
          5: '#660087',
          6: '#3a004f',
        },
        magenta: {
          1: '#fff3fc',
          2: '#ffd7f6',
          3: '#f911e0',
          4: '#ca00b6',
          5: '#740068',
          6: '#44003c',
        },
        pink: {
         1: '#fff7fb',
         2: '#ffdcec',
         3: '#ff2fb2',
         4: '#d2008f',
         5: '#790051',
         6: '#4b0030',
        }
      },
      extend: {
      },
    },
    plugins: [],
  }
  