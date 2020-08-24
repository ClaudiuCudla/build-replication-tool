var animSpeed = 300;
var animEffect = "swing";

$(document).ready(function() {
    $(".step-toggle").on("change", function(event) {
        var $this = $(this);
        var $step = $this.parents(".page__toggle").find(".input-expand");
        if ($this.prop("checked")) {
            $step.slideDown(animSpeed, animEffect);
        } else {
            $step.slideUp(animSpeed, animEffect);
        }
    });

    $(".copy-from-above").on("click", function(event) {
        event.preventDefault();
        var $this = $(this);
        var $currQ = $this.parents(".question");
        var $prevQ = $currQ.prev();

        if ($prevQ.length == 0) {
            // Handle the case when the current question is on the next step
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

    $("input[type='radio'][name='differentOrUnified']").on("change", function(event) {
        var $this = $(this);
        var $displayCountries = $this.parents(".questions-container").find(".differentOrUnified-countries");
        var $allCountriesFromQ = $(".step .question-countries, .step .copy-previous-countries");

        if ($this.val() == "differentChanges") {
            $displayCountries.slideUp(animSpeed, animEffect);
            $allCountriesFromQ.removeClass("d-none").addClass("d-flex");
        } else {
            $displayCountries.slideDown(animSpeed, animEffect);
            $allCountriesFromQ.addClass("d-none").removeClass("d-flex");
        }

        $(".hide-when-individual").toggleClass("d-none", $this.val() == "differentChanges");
        $(".hide-when-unified").toggleClass("d-none", $this.val() != "differentChanges");
    });

    $(".copy-all-results").on("click", function() {
        copyHTML($("#output")[0]);
    });

    $("input[type='radio'][name='differentOrUnified']").first().trigger("change");
    $(".step-toggle").trigger("change");
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