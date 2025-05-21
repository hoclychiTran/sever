document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".main .logo");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            logo.classList.add("hide");  // Ẩn toàn bộ logo (ảnh + chữ)
        } else {
            logo.classList.remove("hide"); // Hiện lại logo
        }
    });
});
