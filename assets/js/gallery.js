$(document).ready(function() {
    $('.gallery-grid-item').each(function(i, obj) {

        $(obj).click(function(){
            if (window.matchMedia('(max-width: 575px)').matches) {
                return;
            }

            if ($(obj).hasClass('hover-zoom')) {
                shrinkAll();

                var cols = Math.floor($(obj).parent().width() / $(obj).width());
                var row = Math.floor(i / cols);
                var otherIndex = row * cols;

                $(obj).insertBefore($(obj).parent().children()[otherIndex]);
                setTimeout(function(){ grow(obj); }, 1);
            }
            else {
                shrink(obj);
                
                //setTimeout(function(){ $(obj).insertAfter($(obj).parent().children()[i]); }, 150);
            }
        });
    });
});

$(document).ready(function() {
    $('.gallery-grid-item').each(function(i, obj) {
        $(window).resize(function() {
            shrink(obj);
            
            //setTimeout(function(){ $(obj).insertAfter($(obj).parent().children()[i]); }, 150);

            if (window.matchMedia('(max-width: 575px)').matches
                && $(obj).hasClass('hover-zoom')) {
                $(obj).removeClass('hover-zoom');
            }
            else if (window.matchMedia('(min-width: 576px)').matches
                && !$(obj).hasClass('hover-zoom')) {
                $(obj).addClass('hover-zoom');
            }
        });
        
        if (window.matchMedia('(max-width: 575px)').matches
            && $(obj).hasClass('hover-zoom')) {
            $(obj).removeClass('hover-zoom');
        }
        else if (window.matchMedia('(min-width: 576px)').matches
            && !$(obj).hasClass('hover-zoom')) {
            $(obj).addClass('hover-zoom');
        }
    });
});

function grow (obj) {
    $(obj).removeClass('col-lg-3');
    $(obj).removeClass('col-md-4');
    $(obj).removeClass('col-sm-6');
    $(obj).removeClass('col-xs-12');
    $(obj).addClass('col-12');

    $(obj).removeClass('hover-zoom');
}

function shrink (obj) {
    $(obj).addClass('col-lg-3');
    $(obj).addClass('col-md-4');
    $(obj).addClass('col-sm-6');
    $(obj).addClass('col-xs-12');
    $(obj).removeClass('col-12');

    $(obj).addClass('hover-zoom');
}

function shrinkAll() {
    $('.gallery-grid-item').each(function(i, obj) {
        if (!$(obj).hasClass('hover-zoom')) {
            shrink(obj);

            //setTimeout(function(){ 
            //    $(obj).swapWith(otherObj);
            //}, 150);
        }
    });
}

jQuery.fn.swapWith = function(to) {
    return this.each(function() {
        var copy_to = $(to).clone(true);
        var copy_from = $(this).clone(true);
        $(to).replaceWith(copy_from);
        $(this).replaceWith(copy_to);
    });
}