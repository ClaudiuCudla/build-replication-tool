var animSpeed = 200;

$(document).ready(function(){
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