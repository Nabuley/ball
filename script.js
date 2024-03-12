function launchBall() {
    var angle = document.getElementById("angle").value || 45;
    var speed = document.getElementById("speed").value || 150;
    var frameSpeed = document.getElementById("frameSpeed").value || 250;
    var gravity = document.getElementById("gravity").value || 9.8;

    var field = document.getElementById("field");
    var ball = document.createElement("div");
    ball.id = "ball";
    field.appendChild(ball);

    // 공의 초기 위치를 화면 하단 가운데로 설정합니다.
    var startPositionX = field.offsetWidth / 20;
    const width = field.offsetWidth;
    var startPositionY = 0; // 공의 시작 위치를 field의 바닥으로 설정합니다.
    ball.style.left = startPositionX + 'px';
    ball.style.bottom = startPositionY + 'px';

    var x = 0;
    var y = 0;
    var startTime = new Date().getTime();
    angle = Math.PI / (180 / angle);

    function moveBall() {
        let now = new Date();
        const t = (now.getTime() - startTime) / frameSpeed;
        x = speed * Math.cos(angle) * t;
        y = speed * Math.sin(angle) * t - 0.5 * gravity * t ** 2;
        if (y < 0 || x > width * 19 / 20 - 5 || x < 0){//} || y >= field.offsetHeight) {
            field.removeChild(ball);
            return;
        }

        ball.style.bottom = (startPositionY + y) + 'px'; // 공의 Y 위치를 업데이트합니다.
        ball.style.left = (startPositionX + x) + 'px'; // 공의 X 위치를 업데이트합니다.

        requestAnimationFrame(moveBall);
    }

    moveBall();
}
