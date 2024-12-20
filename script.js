const noBtn = document.querySelector("#no");
const yesBtn = document.querySelector("#yes");
let boxheart = document.querySelector(".boxheart");
let boxchoose = document.querySelector(".boxchoose");
let popup = document.querySelector(".popup");
let letter = document.querySelector("#letter");

const letterText = 

"Gửi em,khi em đọc được những dòng chữ này, đó chính là lúc mà anh đã đủ can đảm và bản lĩnh để có thể nói ra tiếng lòng mình. Cám ơn em, đã cho anh cơ hội để được quen em và tìm hiểu em thời gian qua. Mặc dù khoảng thời gian đó không là quá dài. Tình yêu thì không thể chỉ thể hiện qua những lời nói được, nên anh mong muốn mình có thể được hành động. Thời gian qua anh đã có cảm nhận về con người của em. Anh cũng đã cảm nhận được những sự tương đồng giữa hai chúng ta. Và thực sự trái tim với nhiều lớp phòng thủ này đã có cơ hội để tháo gỡ ra lớp hộ vệ đó. Anh không dám chắc anh sẽ là người tốt nhất với em, nhưng anh dám chắc rằng anh sẽ là người cố gắng nhất để em có thể cười nhiều nhất."                       

;
let i = 0;

// Hiện trái tim ngay từ đầu
boxheart.classList.add("show-heart");  // Thêm lớp để hiển thị trái tim và câu hỏi ban đầu

// Khi bấm vào trái tim, ẩn trái tim và bắt đầu gõ thư
boxheart.addEventListener("click", function () {
    boxheart.classList.remove("show-heart");  // Ẩn trái tim khi bấm
    boxheart.classList.add("active");  // Đánh dấu trái tim đã được bấm
    typeLetter();  // Bắt đầu gõ thư
});
function typeLetter() {
    if (i < letterText.length) {
        letter.innerHTML += letterText.charAt(i);
        i++;
        setTimeout(typeLetter, 100);
    } else {
        // Sau khi hoàn thành phần gõ thư, mới hiện các lựa chọn
        boxchoose.classList.add("active");
    }
}

function toggleHeart() {
    boxheart.classList.add("active");
}

// Khi rê chuột vào nút "Hông", nó sẽ chạy đi chỗ khác
noBtn.addEventListener("mouseenter", () => {
    const top = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    const left = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));

    noBtn.style.position = "absolute";
    noBtn.style.top = `${top}px`;
    noBtn.style.left = `${left}px`;
});

yesBtn.onclick = () => {
    boxchoose.classList.remove("active");
    popup.classList.add("active");
};

typeLetter();
toggleHeart();
