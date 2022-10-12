const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',

    
  ],


  
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: '#435174',
        links: {
          txt: '#435174',
          hover_txt: '#435174',
        },
        loading_spinner: '#435174',
        popups: {
          bg: colors.white,
          txt: '#435174',
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.white,
          bg: '#435174',
          border: colors.white,
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: '#435174',
          bg: colors.white,
          border: colors.slate[200],
          hover_txt: '#435174',
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.white,
          bg: '#435174',
          border: '#435174',
          hover_txt: colors.white,
          hover_bg: colors.blue[700],
          hover_border: '#435174',
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: '#435174',
        txt_input: {
          txt: '#435174',
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: '#435174',
          focus_bg: colors.slate[50],
          focus_border: '#435174',
          placeholder_txt: '#435174',
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.white,
          bg: '#435174',
        },

        // Mint widget
        token_preview: '#435174',
      },
    },
  },
  variants: {},
  plugins: [],
};
