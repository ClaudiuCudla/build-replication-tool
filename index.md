<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex" />

    <title>Build and replication tool</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
    <link rel="stylesheet" href="dist/css/main.css"/>

    <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>

    <script type="text/javascript" src="main.js"></script>
</head>

<body>
    <div>
        <div class="container my-4">
            <div class="row">
                <div class="col-12 heading text-center accordion-item">
                    <h2>Release management checklist</h2>
                    <p>Step-by-step guide to select what replicable items need to be rquested.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 p-0">
                    <div class="stepper my-3">
                        <!-- Step 0 START  -->
                        <div class="pre-step">
                            <div class="step-heading">
                                <div class="page__toggle">
                                    <label class="toggle">
                                        <input class="toggle__input step-toggle" name="content" type="checkbox" checked/>
                                        <span class="toggle__label title">
                                            <span class="toggle__text">Individual changes or unified?</span>
                                            <p class="subtitle mt-3">Select if you have performed different changes for individual sites - or - were your changes the same across site/sites?</p>
                                        </span>
                                    </label>
                                    <div class="input-expand">
                                        <div class="questions-container">
                                            <div class="d-flex row mb-3">
                                                <div class="col-4 pd-4">
                                                    <input type="radio" id="unifiedChanges" name="differentOrUnified" value="unifiedChanges" checked>
                                                    <label for="unifiedChanges">Applies for all sites</label>
                                                </div>
                                                <div class="col-4">
                                                    <input type="radio" id="differentChanges" name="differentOrUnified" value="differentChanges">
                                                    <label for="differentChanges">Individual sites, different changes</label><br>
                                                </div>
                                            </div>

                                            <!-- Countries START -->
                                            <div class="differentOrUnified-countries" style="display: none;">
                                                <div class="question-body d-flex">
                                                    <div class="page__toggle mr-4">
                                                        <label class="toggle">
                                                            <input class="toggle__input country-select" name="content" type="checkbox" data-country="Argentina">
                                                            <span class="toggle__label">
                                                                <img class="flag-image mr-2" src="https://cdn.britannica.com/69/5869-050-6DD75C6F/Flag-Argentina.jpg" width="30"/>
                                                                <span class="toggle__text">Argentina</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="page__toggle mr-4">
                                                        <label class="toggle">
                                                            <input class="toggle__input country-select" name="content" type="checkbox" data-country="Chile">
                                                            <span class="toggle__label">
                                                                <img class="flag-image mr-2" src="https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg" width="30"/>
                                                                <span class="toggle__text">Chile</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="page__toggle mr-4">
                                                        <label class="toggle">
                                                            <input class="toggle__input country-select" name="content" type="checkbox" data-country="Colombia">
                                                            <span class="toggle__label">
                                                                <img class="flag-image mr-2" src="https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg" width="30"/>
                                                                <span class="toggle__text">Colombia</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="page__toggle mr-4">
                                                        <label class="toggle">
                                                            <input class="toggle__input country-select" name="content" type="checkbox" data-country="Peru">
                                                            <span class="toggle__label">
                                                                <img class="flag-image mr-2" src="https://i.pinimg.com/originals/d0/cd/3c/d0cd3cc0cd63d20dd42edb7395948e4f.jpg" width="30"/>
                                                                <span class="toggle__text">Peru</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="page__toggle mr-4">
                                                        <label class="toggle">
                                                            <input class="toggle__input country-select" name="content" type="checkbox" data-country="Puerto Rico">
                                                            <span class="toggle__label">
                                                                <img class="flag-image mr-2" src="https://cdn.britannica.com/s:1500x700,q:85/30/5130-004-5482F4CA/Flag-Puerto-Rico.jpg" width="30"/>
                                                                <span class="toggle__text">Puerto Rico</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="page__toggle mr-4">
                                                        <label class="toggle">
                                                            <input class="toggle__input country-select" name="content" type="checkbox" data-country="Brasil">
                                                            <span class="toggle__label">
                                                                <img class="flag-image mr-2" src="https://cdn.britannica.com/47/6847-050-075C3C65/Flag-Brazil.jpg" width="30"/>
                                                                <span class="toggle__text">Brasil</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Countries END -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Step 0 END-->

                        <!-- Auto-generated section here-->
                        <div class="insert-steps-here"></div>
                    </div>
                </div>
            </div>
            <div class="row copy-success-message" style="display: none;">
                <div class="col-12">
                    <div class="alert alert-success text-center" role="alert">
                        <h4 class="alert-heading">Copied!</h4>
                        <p>Now please go in Confluence and paste (CTRL + V)</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center d-none btn-copy">
                <div class="col-3 mb-5 mt-3">
                    <button type="button" data-clipboard-target="#output" class="btn btn-raised btn-success btn-lg copy-all-results" alt="Copy generated results">Copy generated results</button>
                </div>
            </div>
            <div class="row" style="height: 1px; overflow: hidden;">
                <div id="output">
                    <h3>Generated request items:</h3>
                    <table data-number-column="true">
                        <thead>
                            <tr>
                                <th><p><strong>Action needed</strong></p></th>
                                <th><p><strong>Countries / Sites</strong></p></th>
                                <th><p><strong>Responsible</strong></p></th>
                                <th><p><strong>STAGING Status</strong></p></th>
                                <th><p><strong>PRODUCTION replication status</strong></p></th>
                            </tr>
                        </thead>
                        <tbody class="insert-rows-here">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
