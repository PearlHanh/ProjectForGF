messageState = document.getElementById("messageState");
const heartClick = document.querySelector(".heart");
const message = document.querySelector(".message");
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const page1 = document.querySelector(".page");
const page2 = document.querySelector("#page2");
const boxes = document.querySelectorAll(".box");
const page3 = document.querySelector("#page3");
const backHome = document.querySelector(".heart3");
const backgroundMusic = document.querySelector("#piano");

backgroundMusic.volume = 0.5;
message.classList.remove("openNor", "closeNor");
button.style.display = "none";
messageState.addEventListener("change", function() {   
    backgroundMusic.play();
    if(messageState.checked){
        message.classList.remove("closed", "noani");
        message.classList.add("openNor");

        heartClick.classList.remove("closeHer", "openedHer", "noani");
        heartClick.classList.add("openHer");
        
        button.style.display = "none";
        container.style.transition = "background-color 2s";
        container.style.backgroundColor = "#fce4ec";

    }
    
    else{
        message.classList.remove("noani");
        message.classList.add("closeNor", "closed");

        heartClick.classList.remove("openHer", "openedHer" ,"noani");
        heartClick.classList.add("closeHer");
        

        container.style.transition = "background-color 2s";
        container.style.backgroundColor = "#f48fb1";


    } 
});
    document.querySelector(".message").addEventListener("animationend", function() {
        if(this.classList.contains("closeNor")){
            this.classList.add("closed");
            setTimeout(button.style.display = "block" , 2000);
        }

        this.classList.remove("openNor", "closeNor");
        this.classList.add("noani");
    });
    document.querySelector(".heart").addEventListener("animationend", function () {
        if (!this.classList.contains("closeHer")) {
            this.classList.add("openedHer");
        }

        else{
        this.classList.add("noani");
        }
        this.classList.remove("openHer", "closeHer");
    });

    
    //button
    document.querySelector(".btn").addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);
    
        let rect = this.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
    
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
    
        setTimeout(() => {
            ripple.remove();
        }, 1000);

        page1.classList.remove("fade-in");
        page1.classList.add("fade-out");// Làm mờ trang
        setTimeout(() => {
            page1.classList.add("hidden");
            page2.classList.remove("hidden");
            page2.classList.add("fade-in"); // Đúng cách để gọi class sau thời gian chờ
            boxes.forEach(box => box.style.display = "none");
        function showImage(index) {
            if (index < boxes.length) {
                boxes[index].style.display = "block";
                setTimeout(() => showImage(index + 1), 500); // Hiện ảnh tiếp theo sau 500ms

            }
        }

        showImage(0);
        }, 1000);
    


    });



    //quay lai trang 1

    document.querySelector("#back1").addEventListener("click", function(e) {
        let ripple1 = document.createElement("span");
        ripple1.classList.add("ripple");
        this.appendChild(ripple1);
        let rect1 = this.getBoundingClientRect();
        let x1 = e.clientX - rect1.left;
        let y1 = e.clientY - rect1.top;
        ripple1.style.left = `${x1}px`;
        ripple1.style.top = `${y1}px`;

        setTimeout(() => {
        ripple1.remove();
    }, 1000);

        page2.classList.remove("fade-in");
        page2.classList.add("fade-out");
        
        setTimeout(()=>{
        page2.classList.add("hidden");
        page1.classList.remove("hidden");
        page1.classList.add("fade-in")}, 1000);
    });

    // sang trang 3

   document.querySelector("#continue2").addEventListener("click", function(e) {
    let ripple2 = document.createElement("span");
    ripple2.classList.add("ripple");
    this.appendChild(ripple2);
    
    let rect2 = this.getBoundingClientRect();
    let x2 = e.clientX - rect2.left;
    let y2 = e.clientY - rect2.top;
    
    ripple2.style.left = `${x2}px`; // Dịch sang trái 10px
    ripple2.style.top = `${y2}px`; // Dịch lên trên 10px
    
    setTimeout(() => {
        ripple2.remove();
    }, 1000);                          
        page2.classList.remove("fade-in");
        page2.classList.add("fade-out");
        
        
        
        setTimeout(()=>{
        page2.classList.add("hidden");
        page3.classList.remove("hidden");
        page3.classList.add("fade-in");
    // Dữ liệu biểu đồ
const data = {
    labels: ['2020', '2021', '2022', '2023', 'Đầu 2024', 'Cuối 2024 - Nay'],  // Nhãn trên trục X
    datasets: [{
        label: 'Tình cảm',  // Tiêu đề của biểu đồ
        data: [null, null, null, null, null, null],  // Khởi tạo dữ liệu ban đầu
        backgroundColor: 'rgb(255,182,193)',  // Màu sắc của các cột
        borderColor: 'rgba(255, 0, 0, 0.554)',  // Màu viền cột
        borderWidth: 1  // Độ dày của viền cột
    }]
};

// Cấu hình biểu đồ
const config = {
    type: 'bar',  // Chọn loại biểu đồ (bar là biểu đồ cột)
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',  // Vị trí của legend (chú thích)
                labels: {
                    font: {
                        size: 20  // Kích thước chữ trong legend
                    }
                }
            },
            tooltip: {
                enabled: true,  // Kích hoạt tooltip
                backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Màu nền của tooltip
                titleFont: {
                    size: 16  // Kích thước font của tiêu đề tooltip
                },
                bodyFont: {
                    size: 14  // Kích thước font của nội dung tooltip
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,  // Đảm bảo trục Y bắt đầu từ 0
                ticks: {
                    font: {
                        size: 20  // Kích thước chữ trên trục Y
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 20  // Kích thước chữ trên trục X
                    }
                }
            }
        },
        animation: {
            duration: 1000,  // Thời gian animation khi mỗi cột xuất hiện
            easing: 'easeInOutQuad'  // Easing hiệu ứng chuyển động
        }
    }
};

// Tạo biểu đồ cột
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Hàm hiển thị các cột tuần tự mỗi 5 giây
let index = 0;
const interval = setInterval(() => {
    if (index < data.datasets[0].data.length) {
        // Cập nhật dữ liệu cho biểu đồ để chỉ hiển thị cột hiện tại
        data.datasets[0].data[index] = [100, 120, 140, 200, 80, 300][index];
        myChart.update();
        index++;
    } else {
        clearInterval(interval);  // Dừng sau khi hiển thị hết tất cả các cột
    }
}, 5000);  // Hiển thị từng cột mỗi 5 giây
}, 1000);

    });

//Quay lai trang 2

document.querySelector("#back2").addEventListener("click", function(e) {
    let ripple3 = document.createElement("span");
    ripple3.classList.add("ripple");
    this.appendChild(ripple3);
    let rect3 = this.getBoundingClientRect();
    let x3 = e.clientX - rect3.left;
    let y3 = e.clientY - rect3.top;
    ripple3.style.left = `${x3}px`;
    ripple3.style.top = `${y3}px`;

    setTimeout(() => {
    ripple3.remove();
}, 1000);

    page3.classList.remove("fade-in");
    page3.classList.add("fade-out");
    
    setTimeout(()=>{
    page3.classList.add("hidden");
    page2.classList.remove("hidden");
    page2.classList.add("fade-in")}, 1000);
});


//Sang trang 4

document.querySelector(".continue3").addEventListener("click", function(e) {
    let ripple4 = document.createElement("span");
    ripple4.classList.add("ripple");
    this.appendChild(ripple4);
    
    let rect4 = this.getBoundingClientRect();
    let x4 = e.clientX - rect4.left;
    let y4 = e.clientY - rect4.top;
    
    ripple4.style.left = `${x4}px`; // Dịch sang trái 10px
    ripple4.style.top = `${y4}px`; // Dịch lên trên 10px
    
    setTimeout(() => {
        ripple4.remove();
    }, 1000);                          
        page3.classList.remove("fade-in");
        page3.classList.add("fade-out");
        
        
        
        setTimeout(()=>{
        page3.classList.add("hidden");
        page4.classList.remove("hidden");
        page4.classList.add("fade-in");
},1000);
setTimeout(() => {
    document.querySelector(".image2").style.animationPlayState = "running";
    document.querySelector(".finalMessage").style.animationPlayState = "running";
}, 2000);

setTimeout(() => {
    document.querySelector("#finalMusic").play();  // Phát nhạc sau 4s
}, 4000);

// Đồng bộ các tác vụ hiển thị văn bản và tắt nhạc sau khi hoàn thành
setTimeout(() => {
    showText(messageElement, message2, 0, 100, () => {
        showText(sweetheartElement, sweetheartText, 0, 150, () => {
            showText(nameElement, nameText, 0, 200, () => {
                // Sau khi text đã hiển thị hoàn toàn, tắt nhạc
                document.querySelector("#finalMusic").pause();
            });
        });
    });
}, 4000);
});


// Heart3

backHome.addEventListener("click", function(e){

    let ripple5 = document.createElement("span");
        ripple5.classList.add("ripple");
        this.appendChild(ripple5);
        let rect5 = this.getBoundingClientRect();
        let x5 = e.clientX - rect5.left;
        let y5 = e.clientY - rect5.top;
        ripple5.style.left = `${x5}px`;
        ripple5.style.top = `${y5}px`;

        setTimeout(() => {
        ripple5.remove();
    }, 1000);

        page4.classList.remove("fade-in");
        page4.classList.add("fade-out");
        
        setTimeout(()=>{
        page4.classList.add("hidden");
        page1.classList.remove("hidden");
        page1.classList.add("fade-in")}, 1000);
});


const messageElement = document.getElementById("textDisplay");
const sweetheartElement = document.querySelector(".sincere .bold-text");
const nameElement = document.querySelector(".sincere p:last-child");

// Nội dung cần hiển thị
const message2 = `Như cậu thấy chart rồi đó, chúng ta đều có những lúc yêu thương, hờn dỗi hay lạnh nhạt với nhau. 
Nhưng sau tất cả, chúng ta đều vượt qua được và luôn yêu thương gắn bó với nhau. 
Xin lỗi cậu vì những lúc làm cậu cáu giận hay làm những việc khiến cậu bực mình, 
và cũng cảm ơn cậu vì đã ở bên mình, luôn động viên và khuyên mình cố gắng trở thành một con người tốt hơn. 
Cảm ơn cậu rất nhiều. Mình hi vọng lần tới khi tớ làm chart, chúng ta sẽ có một cái đồ thị thật cao, thật đẹp nhé!`;

const sweetheartText = "Your Sweetheart🌷🌷🌷🌷";
const nameText = "Bùi Hoàng Anh";

// Hiển thị từng từ một
function showText(element, text, index, delay, callback) {
    const words = text.split(" "); // Chia nội dung thành từng từ
    if (index < words.length) {
        const span = document.createElement("span");
        span.textContent = words[index] + " "; // Thêm dấu cách để hiển thị từ đúng khoảng cách
        span.classList.add("letter");
        element.appendChild(span);

        setTimeout(() => {
            span.style.opacity = 1;
        }, delay);

        setTimeout(() => showText(element, text, index + 1, delay, callback), delay);
    } else if (callback) {
        setTimeout(callback, delay); // Gọi hàm tiếp theo khi hoàn thành
    }
}

// Bắt đầu hiệu ứng