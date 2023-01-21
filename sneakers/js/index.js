$(function(){
    // ハンバーガーメニューをクリックしたとき、activeクラスをつけ外しする
    $('.header__menu-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.header__mask').toggleClass('active');
        $('.header__gnav').toggleClass('active');
    });

    // .header__maskのエリアをクリックした時にメニューを閉じる
    $('.header__mask').on('click', function() {
        $('.header__menu-btn').removeClass('active');
        $('.header__gnav').removeClass('active');
        $('.header__mask').removeClass('active');
    });

    // リンクをクリックした時にメニューを閉じる
    $('.header__gnav a').on('click', function() {
        $('.header__menu-btn').removeClass('active');
        $('.header__gnav').removeClass('active');
        $('.header__mask').removeClass('active');
    });

    // スライダーの設定
    $('#js-slider-3').slick({
        arrows: true, // 前・次のボタンを表示する
        dots: true, // ドットナビゲーションを表示する
        appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化
    });

    // スクロール時の画像フェード表示
    $(window).scroll(function() {
        // fadeinクラスに対して順に処理を行う
        $('.js-fadein').each(function() {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過したタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
        });
    });
});