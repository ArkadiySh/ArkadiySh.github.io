$(function () {
    $("table.main td.content input[type='text']").focus(function () {
        $(this).css("border", "").css("background-color", "");
    });

    $("table.main td.content select").focus(function () {
        $(this).css("border", "").css("background-color", "");
    });

    $(".service-button-link").mousedown(function () {
        $(this).find('.service-button').addClass("curled");
    })

    $(".service-button-link").mouseleave(function () {
        $(this).find('.service-button').removeClass("curled");
    })

    $(".button-loading").click(function () {
        loading();
    });
    $(".terminals-map").click(showTerminalsMap);

    $("input").focusin(function () {
        $(this).next(".editor-hint").css("color", "#555");
    });

    $("input").focusout(function () {
        $(this).next(".editor-hint").css("color", "#AAA");
    });

    /* popup-menu */

    $(".arrow").hover(function () {
        $(this).attr("src", "../content/images/action-arrow-blue.png");
    }, function () {
        $(this).attr("src", "../content/images/action-arrow-grey.png");
    });

    $("ul.popup-menu").each(function () {
        $(this).find("li:gt(0)").hide();
    });

    $(document).click(function (e) {
        $("ul.popup-menu").css("border", "1px solid Transparent").css("background-color", "").css("z-index", "900");
        $("ul.popup-menu").each(function () {
            $(this).find("li:gt(0)").hide();
        });

        if ($(e.target).attr("class") == "arrow") {
            if ($(e.target).closest("ul.popup-menu").find("li:gt(0)").is(":visible")) {
                $(e.target).closest("ul.popup-menu").css("border", "1px solid transparent").css("background-color", "").css("z-index", "900");
                $(e.target).closest("ul.popup-menu").find("li:gt(0)").hide()
            }
            else {
                $(e.target).closest("ul.popup-menu").css("border", "1px solid #AAA").css("background-color", "#FFF").css("z-index", "901");
                $(e.target).closest("ul.popup-menu").find("li:gt(0)").show()
            }
        }
        else {
            $("ul.popup-menu").css("border", "1px solid Transparent").css("background-color", "").css("z-index", "900");
        }
    });

    if ($(".warning").text() != '') $(".warning").show();

    initializeEvents();
    //var navigationHeight = ($(".block-profile").height() == null ? 0 : ($(".block-profile").height() + 20)) + ($(".block-categories").height() + 20) + $(".block-social-buttons").height();
    //$(".layout-navigation").height(navigationHeight + 30);

    //var layoutHeight = $(".layout-main-body").height();

    //if (navigationHeight < layoutHeight)
    //    $(".layout-navigation").height(layoutHeight - 42);

    /******************************** .block-languages ********************************/

    $(".block-languages a").each(function () {
        if ($(this).attr("lang") == $("#locale").val())
            $(this).addClass("selected");
    });

    /******************************** .block-userinfo ********************************/

    try{
        //$(".block-userinfo #login").watermark($(".block-userinfo #login").attr("title"));
        //$(".block-userinfo #password").watermark($(".block-userinfo #password").attr("title"));
    }
    catch (e) { }

    $(".block-userinfo input").keypress(function (e) {
        var keyCode = e.keyCode != 0 ? e.keyCode : e.charCode;
        if (keyCode == 13) {
            if ($(this).attr("id") == "password")
                $(".block-userinfo .button2").click();
        }
    });

    /******************************** footer ********************************/

    $("#visa").hover(function () {
        $(this).attr("src", "../content/images/visa21.png");
    }, function () {
        $(this).attr("src", "../content/images/visa11.png");
    });

    $("#mastercard").hover(function () {
        $(this).attr("src", "../content/images/mastercard21.png");
    }, function () {
        $(this).attr("src", "../content/images/mastercard11.png");
    });

    $("#geotrust").hover(function () {
        $(this).attr("src", "../content/images/geotrust21.png");
    }, function () {
        $(this).attr("src", "../content/images/geotrust11.png");
    });

    $("#sysnet_cert_callback").hover(function () {        
        $(this).children().attr("src", "../content/images/sysnet21.png");
    }, function () {        
        $(this).children().attr("src", "../content/images/sysnet11.png");
    });
    /******************************** online-chat ********************************/

    $(".online-chat").css("top", $(window).height() / 2 - 75);

    $(window).resize(function () {
        $(".online-chat").css("top", $(window).height() / 2 - 75);
    });

    $(".online-chat").click(function () {
        var x = (screen.width - 600) / 2;
        var y = (screen.height - 600) / 2;
        window.open("http://messenger.providesupport.com/messenger/0hmn84zahkqwf18w6r178uv4yx.html", "EasyPay", "resizable=no,height=600,width=600,top=" + y + ",left=" + x + ",scrollbars=yes,status=no");
    });

    $('.layout-navigation-select').change(function () {
        if ($('.layout-navigation-select option:selected').attr('id') == 'optShow')
            try {
                ga('send', 'event', 'show-easypay', 'buy-ticket', 'left-menu');
            }
            catch (e) { }

        location.href = $('.layout-navigation-select option:selected').attr('data-url');
    });

    $('.wallets-bar-select').change(function () {
        location.href = $('.wallets-bar-select option:selected').attr('data-url');
    });

    $('.profile-bar-select').change(function () {
        location.href = $('.profile-bar-select option:selected').attr('data-url');
    });

    $(document).click(function (e) {
        if ($(e.target).attr("class") == "help") {
            if ($(".help-description").is(":visible")) $(".help-description").fadeOut(500);
            else $(".help-description").fadeIn(500);
        }
        else {
            if ($(".help-description").is(":visible")) $(".help-description").fadeOut(500);
        }
    });
});

/* functions */

function initializeEvents(owner) {
    var fields = null;

    if (owner == undefined)
        fields = $(".layout-body input[id!='globalSearch']:text:visible, .layout-body input:password:visible, .layout-body select:visible, .layout-body textarea:visible, .cardPan3");
    else
        fields = $(owner).find("input:text:visible, input:password:visible, select:visible, textarea:visible, #phone22, #amount22");

    //$(fields).first().focus();

    $(fields).bind("keypress", function (e) {
        var n = $(fields).length;
        if (e.which == 13) {
            e.preventDefault();
            var nextIndex = $(fields).index(this) + 1;
            if (nextIndex < n) {
                $(fields)[nextIndex].focus();
            }
            else {
                $(fields)[nextIndex - 1].blur();

                if (owner == undefined)
                    $('.layout-body .button2:visible').first().click();
                else
                    $(owner).find('.button2:visible').first().click();
            }
        }
    });
}

function back() {
    history.back();
}

function forward(url) {
    location.href = url != null ? url : "/";
}

function url2(url) {
    return $("#partnerName").val() == "EasyPay" ? url : "/" + $("#partnerName").val() + url;
}

function showTerminalsMap() {
    var x = (screen.width - 1000) / 2;
    var y = (screen.height - 800) / 2;
    window.open("http://easysoft.ua/terminalsmap", "EasyPay", "resizable=no,height=750,width=1050,top=" + y + ",left=" + x + ",scrollbars=yes,status=no");
}

var h = 0;

function loading() {
    $(".block-editor input").css("border", "").css("background-color", "");
    $(".block-editor select").css("border", "").css("background-color", "");
}

function error(text, id) {
    $(".error").height("auto").html(text);
    h = $(".error").height();

    if (id) {
        if (id == "cardExpire") {
            $("#cardMonth, #cardYear").css("border", "1px solid #F60").css("background-color", "#FFF0DA");
            return;
        }
        $("#" + id).css("border", "1px solid #F60").css("background-color", "#FFF0DA");
    }
}

function showAgreement() {
    var height = 700;
    var width = 1000;
    var x = (screen.width - width) / 2;
    var y = (screen.height - height) / 2;

    window.open("https://easypay.ua/main/agreement", "EasyPay", "resizable=no,height=" + height + ",width=" + width + ",top=" + y + ",left=" + x + ",scrollbars=yes,status=no");
}

var blockedElements;

$(document).ajaxStart(function () {
    blockedElements = $("input[id!='globalSearch'][id!='recipientPlace'][id!='kkd']:enabled, select:enabled, button:enabled:not('.btn-loading'), textarea");
    $(blockedElements).attr("disabled", "disabled");
    document.body.style.cursor = "progress";
    $(".notification").html("");
    $("input[type='text'], input[type='password'], textarea").css("border", "").css("background-color", "");
    $(".input-validation").text("");
}).ajaxStop(function () {
    $(blockedElements).removeAttr("disabled");
    document.body.style.cursor = "auto";
    try
    {
        Ladda.stopAll();
    }
    catch(e) {}
});

function setError(message, id) {
    $('*').removeClass('error-input');

    var error = $("<div class='error1'></div>")
    $(error).html(message);
    $(".notification").html(error);

    if (id) {
        if (id == "cardExpire") {
            $("#cardMonth, #cardYear").addClass('error-input');
        }
        $("#" + id).addClass('error-input').css('border', '1px solid #F60').css('background-color', '#FFF0DA');
    }
    scroll(0, 0);

    $(".notification-holder .notification-error").html(message).show();
}

function setInvalidFields(array) {
    $(array).each(function () {
        $("#" + this.ErrorSource).css("border", "1px solid #F60").css("background-color", "#FFF0DA");
        $("span[owner='" + this.ErrorSource + "']").text(this.Error);
    });
}

function setValidationError(array) {
    $(array).each(function () {
        $('#' + this.ErrorSource).addClass("validation-error");
        var $o = $(".validation-error-desc[data-field='" + this.ErrorSource + "']");
        if ($o.length > 0) $o.text(this.Error);
        else setError(this.Error);
    });
}

function myPopup() {
    window.open("http://www.sysnetglobalsolutions.com/certificate.aspx?customerid=b4bdb93c-db3a-4019-aee7-d45ccfdd291f", "certificate", "height = 900, width = 600, location = 1, toolbar = 0, scrollbars = 1, menubar = 0, resizable = 1");
}

/* запрос к серверу */

function post(url, context, callback, loading) {
    $(document).unbind('ajaxStart');
    if (loading) {
        elements = $("input:enabled, select:enabled, button:enabled, textarea");
        $(elements).attr("disabled", "disabled");
        document.body.style.cursor = "progress";
        $(".notification").html("");
        $(".notification-holder .notification-error").html(null).hide();
        $(".input-validation").text("");
        $("input[type='text'], input[type='password'], textarea").css('border', '').css('background-color', '');
        $(".validation-error").removeClass('validation-error');
        $(".validation-error-desc").html(null);
    }

    $.post(url, context, function (data) {
        if (loading) {
            $(elements).removeAttr("disabled");
            document.body.style.cursor = "auto"
        }
        callback(data);

        $(document).ajaxStart(function () {
            blockedElements = $("input[id!='globalSearch'][id!='recipientPlace'][id!='kkd']:enabled, select:enabled, button:enabled, textarea");
            $(blockedElements).attr("disabled", "disabled");
            document.body.style.cursor = "progress";
            $(".notification").html("");
            $(".notification-holder .notification-error").html(null).hide();
            $("input[type='text'], input[type='password'], textarea").css('border', '').css('background-color', '');
            $(".input-validation").text("");
            $(".validation-error").removeClass('validation-error');
            $(".validation-error-desc").html(null);
        });
    });
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

/* mask/unmask  */
(function ($) {
    //$.mask2 = {
    //    definitions: {
    //        '9': "[0-9]",
    //        'a': "[A-Za-z]",
    //        '*': "[A-Za-z0-9]"
    //    }
    //};

    $.fn.extend({
        setMask: function (mask, placeholder) {
            if (!mask) return; 

            $.mask.definitions = { $: "[0-9]" };
            if (placeholder)
                $(this).mask(mask, { placeholder: placeholder });
            else
                $(this).mask(mask);
        },
        getMask: function (mask) {
            if (!mask) return $(this).mask();

            //var $s = $('<input type="hidden">');
            //$s.val($(this).mask());
            //$s.mask(mask);
            //alert($s.val());
            //return $s.val();

            var $s = $(this).mask();
            var $s2 = '';
            var $i = 0;

            for (var i = 0; i < mask.length; i++) {
                if (mask[i] == '$') {
                    if ($s[$i] != undefined) 
                        $s2 += $s[$i];
                    $i++;
                }
                else {
                    $s2 += mask[i];
                }
            }

            return $s2;
        }
    });
})(jQuery);
