
let imageState = 0; // 이미지 상태를 나타내는 변수

// 다음 이미지로 변경하는 함수
function nextImage() {
    if (imageState < 2) { // 예시에서는 총 3개의 이미지 상태(0, 1, 2)를 가정
        imageState++;
    } else {
        imageState = 0;
    }
    updateImage();
}

// 이전 이미지로 변경하는 함수
function prevImage() {
    if (imageState > 0) {
        imageState--;
    } else {
        imageState = 2; // 마지막 이미지 상태로 설정
    }
    updateImage();
}

// 이미지 상태에 따라 이미지를 변경하는 함수
function updateImage() {
    switch(imageState) {
        case 0:
            document.getElementById('backgroundImage').src = "img1.jpg";
            document.getElementById('foregroundImage').style.display = "none";
            break;
        case 1:
            document.getElementById('backgroundImage').src = "img2.png";
            document.getElementById('foregroundImage').style.display = "block";
            document.getElementById('foregroundImage').src = "img3.png";
            break;
        case 2:
            // 여기에 세 번째 상태에 대한 이미지 변경 로직을 추가할 수 있습니다.
            // 예시: document.getElementById('backgroundImage').src = "img3.jpg";
            break;
    }
}
