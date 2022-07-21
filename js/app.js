const fetchProfileData = () => {
  const username = getUsernameFromURL();

  const url = `/assets/data/people/${username}.json`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const getFirstChildOnElements = (parentElements, child) => {
  return parentElements.map(
    (element) =>
      document.getElementsByTagName(element)[0].getElementsByTagName(child)[0]
  );
};

getUsernameFromURL = () => {
  currentURL = new URL(document.URL);
  if (currentURL.search[0] === "?") {
    const searchString = currentURL.search.slice(1).split("&");
    return searchString[0];
  }
  throw Error();
};

const NO_AVATAR_IMAGE = "images/no-avatar.svg";
const ERROR_IMAGE = "images/error.svg";

const updateProfilePage = (page, data) => {
  page.avatar.forEach((avatar) => {
    avatar.src = data.avatarUrl || NO_AVATAR_IMAGE;
  });

  page.name.forEach((name) => {
    name.textContent = data.name;
  });

  page.description.textContent = data.description || "";

  const links = data?.links || [];

  links.forEach((link) => {
    if (link.name && link.url) {
      const newSection = document.createElement("section");
      newSection.textContent = link.name;

      const newLink = document.createElement("a");
      newLink.target = "_blank";
      newLink.href = link.url;
      newLink.appendChild(newSection);

      page.links.appendChild(newLink);
    }
  });
};

updateErrorPage = (page) => {
  page.avatar.src = ERROR_IMAGE;
  page.title.textContent = t("Something went wrong!");
  page.message.textContent = t(
    "Unable to load user information. Please, check if the name is correctly typed."
  );
};
