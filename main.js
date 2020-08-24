var animSpeed = 200;

$(document).ready(function() {
    $(".step-toggle").on("change", function(event) {
        var $this = $(this);
        var $step = $this.parents(".page__toggle").find(".input-expand");
        if ($this.prop("checked")) {
            $step.slideDown(300, "swing");
        } else {
            $step.slideUp(300, "swing");
        }
    });

    $(".copy-from-above").on("click", function(event) {
        event.preventDefault();
        var $this = $(this);
        var $currQ = $this.parents(".question");
        var $prevQ = $currQ.prev();

        // Handle the case when the current question is on the next step
        if ($prevQ.length == 0) {
            $prevQ = $currQ.parents(".step").prev().find(".question").last();
        }

        if ($prevQ.length) {
            var $currCountries = $currQ.find("input.country-select");
            var $prevCountries = $prevQ.find("input.country-select");

            for (var i = 0; i < $prevCountries.length; i++) {
                $($currCountries[i]).prop("checked", $($prevCountries[i]).prop("checked"));
            }
        }
    });

    // $("button[name='next']").on("click", function(event) {
    //     var $step = $(this).parents(".step");
    //     var $stepBody = $step.find(".body");
    //     $stepBody.slideUp(animSpeed, "swing");

    //     var $nextStep = $step.next(".step");
    //     if ($nextStep.length) {
    //         $nextStep.find(".body").slideDown(animSpeed, "swing");
    //     }
    // });
    // $(".step-heading").on("click", function(event) {
    //     var $step = $(this).parents(".step");
    //     var $stepBody = $step.find(".body");
    //     $stepBody.slideToggle(animSpeed, "swing");
    // });

    $(".copy-all-results").on("click", function() {
        copyHTML($("#output")[0]);
    });
});

/**
 * @param {Object} whatToCopy DOM element that will be copied into the clipboard
 */
function copyHTML(whatToCopy) {
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElement(whatToCopy);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();

        range = document.createRange();
        range.selectNodeContents(whatToCopy);

        selection.removeAllRanges();
        selection.addRange(range);
    }

    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}