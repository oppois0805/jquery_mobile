(function() {
    //系統訊息頁面
    $(document).on("pageinit", "#message", function() {
        // 頁面第一次執行時會觸發
        // 程式寫在這裡
        $(document).on("click", ".i_switch", function() {
            $(this).toggleClass('active');
        });

        $(".animateMe .ui-collapsible-heading-toggle").on("click", function(e) {
            var current = $(this).closest(".ui-collapsible");
            if (current.hasClass("ui-collapsible-collapsed")) {
                //collapse all others and then expand this one
                $(".ui-collapsible").not(".ui-collapsible-collapsed").find(".ui-collapsible-heading-toggle").click();
                $(".ui-collapsible-content", current).slideDown(300);
            } else {
                $(".ui-collapsible-content", current).slideUp(300);
            }
        });
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.error') && !$(target).parents().is('.error')) {
            $('.errorMessage').removeClass("errorMessage--show");
            $('.errorMessage').addClass("errorMessage--hide");
        } else {
            if ($('.errorMessage').hasClass("errorMessage--hide")) {
                $('.errorMessage').removeClass("errorMessage--hide");
                $('.errorMessage').addClass("errorMessage--show");
            } else if ($('.errorMessage').hasClass("errorMessage--show")) {
                $('.errorMessage').removeClass("errorMessage--show");
                $('.errorMessage').addClass("errorMessage--hide");
            }
        }
    });
})();
