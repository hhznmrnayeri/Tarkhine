/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#417F56",
        shade: {
          100: "#396F4B",
          200: "#315F41",
          300: "#294F36",
          400: "#21402B",
          500: "#183020",
          600: "#102016",
          700: "#08100B",
        },
        tint: {
          100: "#E5F2E9",
          200: "#CAE4D3",
          300: "#B0D7BD",
          400: "#96C9A7",
          500: "#7CBC91",
          600: "#61AE7B",
          700: "#4E9968",
        },
        gray: {
          100: "#F9F9F9",
          200: "#E1E1E1",
          300: "#EDEDED",
          400: "#CBCBCB",
          500: "#ADADAD",
          600: "#757575",
          700: "#717171",
          800: "#353535",
        },
        black: "#0C0C0C",
        error: {
          DEFAULT: "#C30000",
          100: "#ED2E2E",
          200: "#FFF2F2",
        },
        success: {
          DEFAULT: "#00966D",
          100: "#00BA88",
          200: "#F3FDFA",
        },
        warning: {
          DEFAULT: "#A9791C",
          100: "#F4B740",
          200: "#FFF8E1",
        },
      },
      backgroundImage: {
        "mobileMenu":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(assets/images/home/mobileMenu.webp)",
        "footer":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(assets/images/home/footer.webp)",
        "header":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/home/home.webp)",
        "header-slide1":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/home/header1.webp)",
        "header-slide2":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/home/header2.webp)",
        "section":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(assets/images/home/section.webp)",
        "slide__gallery1":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery1.webp)",
        "slide__gallery2":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery2.webp)",
        "slide__gallery3":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery3.webp)",
        "slide__gallery4":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery4.webp)",
        "slide__gallery5":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery5.webp)",
        "slide__gallery6":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery6.webp)",
        "slide__gallery7":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery7.webp)",
        "slide__gallery8":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery8.webp)",
        "slide__gallery9":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery9.webp)",
        "slide__gallery10":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery10.webp)",
        "slide__gallery11":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery11.webp)",
        "slide__gallery12":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery12.webp)",
        "slide__gallery13":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery13.webp)",
        "slide__gallery14":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery14.webp)",
        "slide__gallery15":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery15.webp)",
        "slide__gallery16":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery16.webp)",
        "slide__gallery17":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery17.webp)",
        "slide__gallery18":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery18.webp)",
        "slide__gallery19":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery19.webp)",
        "slide__gallery20":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery20.webp)",
        "slide__gallery21":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery21.webp)",
        "slide__gallery22":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery22.webp)",
        "slide__gallery23":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery23.webp)",
        "slide__gallery24":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery24.webp)",
        "slide__gallery25":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery25.webp)",
        "slide__gallery26":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery26.webp)",
        "slide__gallery27":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery27.webp)",
        "slide__gallery28":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery28.webp)",
        "slide__gallery29":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery29.webp)",
        "slide__gallery30":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery30.webp)",
        "slide__gallery31":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 50%), url(assets/images/home/gallery31.webp)",
        "header-representation":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/representation/header.webp)",
        "map": "url(assets/images/buy/map.webp)",
        "header-about":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/about/header.webp)",
        "header-contact":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/contact/header.webp)",
        "header-question":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/question/question.webp)",
        "header-privacy":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/question/privacy.webp)",
        "header-rule":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url(assets/images/question/rule.webp)",
        "payment": "url(assets/images/buy/bgSuccess.webp)",
        "buy-empty": "url(assets/images/buy/Empty.webp)",
      },
      fontFamily: {
        estedad: "Estedad",
        estedadMedium: "EstedadMedium",
        estedadSemiBold: "EstedadSemiBold",
        estedadBold: "EstedadBold",
      },
      spacing: {
        30: "7.5rem",
      },
      boxShadow: {
        2: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        subMenu: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)",
        card: "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0,   0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)",
        menu: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
        bank: "0px 0px 4px 0px #7CBC91",
      },
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "14px",
          },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
