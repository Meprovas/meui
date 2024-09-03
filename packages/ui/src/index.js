const plugin = require('tailwindcss/plugin');

const meui = plugin.withOptions(
  function (options = {}) {
    return function ({ matchUtilities, theme }) {
      // Shadows
      matchUtilities(
        {
          'me-shadow': (value) => {
            return {
              'box-shadow': `${value} ${value} rgba(0,0,0,1)`,
            };
          },
        },
        {
          type: 'shadow',
          values: theme('MeShadow'),
          variants: ['hover', 'focus'],
        },
      );

      // Border
      matchUtilities(
        {
          'me-border': (value) => {
            return {
              border: `${value} solid rgba(0,0,0,1)`,
            };
          },
          'me-border-idle': (value) => {
            return {
              border: `${value} solid rgba(0,0,0,0)`,
            };
          },
        },
        {
          values: theme('MeBorder'),
          variants: ['hover', 'focus'],
        },
      );
    };
  },
  function (options = {}) {
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#E5EFFB',
              100: '#CFE1F7',
              200: '#9FC3EF',
              300: '#6EA5E7',
              400: '#3E87DF',
              500: '#206BC4',
              600: '#1A559E',
              700: '#134076',
              800: '#0D2B4F',
              900: '#07182C',
              950: '#040C16',
            },
            secondary: '#FFFFFC',
            accent: {
              50: '#FCEBE9',
              100: '#F9DBD7',
              200: '#F3B3AA',
              300: '#EE8E82',
              400: '#E86A59',
              500: '#E2442F',
              600: '#C02E1B',
              700: '#8F2214',
              800: '#5E170D',
              900: '#310C07',
              950: '#160503',
            },
            danger: {
              50: '#FDE8E9',
              100: '#FBD0D2',
              200: '#F7A6AA',
              300: '#F3777D',
              400: '#EF4851',
              500: '#EB1C26',
              600: '#C0111A',
              700: '#910D13',
              800: '#62090D',
              900: '#2F0406',
              950: '#170203',
            },
            warning: {
              50: '#FFF9E5',
              100: '#FFF4CC',
              200: '#FFE999',
              300: '#FFDE66',
              400: '#FFD333',
              500: '#FFC901',
              600: '#CCA000',
              700: '#997800',
              800: '#665000',
              900: '#332800',
              950: '#191400',
            },
            success: {
              50: '#E3FCF2',
              100: '#C3F9E2',
              200: '#87F2C6',
              300: '#4BECA9',
              400: '#17DE8B',
              500: '#11A365',
              600: '#0D8151',
              700: '#0A613D',
              800: '#074129',
              900: '#032014',
              950: '#02120C',
            },
            info: {
              50: '#F0FEFF',
              100: '#E5FEFF',
              200: '#CCFCFF',
              300: '#B3FBFF',
              400: '#99FAFF',
              500: '#69d2e7',
              600: '#33F5FF',
              700: '#00DAE6',
              800: '#009199',
              900: '#00494D',
              950: '#002224',
            },
            gray: {
              100: '#FDFCFC',
              200: '#E7E5E4',
              300: '#CCC8C7',
              400: '#AAA4A1',
              500: '#78716C',
              600: '#6E6763',
              700: '#5E5855',
              800: '#514B48',
              900: '#332F2E',
              950: '#282524',
            },
            red: {
              50: '#FEF1F1',
              100: '#FDE2E2',
              200: '#FBC1C1',
              300: '#F9A4A4',
              400: '#F78282',
              500: '#F56565',
              600: '#F12323',
              700: '#C40D0D',
              800: '#810808',
              900: '#430404',
              950: '#220202',
            },
            orange: {
              50: '#FEF4EB',
              100: '#FEEBDC',
              200: '#FDD4B5',
              300: '#FCC092',
              400: '#FBAC6F',
              500: '#FA984B',
              600: '#F8720C',
              700: '#BD5505',
              800: '#7C3803',
              900: '#411D02',
              950: '#1E0D01',
            },
            amber: {
              50: '#FEFAE6',
              100: '#FEF5D2',
              200: '#FDEAA1',
              300: '#FBE074',
              400: '#FAD542',
              500: '#F9CB15',
              600: '#D1A805',
              700: '#9F8004',
              800: '#685403',
              900: '#372C01',
              950: '#191401',
            },
            yellow: {
              50: '#FFF9E5',
              100: '#FFF4CC',
              200: '#FFE999',
              300: '#FFDE66',
              400: '#FFD333',
              500: '#FFC700',
              600: '#CCA000',
              700: '#997800',
              800: '#665000',
              900: '#332800',
              950: '#191400',
            },
            lime: {
              50: '#F7FDED',
              100: '#ECFAD7',
              200: '#D9F4AE',
              300: '#C6EF86',
              400: '#B4E95D',
              500: '#A2E435',
              600: '#84C61A',
              700: '#639414',
              800: '#42630D',
              900: '#213107',
              950: '#121B04',
            },
            green: {
              50: '#EEFCF3',
              100: '#DDF8E7',
              200: '#B6F1CC',
              300: '#94EAB4',
              400: '#6EE399',
              500: '#4ADC7F',
              600: '#26C560',
              700: '#1D9649',
              800: '#136230',
              900: '#0A3319',
              950: '#051A0D',
            },
            emerald: {
              50: '#EFFAF3',
              100: '#DFF6E8',
              200: '#C4EED4',
              300: '#A4E5BD',
              400: '#85DBA6',
              500: '#68D391',
              600: '#38C26D',
              700: '#2B9252',
              800: '#1D6338',
              900: '#0E2F1B',
              950: '#07180D',
            },
            teal: {
              50: '#EAFBF8',
              100: '#D5F6F2',
              200: '#ABEDE4',
              300: '#80E5D7',
              400: '#56DCCA',
              500: '#2DD3BE',
              600: '#23A997',
              700: '#1A7F71',
              800: '#12544B',
              900: '#092A26',
              950: '#041513',
            },
            cyan: {
              50: '#E7FAFD',
              100: '#D5F6FC',
              200: '#A5EDF8',
              300: '#7BE4F4',
              400: '#4CDAF0',
              500: '#22D2ED',
              600: '#10AEC6',
              700: '#0C8497',
              800: '#085763',
              900: '#042E34',
              950: '#021518',
            },
            sky: {
              50: '#F0F9FF',
              100: '#E0F2FF',
              200: '#C2E6FF',
              300: '#9ED7FF',
              400: '#80CAFF',
              500: '#61BCFF',
              600: '#1A9FFF',
              700: '#007AD1',
              800: '#00538F',
              900: '#002A47',
              950: '#001524',
            },
            blue: {
              50: '#F0F0FF',
              100: '#DCDBFF',
              200: '#B9B8FF',
              300: '#9B99FF',
              400: '#7875FF',
              500: '#5551FF',
              600: '#130FFF',
              700: '#0300CC',
              800: '#020085',
              900: '#010042',
              950: '#010024',
            },
            indigo: {
              50: '#F0F2FE',
              100: '#E7E9FE',
              200: '#CED3FD',
              300: '#B6BDFB',
              400: '#99A3FA',
              500: '#828DF9',
              600: '#384BF5',
              700: '#0B1FDB',
              800: '#071592',
              900: '#040A49',
              950: '#020522',
            },
            violet: {
              50: '#FAF5FF',
              100: '#F4EBFF',
              200: '#EAD6FF',
              300: '#DFC2FF',
              400: '#D5ADFF',
              500: '#CB99FF',
              600: '#A047FF',
              700: '#7600F5',
              800: '#4F00A3',
              900: '#270052',
              950: '#140029',
            },
            purple: {
              50: '#F7F0FE',
              100: '#F2E6FE',
              200: '#E6CEFD',
              300: '#D9B5FC',
              400: '#CC9DFB',
              500: '#BE83FA',
              600: '#993BF7',
              700: '#7309DD',
              800: '#4D0693',
              900: '#26034A',
              950: '#120122',
            },
            fuchsia: {
              50: '#FCF0FE',
              100: '#FAE2FD',
              200: '#F5CAFC',
              300: '#F0ADFB',
              400: '#EC94F9',
              500: '#E779F8',
              600: '#DB33F4',
              700: '#B60BD0',
              800: '#7B078D',
              900: '#3B0444',
              950: '#1E0222',
            },
            pink: {
              50: '#FDEDF5',
              100: '#FBDAEB',
              200: '#F7B6D6',
              300: '#F291C2',
              400: '#EE6DAD',
              500: '#EA4898',
              600: '#DC197A',
              700: '#A5135C',
              800: '#6E0D3D',
              900: '#37061F',
              950: '#1B030F',
            },
            rose: {
              50: '#FEF0F2',
              100: '#FEE2E6',
              200: '#FDC4CD',
              300: '#FBA7B4',
              400: '#FA8E9F',
              500: '#F97084',
              600: '#F62D4B',
              700: '#CE0926',
              800: '#890619',
              900: '#45030D',
              950: '#220106',
            },
          },
        },
        MeShadow: {
          DEFAULT: '0.1rem',
          sm: '0.2rem',
          md: '0.3rem',
          lg: '0.4rem',
          xl: '0.5rem',
        },
        MeBorder: {
          DEFAULT: '1px',
          0.5: '0.5px',
          1: '1px',
          1.5: '1.5px',
          2: '2px',
          2.5: '2.5px',
          3: '3px',
          3.5: '3.5px',
          4: '4px',
          5: '4.5px',
        },
      },
    };
  },
);

module.exports = meui;
