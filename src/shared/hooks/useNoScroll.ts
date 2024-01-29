function setNoScroll() {
  const addNoScroll = () => {
    document.body.classList.add("no-scroll");
  };

  const removeNoScroll = () => {
    document.body.classList.remove("no-scroll");
  };

  return { addNoScroll, removeNoScroll };
}

export default setNoScroll;
