export const pageNotFound = (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, '/views/404.html'));
  console.log("404 Error Page");
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    currentPage: "404"
  });
};
