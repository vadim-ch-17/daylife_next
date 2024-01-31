const wow = () => {
  import("wowjs").then((wowjs) => {
    // setWOW(wowjs);
    new wowjs.WOW({
      boxClass: "wow",
      offset: 100,
      mobile: false,
      live: true,
      callback: function (box) {},
      scrollContainer: null,
      resetAnimation: true,
    }).init();
  });
};

export default wow;
