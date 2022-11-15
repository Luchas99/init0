'use strict';

$(document).ready(function() {

    // Main Sidebar custom scrollbar
    // --------------------------------------------------

    var initCustomSidebar = function() {
        $('.main-sidebar').mCustomScrollbar({
            autoHideScrollbar: true,
            mouseWheel: {
                scrollAmount: 250,
            },
        })
    }

    // Read cookie
    // --------------------------------------------------

    if ($.cookie('fixed-header')) {
        $('body').addClass('fixed-header');
        $('#fixed-header').prop('checked', true);
    } else {
        $('body').removeClass('fixed-header');
        $('#fixed-header').prop('checked', false);
    }
    if ($.cookie('fixed-sidebar')) {
        $('.main-sidebar').addClass('fixed').removeAttr('style');
        if ($('#native-scrollbar').prop('checked') == false) {
            initCustomSidebar();
        } else {
            $('.main-sidebar').css('overflow-y', 'auto');
        }
        $('#fixed-sidebar').prop('checked', true);
    } else {
        $('.main-sidebar').removeClass('fixed');
        if ($('#native-scrollbar').prop('checked') == false) {
            $('.main-sidebar').mCustomScrollbar('destroy');
        } else {
            $('.main-sidebar').css('overflow-y', '');
        }
        $('#fixed-sidebar').prop('checked', false);
    }
    if (!$.cookie('pinned-sidebar')) {
        $('.main-sidebar').addClass('pinned');
        $('#pinned-sidebar').prop('checked', true);
        $('#closed-sidebar').attr('disabled', true);
    } else {
        $('.main-sidebar').removeClass('pinned');
        $('#pinned-sidebar').prop('checked', false);
        $('.main-sidebar').addClass('closed');
        $('#closed-sidebar').prop('checked', true);
    }
    if ($.cookie('native-scrollbar') && $.cookie('fixed-sidebar')) {
        $('.main-sidebar').mCustomScrollbar('destroy');
        $('.main-sidebar').css('overflow-y', 'auto');
        $('#native-scrollbar').prop('checked', true);
    } else if (!$.cookie('native-scrollbar') && $.cookie('fixed-sidebar')) {
        $('.main-sidebar').css('overflow-y', '');
        initCustomSidebar();
        $('#native-scrollbar').prop('checked', false);
    }

    // Element Blocking
    // --------------------------------------------------

    function blockUI(element) {
        $(element).block({
            message: '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>',
            css: {
                border: 'none',
                backgroundColor: 'transparent'
            },
            overlayCSS: {
                backgroundColor: '#FAFEFF',
                opacity: 0.5,
                cursor: 'wait'
            }
        });
    }

    function unblockUI(element) {
        $(element).unblock();
    }

    // Toggle Sidebar
    // --------------------------------------------------

    $('.sidebar-toggle').on('click', function() {
        $('.main-sidebar').toggleClass('closed');
    });

    // Toogle Searchbar
    // --------------------------------------------------

    $('.search-bar-toggle').on('click', function() {
        $('.search-bar').toggleClass('closed');
    });

    // Toggle Right Sidebar
    // --------------------------------------------------

    $('.right-sidebar-toggle').on('click', function() {
        $('.right-sidebar').toggleClass('closed');
    });

    // Toggle Conversation Sidebar
    // --------------------------------------------------

    $('.conversation-toggle').on('click', function() {
        $('.conversation').toggleClass('closed');
    });

    // Toggle Demo Settings
    // --------------------------------------------------

    $('.setting-toggle').on('click', function() {
        $('.setting').toggleClass('closed');
    });

    // Toggle Fullscreen
    // --------------------------------------------------

    $('.fullscreen-toggle').on('click', function() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    });

    if ($(window).width() < 768) {
        $('.main-sidebar').addClass('closed');
    }

    // Tooltips & Popovers
    // --------------------------------------------------

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Layouts
    // --------------------------------------------------

    $('#fixed-header').on('click', function() {
        $('body').toggleClass('fixed-header');
        if ($(this).prop('checked') == true) {
            $.cookie('fixed-header', true);
        } else if ($(this).prop('checked') == false) {
            $.removeCookie('fixed-header');
        }
    });

    $('#fixed-sidebar').on('click', function() {
        if ($(this).prop('checked') == true) {
            $('.main-sidebar').addClass('fixed').removeAttr('style');
            if ($('#native-scrollbar').prop("checked") == false) {
                initCustomSidebar();
            } else {
                $('.main-sidebar').css('overflow-y', 'auto');
            }
            $.cookie('fixed-sidebar', true);
        } else if ($(this).prop("checked") == false) {
            $('.main-sidebar').removeClass('fixed');
            if ($('#native-scrollbar').prop("checked") == false) {
                $('.main-sidebar').mCustomScrollbar('destroy');
            } else {
                $('.main-sidebar').css('overflow-y', '');
            }
            $.removeCookie('fixed-sidebar');
        }
    });

    $('#pinned-sidebar').on('click', function() {
        if ($(this).prop('checked') == true) {
            $('.main-sidebar').addClass('pinned');
            $('.main-sidebar').removeClass('closed');
            $('#closed-sidebar').prop('checked', false);
            $('#closed-sidebar').attr('disabled', true);
            $.removeCookie('pinned-sidebar');
        } else if ($(this).prop('checked') == false) {
            $('.main-sidebar').removeClass('pinned');
            $.cookie('pinned-sidebar', true);
            $('.main-sidebar').addClass('closed');
            $('#closed-sidebar').prop('checked', true);
            $('#closed-sidebar').removeAttr('disabled');
        }
    });

    $('#closed-sidebar').on('click', function() {
        $('.main-sidebar').toggleClass('closed');
    });

    $('#native-scrollbar').on('click', function() {
        if ($(this).prop('checked') == true && $('#fixed-sidebar').prop('checked') == true) {
            $('.main-sidebar').mCustomScrollbar("destroy");
            $('.main-sidebar').css('overflow-y', 'auto');
            $.cookie('native-scrollbar', true);
        } else if ($(this).prop("checked") == false && $('#fixed-sidebar').prop('checked') == true) {
            $('.main-sidebar').css('overflow-y', '');
            initCustomSidebar();
            $.removeCookie('native-scrollbar');
        }
    });

    // Widget Control
    // --------------------------------------------------

    $('.widget-collapse').on('click', function() {
        $(this).closest('.widget').find('.widget-body').slideToggle(300);
    });
    $('.widget-reload').on('click', function() {
        var element = $(this).closest('.widget');
        blockUI(element);
        window.setTimeout(function() {
            unblockUI(element);
        }, 3000);
    });
    $('.widget-remove').on('click', function() {
        $(this).closest('.widget').hide();
    });

    // Progressbar
    // --------------------------------------------------

    if ($('.progress').length > 0) {
        $('.progress .progress-bar').progressbar();
    }

    // Managing CSS animations
    // --------------------------------------------------

    $('.animated').animo({
        duration: 0.2
    });
})