const themeToggler = document.getElementById("theme-toggler")
const theme = document.body.dataset.theme

themeToggler.addEventListener("change", () => {
   if (theme === "light") theme = "dark";
   else theme = "light";
})
