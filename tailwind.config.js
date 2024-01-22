/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*"],
  theme: {
    extend: {
      colors:{
        "primary":"#417F56",
        "shade":{
          100:"#396F4B",
          200:"#315F41",
          300:"#294F36",
          400:"#21402B",
          500:"#183020",
          600:"#102016",
          700:"#08100B",
        },
        "tint":{
          100:"#E5F2E9",
          200:"#CAE4D3",
          300:"#B0D7BD",
          400:"#96C9A7",
          500:"#7CBC91",
          600:"#61AE7B",
          700:"#4E9968",
        },
        "gray":{
          100:"#F9F9F9",
          200:"#E1E1E1",
          300:"#EDEDED",
          400:"#CBCBCB",
          500:"#ADADAD",
          600:"#757575",
          700:"#717171",
          800:"#353535",
        },
        "black":"#0C0C0C",
        "error":{
          DEFAULT:"#C30000",
          100:"#ED2E2E",
          200:"#FFF2F2"
        },
        "success":{
          DEFAULT:"#00966D",
          100:"#00BA88",
          200:"#F3FDFA"
        },
        "warning":{
          DEFAULT:"#A9791C",
          100:"#F4B740",
          200:"#FFF8E1"
        },
      },
      backgroundImage:{
        "gallery1":"url(../images/home/gallery1.jpg)",
        "gallery2":"url(../images/home/gallery2.jpg)",
        "gallery3":"url(../images/home/gallery3.jpg)",
        "gallery4":"url(../images/home/gallery4.jpg)",
        "gallery5":"url(../images/home/gallery5.jpg)",
        "gallery6":"url(../images/home/gallery6.jpg)",
        "gallery7":"url(../images/home/gallery7.jpg)",
        "mobileMenu":"linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(../images/home/menu.jpg)",
        "header":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(../images/home/home.jpg)",
        "header-menu":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(../images/menu/header.jpg)",
        "section":"linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(../images/home/section.jpg)",
        "footer":"linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(../images/home/footer.jpg)",
      },
      fontFamily:{
        "estedad":"Estedad",
        "estedadMedium":"EstedadMedium",
        "estedadSemiBold":"EstedadSemiBold",
        "estedadBold":"EstedadBold",
      },
      spacing:{
        "30":"7.5rem"
      },
      boxShadow: {
        "2":"0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        "4":"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "6":"0px 6px 6px 0px rgba(0, 0, 0, 0.25)",
        "8":"0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
        "12":"0px 12px 12px 0px rgba(0, 0, 0, 0.25)",
        "16":"0px 16px 16px 0px rgba(0, 0, 0, 0.25)",
        "subMenu":"0px 0px 6px 0px rgba(0, 0, 0, 0.15)",
        "menu":"0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
        "card":"0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)",
        "content":"0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 11px 11px 0px rgba(0, 0, 0, 0.09), 0px 24px 14px 0px rgba(0, 0, 0, 0.05), 0px 42px 17px 0px rgba(0, 0, 0, 0.01), 0px 66px 18px 0px rgba(0, 0, 0, 0.00)",
      },
      fontSize: {
        "2xs": ['10px', {
          lineHeight: '14px',
        }],
      },
      borderRadius: {
        "4xl":'2rem',
        "5xl":'4rem'
      },
      container: {
        center:true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem',
        },
      },
    },
    screens: {
      'xs':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function({addVariant}){
      addVariant('child','&>*');
      addVariant('child-hover','&>*:hover');
    }
  ],
}