var animSpeed = 300;
var animEffect = "swing";
var optionValues = [
    {
        "title": "Content",
        "subtitle": "Were there any changes made in the Content that need to be pushed into PRODUCTION?",
        "questions" : [
            "Page Designer changes, Content Assets or Content Images?",
            "Content Slots or schedules for the slots?"
        ],
        "confluence" : [
            "Content - Page Designer changes, Content Assets or Content Images",
            "Content - Content Slots or schedules for the slots"
        ]
    }, {
        "title": "Promotions and campaigns",
        "subtitle": "Were there any updates made for Promotions or Campaigns that need to be pushed into PRODUCTION?",
        "questions" : [
            "Promotion AND Campaigns configurations?",
            "Any Coupon Codes?",
            "Any Customer groups defined?",
            "Any Source codes defined or modified?"
        ],
        "confluence" : [
            "Promotions - Promotion AND Campaigns configurations",
            "Promotions - Coupon Codes",
            "Promotions - Customer group definitions",
            "Promotions - Source codes defined or modified"
        ]
    }, {
        "title": "Products and Catalogs",
        "subtitle": "Were there any changes made on Products or Catalog/Categories that need to be pushed into PRODUCTION?",
        "questions" : [
            "Product details or navigation category assignments?",
            "Any product or category images that need to be replicated?",
            "Should the search indexes be refreshed?"
        ],
        "confluence" : [
            "Catalogs - Product details or navigation category assignments",
            "Catalogs - Products or category images that need to be replicated",
            "Catalogs - Search indexes to be refreshed"
        ]
    }, {
        "title": "Sorting rules",
        "subtitle": "Were there any sorting rules modified or newly added?",
        "questions" : [
            "Yes, sorting rules updated"
        ],
        "confluence" : [
            "Sorting rules"
        ]
    }, {
        "title": "URL Rules and redirects",
        "subtitle": "Were there any URL rule configurations changed?",
        "questions" : [
            "Catalog URLs - generated category URLs, catalog-specific URL rules and settings, locale and general settings.",
            "Content URLs - Generated folder URLs, library-specific URL rules and settings, locale and general settings.",
            "Pipeline URLs - Pipeline URLs, locale and general settings.",
            "Redirects - Static, dynamic and URL redirect mappings."
        ],
        "confluence" : [
            "Catalog URLs - generated category URLs, catalog-specific URL rules and settings, locale and general settings.",
            "Content URLs - Generated folder URLs, library-specific URL rules and settings, locale and general settings.",
            "Pipeline URLs - Pipeline URLs, locale and general settings.",
            "Redirects - Static, dynamic and URL redirect mappings."
        ]
    }
];


$(document).ready(function() {
    // Populate the document options with the configurations from JSON
    generateOptions(optionValues);

    // Set the document event handlers
    setDocumentEvents();

    // Initialize the copy btn
    var clipboard = new ClipboardJS('.copy-all-results');

    clipboard.on('success', function(e) {
        $('.copy-success-message').slideDown(400);
        $('.copy-all-results').slideUp(400).attr('disabled', 'disabled');
        setTimeout(function() {
            $('.copy-all-results').attr('disabled', null).slideDown(400);
            $('.copy-success-message').slideUp(400);
        }, 3000);
        e.clearSelection();
    });
});

/**
 * Sets the event handlers on the document
 * Called at document ready event
 */
function setDocumentEvents() {
    $(".step-toggle").on("change", function() {
        var $this = $(this);
        var $step = $this.parents(".page__toggle").find(".input-expand");
        if ($this.prop("checked")) {
            $step.slideDown(animSpeed, animEffect);
        } else {
            $step.slideUp(animSpeed, animEffect);
        }
        $('.btn-copy').toggleClass('d-none', $('.insert-steps-here .step-toggle:checked').length == 0);
    });

    // $(".copy-from-above").on("click", function(event) {
    //     event.preventDefault();
    //     var $this = $(this);
    //     var $currQ = $this.parents(".question");
    //     var $prevQ = $currQ.prev();

    //     if ($prevQ.length == 0) {
    //         // Handle the case when the current question is on the next step
    //         $prevQ = $currQ.parents(".step").prev().find(".question").last();
    //     }

    //     if ($prevQ.length) {
    //         var $currCountries = $currQ.find("input.country-select");
    //         var $prevCountries = $prevQ.find("input.country-select");

    //         for (var i = 0; i < $prevCountries.length; i++) {
    //             $($currCountries[i]).prop("checked", $($prevCountries[i]).prop("checked"));
    //         }
    //     }
    // });

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

    $("input[type='radio'][name='differentOrUnified']").first().trigger("change");
    $(".step-toggle").trigger("change");

    $('.copy-all-results').on('click', function() {
        $('.insert-rows-here').html('');

        // verify how the countries were selected
        if ($('#unifiedChanges').is(':checked')) {
            // Globally selected countries
            var selections = $('.step .toggle input.answer:checked');
            for (var s = 0; s < selections.length; s++) {
                var actionTitle = $(selections[s]).data("confluence");
                var countries = '';

                $('.differentOrUnified-countries input:checked').each(function() {
                    countries += `<span class="code">${$(this).data("country")}</span> `;
                });

                $('#output .insert-rows-here').append($(`<tr><td>${actionTitle}</td><td>${countries}</td><td></td><td></td><td></td></tr>`));
            }
        } else {
            // get the current selected countries of this option
        }
    });
}

/**
 * Renders the options from the configuration array
 * @param {Array} optionsArray The list of configuration options that will be rendered
 */
function generateOptions(optionsArray) {
    var destination = $('.insert-steps-here');

    for (i = 0; i < optionsArray.length; i++) {
        var title = `${i +1 }. ${optionsArray[i].title}`;
        var subtitle = optionsArray[i].subtitle;

        var template = $(`<div class="step">
                <div class="step-heading">
                    <div class="page__toggle">
                        <label class="toggle">
                            <input class="toggle__input step-toggle" name="content" type="checkbox">
                            <span class="toggle__label title">
                                <span class="toggle__text">${title}</span>
                                <p class="subtitle mt-3">${subtitle}</p>
                            </span>
                        </label>
                        <div class="input-expand">
                            <div class="questions-container"></div>
                        </div>
                    </div>
                </div>
            </;div>`);

        for (var j = 0; j < optionsArray[i].questions.length; j++) {
            var question = optionsArray[i].questions[j];
            var confluence = optionsArray[i].confluence[j];
            var templateQuestion = `<div class="question mt-0">
                <div class="hide-when-individual d-none">
                    <label class="toggle">
                        <input class="toggle__input answer" name="content" type="checkbox" data-confluence="${confluence}"/>
                        <span class="toggle__label title">
                            <span class="toggle__text"></span>
                            <p class="question-title subtitle normal-text">${question}</p>
                        </span>
                    </label>
                </div>
                <div class="hide-when-unified">
                    <p class="question-title subtitle mt-3">
                        ${question}
                    </p>
                    <!-- Countries START -->
                    <div class="question-body question-countries d-flex">
                        <div class="page__toggle mr-4">
                            <label class="toggle">
                                <input class="toggle__input country-select" name="content" type="checkbox">
                                <span class="toggle__label">
                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/69/5869-050-6DD75C6F/Flag-Argentina.jpg" width="30"/>
                                    <span class="toggle__text">Argentina</span>
                                </span>
                            </label>
                        </div>
                        <div class="page__toggle mr-4">
                            <label class="toggle">
                                <input class="toggle__input country-select" name="content" type="checkbox">
                                <span class="toggle__label">
                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg" width="30"/>
                                    <span class="toggle__text">Chile</span>
                                </span>
                            </label>
                        </div>
                        <div class="page__toggle mr-4">
                            <label class="toggle">
                                <input class="toggle__input country-select" name="content" type="checkbox">
                                <span class="toggle__label">
                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg" width="30"/>
                                    <span class="toggle__text">
                                        Colombia
                                    </span>
                                </span>
                            </label>
                        </div>
                        <div class="page__toggle mr-4">
                            <label class="toggle">
                                <input class="toggle__input country-select" name="content" type="checkbox">
                                <span class="toggle__label">
                                    <img class="flag-image mr-2" src="https://i.pinimg.com/originals/d0/cd/3c/d0cd3cc0cd63d20dd42edb7395948e4f.jpg" width="30"/>
                                    <span class="toggle__text">Peru</span>
                                </span>
                            </label>
                        </div>
                        <div class="page__toggle mr-4">
                            <label class="toggle">
                                <input class="toggle__input country-select" name="content" type="checkbox">
                                <span class="toggle__label">
                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/s:1500x700,q:85/30/5130-004-5482F4CA/Flag-Puerto-Rico.jpg" width="30"/>
                                    <span class="toggle__text">Puerto Rico</span>
                                </span>
                            </label>
                        </div>
                        <div class="page__toggle mr-4">
                            <label class="toggle">
                                <input class="toggle__input country-select" name="content" type="checkbox">
                                <span class="toggle__label">
                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/47/6847-050-075C3C65/Flag-Brazil.jpg" width="30"/>
                                    <span class="toggle__text">Brasil</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <!-- Countries END -->
                </div>
            </div>`;
            template.find('.questions-container').append($(templateQuestion));
        }

        destination.append(template);
    }
}