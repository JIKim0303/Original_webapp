/*タイトルと各問題のページは配列に格納してforeachで一つずつ表示されるようにする。*/
/*最初は診断スタートボタンが押されたらタイトルページが非表示になって、*/
/*①次のページ（Q1ページ）が表示されるようにする。*/
/*②次の質問ページが表示されたら、セレクトボタンの内どれか一つを選択して次へのボタンを押させる*/
/*①と②をQ3まで繰り返す（for each?）*/
/*最後の質問ページまで表示され、選択されて次のページに行ったら*/
/*診断結果ページを表示する*/
/*診断結果ページで診断スタートを押したら最初からの繰り返し*/
const array = ['.q1', '.q2', '.q3'];
var i = 0;
var A1 = '';
var A2 = '';
var A3 = '';

window.addEventListener('DOMContentLoaded', function(){

    $('.btn-start').on('click', function() {
        $('.title-page-wrap').fadeOut(1000);
        console.log(array[i]);
        $(array[i]).fadeIn(1000);
    });

/*ここの行に診断を終えるなどのボタンをおしたら、の処理を書いていく。*/

$(function gaming() {
    const selecting = $('.select').on('click', function(){
        $(this).toggleClass('counted');
        $(this).siblings($('.select')).not($(this)).removeClass('counted');
        var select = $(this).parents(array[i]).find('.select');

        var idname = $(this).attr("id");
        console.log (idname);
        if (idname = q1yes) {
            A1 = 1;
            console.log (A1);
        } else if(idname = q1no) {
            A1 = 0;
            console.log (A1);
        }

        $('.btn-next').prop('disabled', false);
    });

    const counting = $('.btn-next').on('click', function() {
        $(array[i]).fadeOut(1000);
        var yesCount = $('.select.yes.counted').length;
        var noCount = $('.select.no.counted').length;
        console.log(yesCount);
        console.log(noCount);
        i++;
        console.log(array[i]);
        $(array[i]).fadeIn(1000);

    });

    if(array[i] >= 3) {
        $(array[i]).fadeOut(2000);
    };
});
});



/*countedのカウントをする関数も書いておく必要がある*/
/*disabledのtrueかfalseの操作をするときは、あらかじめその要素がdisabled
か否かの状態にしておかないといけない。*/