module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '50%': '50%',
       '16': '4rem',
      },
    
        transitionDelay: {
         '0.1':'0.1s',
          '0.2':'0.2s',
          '0.5':'0.5s',
         '0': '0ms',
         '2000': '2000ms',
        },
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
      
      backgroundImage: theme => ({
        'hero-pattern': "url(../images/bg2.png)",
        'section3':"url(../images/bg4.png)",
        'headerbg':"url(../images/bg.png)",
        'circle':"url(../images/circle1.png)",
        'section2':"url(../images/bg3.png)",
        'circle2':"url(../images/circle2.png)"
       }),
        fontFamily: {
          'proximaNova': ['ProximaNova'],
          'body': ['SourceSansPro'],
        },
        zIndex: {
          '20':20,
          '10':10,
          '1': 1,
        },

        maxWidth: {
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
          '300': '300px',
        },
        backgroundColor: theme => ({
          'bgred': '#BF0A30',
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
          'bgw': '#FFFFFF',
          'bgg':'#F8F8F8'
        }),

        textColor: {
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
          'cblue': '#002868',
          'cgrey': '#333333',
          'cred': '#BF0A30',
          'white': '#FFFFFF',
          'tgrey': '#949498',
        },
        letterSpacing: {
          '2': '2px',
          '-0.12': "-0.12px"
        },
        lineHeight: {
          '20': '20px',
          '25': '25px',
          '50': '50px',
          'extra-loose': '2.5',
          '12': '3rem',
        },
        fontSize: {
          sm: ['14px', '20px'],
          base: ['16px', '24px'],
          lg: ['20px', '28px'],
          xl: ['24px', '32px'],
          '22': '22px',
          '24': '24px',
          '16': '16px',
          '18': '18px',
          '14': '14px',
          '12': '12px',
          '34': '34px',
          '48': '48px',
          '26': '26px',
        },
        borderRadius: {

          'full': '9999px',
          '4': '4px',
          '2': '2px'
        },
        boxShadow: {
          'cs': '0 0 40px rgba(0, 0, 0.25)',
          'dd': '0px 8px 16px 0px rgba(0,0,0,0.2)',
          DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        borderColor: theme => ({
          'primary': '#3490dc',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
          'logored': '#ab0427',
          'bogrey': '#B6B6B6',
          'white': '#FFFFFF',
          'sl': '#979797',
          'bb': '#002868',
        }),
        inset: {
          '-50':'-50px',
          '-40':'-40px',
          '3/7':'45%',
          '80':'80px',
          '-20':'-20px',
          '3/4':'75%',
          '15':'15px',
          '20':'20px',
          '10':'10px',
          '3550':'3550px',
          '100': '100px',
          '650': '650px',
          '0': 0,
          '50': '50px',
          '270': '270px',
          '64': '16rem',
          '1/5': '20%',
          '1/2': '50%',
        },
        borderWidth: {
          '1.5': '1.5px',
          '1': '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
          '10': '10px'
        },

        spacing: {
          '90':'90px',
          '57':'57px',
          '3':'3px',
          '150':'150px',
          '800':'800px',
          '170':'170px',
          '748':'748px',
          '0':'0px',
          '985':'985px',
          '1266': '1266px',
          '1240': '1240px',
          '280': '280px',
          '400': '400px',
          '5': '5px',
          '2': '2px',
          '35': '35',
          '370': '370px',
          '250': '250px',
          '260': '260px',
          '320': '320px',
          '180': '180px',
          '15': '15px',
          '440': '440px',
          '240': '240px',
          'full': '100%',
          '46': '46px',
          '92': '92px',
          '140': '140px',
          '700': '700px',
          '620': '620px',
          '640': '640px',
          '310': '310px',
          '10': '10px',
          '900': '900px',
          '350': '350px',
          '12': '12px',
          '130': '130px',
          '740': '740',
          '460': '460px',
          '16': '16px',
          '60': '60px',
          'full': '100%',
          '300': '300px',
          '20': '20px',
          '9': '9px',
          '950': '950px',
          FS: "1200px",
          nvm: "60px",
          sm: '8px',
          md: '16px',
          lg: '24px',
          xl: '48px',
          '750': '750px',
          '50': '50px',
          '200': '200px',
          '505': '505px',
          '70': '70px',
          '265': '265px',
          '26': '26px',
          '40': '40px',
          '83': '83px',
          '55': '55px',
          '100': '100px',
          '270': '270px',
          '30': '30px',
        },
        extend: {
          translate: {
            '1/7': '14.2857143%',
            '2/7': '28.5714286%',
            '3/7': '42.8571429%',
            '4/7': '57.1428571%',
            '5/7': '71.4285714%',
            '6/7': '85.7142857%',
            '1/2': '50%',
          }
        },
        variants: {
          extend: {},
        },
        plugins: [],
      }
    }