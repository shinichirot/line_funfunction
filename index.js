var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {

        sendText(`情報登録ありがとうございました`);
        
        var name = $('textarea[name="name"]').val();
        var adress = $('textarea[name="adress"]').val();
        var tel = $('textarea[name="tel"]').val();
        var age = $('select[name="age"]').val();
        var kanshin = $("input:radio[name='kanshin']:checked").val();
        var how = $("input:radio[name='how']:checked").val();
        var where = $("input:radio[name='where']:checked").val();
        var date = $('input[name="date"]').val();
       
        var msg = `◆回答ありがとうございます\n年代：${age}\n面談希望日：${date}`;
        sendText(msg);

        return false;
    });
});
