main = async () => {
  const profilePage = {
    avatar: getFirstChildOnElements(["header", "nav"], "img"),
    name: getFirstChildOnElements(["header", "nav"], "h1"),
    description: document
      .getElementsByTagName("header")[0]
      .getElementsByTagName("p")[0],
    links: document.getElementsByTagName("main")[0],
  };

  const errorPage = {
    avatar: getFirstChildOnElements(["header"], "img")[0],
    title: getFirstChildOnElements(["header"], "h1")[0],
    message: document
      .getElementsByTagName("header")[0]
      .getElementsByTagName("p")[0],
  };

  try {
    const data = await fetchProfileData();
    updateProfilePage(profilePage, data);
    document.addEventListener("scroll", checkScroll);
    checkScroll();
  } catch (error) {
    updateErrorPage(errorPage);
  }
};

main();
