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
        var date1 = $('input[name="date1"]').val();
        var time1 = $('select[name="time1"]').val();
        var date2 = $('input[name="date2"]').val();
        var time2 = $('select[name="time2"]').val();
        var date3 = $('input[name="date3"]').val();
        var time3 = $('select[name="time3"]').val();
       
        var msg = `◆回答ありがとうございます\nお名前：${name}\n年代：${age}\n面談希望日：${date1}-${time1} ,${date2}-${time2},${date3}-${time3}`;
        sendText(msg);

        return false;
    });
});
