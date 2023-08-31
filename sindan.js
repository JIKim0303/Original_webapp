/*診断結果ページを表示する*/
/*診断結果ページで診断スタートを押したら最初からの繰り返し*/
const QUESTIONS = ['.q1', '.q2', '.q3'];
var qPage = 0;
var ans1 = '';
var ans2 = '';
var ans3 = '';

window.addEventListener('DOMContentLoaded', function(){
    $('.btn-start').on('click', function() {
        $('.title-page-wrap').fadeOut(1000);
            console.log(QUESTIONS[qPage]);
        $(QUESTIONS[qPage]).fadeIn(1000);
    });

/*ここの行に診断を終えるなどのボタンをおしたら、の処理を書いていく。*/
    $(function gaming() {
        const SELECTING = $('.select').on('click', function(){
            $(this).toggleClass('counted');
            $(this).siblings($('.select')).not($(this)).removeClass('counted');
            $('.btn-next').prop('disabled', false);
            var count = $(this).parents(QUESTIONS[qPage]).find('.counted');
            var idName = '';
            idName = ($(this).attr('id'));
            console.log (idName);
            if (idName === ('q1yes')) {
                ans1 = 1;
                console.log (ans1);
            } else if (idName === ('q1no')) {
                ans1 = 0;
                console.log (ans1);
            };
            if (idName === ('q2yes')) {
                ans2 = 1;
                console.log (ans2);
            } else if (idName === ('q2no')) {
                ans2 = 0;
                console.log (ans2);
            };
            if (idName === ('q3yes')) {
                ans3 = 1;
                console.log (A3);
            } else if (idName === ('q3no')) {
                A3 = 0;
                console.log (A3);
            };
        });

        const counting = $('.btn-next').on('click', function() {
            $(QUESTIONS[qPage]).fadeOut(1000);
            qPage++;
            console.log(QUESTIONS[qPage]);
            $(QUESTIONS[qPage]).fadeIn(1000);
        });

        if(QUESTIONS[qPage] >= 3) {
            $(QUESTIONS[qPage]).fadeOut(2000);
        };

    });
});

/*countedのカウントをする関数も書いておく必要がある*/
/*disabledのtrueかfalseの操作をするときは、あらかじめその要素がdisabled
か否かの状態にしておかないといけない。*/