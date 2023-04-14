const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
                plusjktsans: ["Plus Jakarta Sans"],
            },
            backgroundImage: {
                "my-bg": "url('assets/hero2.png')",
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
