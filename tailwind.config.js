const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        angkor: ['Angkor', 'sans-serif'],
        battambang: ['Battambang', 'sans-serif'],
        bayon: ['Bayon', 'sans-serif'],
        bokor: ['Bokor', 'sans-serif'],
        chenla: ['Chenla', 'sans-serif'],
        content: ['Content', 'sans-serif'],
        dangrek: ['Dangrek', 'sans-serif'],
        fasthand: ['Fasthand', 'sans-serif'],
        freehand: ['Freehand', 'sans-serif'],
        hanuman: ['Hanuman', 'sans-serif'],
        khmer: ['Khmer', 'sans-serif'],
        kohsantepheap: ['Koh Santepheap', 'sans-serif'],
        koulen: ['Koulen', 'sans-serif'],
        metal: ['Metal', 'sans-serif'],
        moul: ['Moul', 'sans-serif'],
        moulpali: ['Moulpali', 'sans-serif'],
        nokora: ['Nokora', 'sans-serif'],
        odormeanchey: ['Odor Mean Chey', 'sans-serif'],
        preahvihear: ['Preahvihear', 'sans-serif'],
        siemreap: ['Siemreap', 'sans-serif'],
        suwannaphum: ['Suwannaphum', 'sans-serif'],
        taprom: ['Taprom', 'sans-serif'],
        // ------above are Khmer fonts------
        arvo: ['Arvo', 'serif'],
        cabin: ['Cabin', 'sans-serif'],
        droidSans: ['Droid Sans', 'sans-serif'],
        greatvibes: ['Great Vibes', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        playfairDisplay: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        ptSans: ['PT Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
        zillaSlab: ['Zilla Slab', 'serif'],
      },
      keyframes: {
        widthChange: {
          '0%': { width: '0px' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        widthChange: 'widthChange 1s ease-in-out',
      },
    },
  },
  darkMode: 'class', // Enable dark mode
  plugins: [
    flowbite.plugin(),
  ],
};