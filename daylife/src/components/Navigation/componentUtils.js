import Cookies from "js-cookie";

export const toAnchor = (router, isOpenNav, setIsOpenModal, e) => {
    e.preventDefault();

    const href = e.target.dataset.anchor;

    Cookies.set("anchor", href);

    const element = document.querySelector("#" + href);

    element ?
        scrollTosection(element, isOpenNav, setIsOpenModal)
        : router.push('/');
};

export const scrollTosection = (element, isOpenNav, setIsOpenModal) => {
    const top = element.offsetTop;
    if (isOpenNav) {
        setIsOpenModal(false);
    }
    Cookies.remove("anchor");
    window.scrollTo({
        top: top - 150,
        behavior: "smooth",
    });
}