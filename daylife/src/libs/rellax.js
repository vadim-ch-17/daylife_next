const rellax = () => {
  import("rellax").then(({ default: Rellax }) => {
    const isMobile =
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
        ? true
        : false;

    if (!isMobile) {
      const images = document.querySelectorAll(".img-parallax");
      images.forEach((img) => {
        new Rellax(img, {
          speed: -2,
          center: true,
          vertical: true,
          horizontal: false,
        });
      });
    }
  });
};

export default rellax;
