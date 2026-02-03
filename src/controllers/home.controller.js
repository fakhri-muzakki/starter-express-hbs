import homeService from "../services/home.service.js";

const getData = (req, res) => {
  const data = homeService.getData();

  res.render("pages/home", {
    title: "Home",
    layout: "layouts/main",
    ...data,
  });
};

const homeController = { getData };
export default homeController;
