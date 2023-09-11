const themeToggler = document.getElementById("theme-toggler");
const bodyDataset = document.body.dataset;

const ghmdCss = document.getElementById("github-markdown-css");
const ghmdCssCdn = "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown"

themeToggler.addEventListener("change", () => {
   if (bodyDataset.theme === "light") {
      bodyDataset.theme = "dark";
      ghmdCss.href = `${ghmdCssCdn}-dark.min.css`;
   } else {
      bodyDataset.theme = "light";
      ghmdCss.href = `${ghmdCssCdn}-light.min.css`;
   }
})
