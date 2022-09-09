/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'd9':'#D9D9D9',
        'greeen':'#008000',
        'e1':'#E1E1E1',
        'ebe':'#EBEBEB',
        'f3':'#F3F1F7',
        'spot':'#1DB954'
      },
      fontFamily:{
        'poppins':['Poppins','Sans']
      },
      backgroundImage: {
        'recycle': "url('../src/img/recycle2.jpg')",
        'team': "url('../src/img/Rectangle.png')",
        'pp':"url('../src/img/pp.jpeg')"
      },
      spacing:{
        '250':'250px',
        '300':'300px',
        '500':'500px',
        '600':'600px',
        '700':'700px',
        '800':'800px',
        '900':'900px',
        '100':'150px',
        '180':'180px',
        '200':'200px',
        '40':'40px',
        '50':'50px',
        '60':'60px',
      }
    },
  },
  plugins: [],
}