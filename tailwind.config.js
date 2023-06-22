/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_layouts/post.html',
    '_posts/**/*.html',
    '*.markdown',
    'index.html',
    'about.html'
],
theme: {
    extend: {},
  },
  plugins: [],
}

