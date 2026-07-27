/*
파일:
/js/header.js
*/

(function () {

    // 현재 pages 폴더 안인지 확인
    const isPage = window.location.pathname.includes("/pages/");

    // 링크 경로 자동 계산
    const root = isPage ? "../" : "";

    // 헤더가 들어갈 위치
    const header = document.getElementById("header");

    if (!header) return;

    header.innerHTML = `
<header class="site-header">

    <div class="header-container">

        <a href="${root}index.html" class="logo">
            🌻 Play & Study
        </a>

        <button
            class="mobile-menu-button"
            id="mobileMenuButton"
            aria-label="메뉴">
            ☰
        </button>

        <nav class="main-nav" id="mainNav">

            <div class="dropdown">

                <button class="dropdown-btn">
                    🎮 게임하자 ▼
                </button>

                <div class="dropdown-menu">

                    <a href="${root}pages/game_galaga.html">
                        갤러그
                    </a>

                    <a href="${root}pages/game_tetris.html">
                        테트리스
                    </a>

                </div>

            </div>

            <div class="dropdown">

                <button class="dropdown-btn">
                    📚 공부하자 ▼
                </button>

                <div class="dropdown-menu">

                    <a href="${root}pages/study_math.html">
                        암산 연습
                    </a>

                    <a href="${root}pages/study_english.html">
                        영어 단어
                    </a>

                </div>

            </div>

        </nav>

    </div>

</header>
`;

    // 모바일 메뉴
    const mobileButton = document.getElementById("mobileMenuButton");
    const mainNav = document.getElementById("mainNav");

    mobileButton.addEventListener("click", function () {
        mainNav.classList.toggle("show");
    });

    // 드롭다운
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const current = button.parentElement;

            document.querySelectorAll(".dropdown").forEach(function (item) {

                if (item !== current) {
                    item.classList.remove("open");
                }

            });

            current.classList.toggle("open");

        });

    });

    // 바깥 클릭 시 닫기
    document.addEventListener("click", function (event) {

        if (!event.target.closest(".dropdown")) {

            document.querySelectorAll(".dropdown").forEach(function (item) {

                item.classList.remove("open");

            });

        }

    });

})();