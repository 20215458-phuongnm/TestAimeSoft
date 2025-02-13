document.addEventListener("DOMContentLoaded", function () {
    const days = document.querySelectorAll(".day");

    days.forEach(day => {
        day.addEventListener("click", function () {
            // Xóa active ở tất cả các nút
            days.forEach(d => d.classList.remove("active"));
            // Thêm active vào nút được chọn
            this.classList.add("active");
        });
    });
    const buttons = document.querySelectorAll(".buttons .btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Xóa class "red" khỏi tất cả nút
            buttons.forEach(btn => btn.classList.remove("red"));

            // Thêm class "red" vào nút được bấm
            this.classList.add("red");
        });
    });
});
