const checkScroll = () => {
  document.documentElement.dataset.shownav =
    window.scrollY > 0 ? "show" : "hide";
};
