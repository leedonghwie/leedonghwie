function copyright_footer(){
    const footer = document.querySelector("footer");
    const copyright_year = new Date().getFullYear();
    footer.innerHTML=`&copy; ${copyright_year} donghwi LEE`;
    footer.style.fontSize="x-small";
    footer.style.textAlign="center";
    footer.style.marginTop="100px";
};
copyright_footer();