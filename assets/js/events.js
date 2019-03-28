$(document).ready(function(){
    var anyUpcoming = false;

    $('.timeline-element').each(function(i, obj) {
        var now = Math.trunc((new Date().getTime() / 1000));

        if(parseInt($($(obj).children()[0]).text()) < now) {
            hide(obj);
            $($(obj).children()[1]).addClass('passed-event');
            $($(obj).children().last().children()[0]).addClass('passed-event');
        }
        else
            anyUpcoming = true;
    });

    if (!anyUpcoming) {
        $('#check-back-later').attr('hidden', false);
    }
});

$(document).ready(function(){
    $('#week-header').text('Week ' + new Date().getWeekNumber());
});

Date.prototype.getWeekNumber = function() {
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

$(document).ready(function(){
    $('.iconsBackground').each(function(i, obj) {
        $(obj).click(function(){
            clickedParent = this.parentElement;

            if ($($(clickedParent).children().last().children()[0]).attr('hidden') == 'hidden')
                show(clickedParent);
            else
                hide(clickedParent);
        });
    });
});

function show (obj) {
    $(obj).removeAttr('style');
    $($(obj).children().last().children()[0]).attr('hidden', false);

    $($(obj).children()[1]).removeClass('without-after-element');
}

function hide (obj) {
    $(obj).css('margin-bottom', '60px');
    $($(obj).children().last().children()[0]).attr('hidden', true);

    $($(obj).children()[1]).addClass('without-after-element');
}