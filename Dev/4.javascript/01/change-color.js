        //id가 heading인 요소를 가져옴
        var heading = document.getElementById("heading");

        // onclick = function () : 클릭했을 때 실행할 함수 정의
        heading.onclick = function () {
            if(heading.style.color === "red"){
                heading.style.color = "blue";
            }
            else {
                heading.style.color = "red";
            }
        };