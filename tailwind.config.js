/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_layouts/post.html',
    '_posts/**/*.html',
    '*.markdown',
    'index.html',
    'about.html',
    'assets/css/styles.css',
    '_layouts/default.html',
],
theme: {
  extend: {
    margin: {
      'p': '2%',
      'p2': '4%',
    }
  }
},
  plugins: [],
}

