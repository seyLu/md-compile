const themeToggler = document.getElementById("theme-toggler");
const bodyDataset = document.body.dataset;

const githubMarkdownCSS = document.getElementById("github-markdown-css");
const pathToCSS = "/static/css"

themeToggler.addEventListener("change", () => {
   if (bodyDataset.theme === "light") {
      bodyDataset.theme = "dark";
      githubMarkdownCSS.href = `${pathToCSS}/github-markdown-dark.min.css`;
   } else {
      bodyDataset.theme = "light";
      githubMarkdownCSS.href = `${pathToCSS}/github-markdown-light.min.css`;
   }
})
