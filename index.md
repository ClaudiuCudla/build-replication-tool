<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Build and replication tool</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
    <link rel="stylesheet" href="dist/css/main.css"/>

    <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>

    <script type="text/javascript" src="main.js"></script>
</head>

<body>
    <div>
        <div class="container my-5">
            <div class="row">
                <div class="col-12 heading text-center accordion-item">
                    <h2>Release management checklist</h2>
                    <p>Step-by-step guide to select what replicable items need to be rquested.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 p-0">
                    <div class="stepper my-5">
                        <!--  Start Step 1  -->
                        <div class="step">
                            <div class="step-heading">
                                <div class="page__toggle">
                                    <label class="toggle">
                                        <input class="toggle__input" name="content" type="checkbox">
                                        <span class="toggle__label title">
                                            <span class="toggle__text">1. Content</span>
                                            <p class="subtitle">Were there any changes made in the Content that need to be pushed into PRODUCTION?</p>
                                        </span>
                                        <div class="input-expand">
                                            <div class="questions-container">
                                                <div class="question">
                                                    <p class="question-title subtitle">
                                                        Country
                                                    </p>
                                                    <div class="question-body">
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/69/5869-050-6DD75C6F/Flag-Argentina.jpg" width="30"/>
                                                                    <span class="toggle__text">Argentina</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg" width="30"/>
                                                                    <span class="toggle__text">Chile</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg" width="30"/>
                                                                    <span class="toggle__text">
                                                                        Colombia
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://i.pinimg.com/originals/d0/cd/3c/d0cd3cc0cd63d20dd42edb7395948e4f.jpg" width="30"/>
                                                                    <span class="toggle__text">Peru</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/s:1500x700,q:85/30/5130-004-5482F4CA/Flag-Puerto-Rico.jpg" width="30"/>
                                                                    <span class="toggle__text">Puerto Rico</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/47/6847-050-075C3C65/Flag-Brazil.jpg" width="30"/>
                                                                    <span class="toggle__text">Brasil</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="question">
                                                    <p class="question-title subtitle">
                                                        Type of content that has been changed
                                                    </p>
                                                    <div class="question-body">
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <span class="toggle__text">Content slots</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <span class="toggle__text">Content assets/ Page designer components</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-heading">
                                <div class="page__toggle">
                                    <label class="toggle">
                                        <input class="toggle__input" name="content" type="checkbox">
                                        <span class="toggle__label title">
                                            <span class="toggle__text">2. Promotions and campaigns</span>
                                            <p class="subtitle">Were there any changes made in Promo need to be pushed into PRODUCTION?</p>
                                        </span>
                                        <div class="input-expand">
                                            <div class="questions-container">
                                                <div class="question">
                                                    <p class="question-title subtitle">
                                                        Country
                                                    </p>
                                                    <div class="question-body">
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/69/5869-050-6DD75C6F/Flag-Argentina.jpg" width="30"/>
                                                                    <span class="toggle__text">Argentina</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg" width="30"/>
                                                                    <span class="toggle__text">Chile</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg" width="30"/>
                                                                    <span class="toggle__text">
                                                                        Colombia
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://i.pinimg.com/originals/d0/cd/3c/d0cd3cc0cd63d20dd42edb7395948e4f.jpg" width="30"/>
                                                                    <span class="toggle__text">Peru</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/s:1500x700,q:85/30/5130-004-5482F4CA/Flag-Puerto-Rico.jpg" width="30"/>
                                                                    <span class="toggle__text">Puerto Rico</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <img class="flag-image mr-2" src="https://cdn.britannica.com/47/6847-050-075C3C65/Flag-Brazil.jpg" width="30"/>
                                                                    <span class="toggle__text">Brasil</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="question">
                                                    <p class="question-title subtitle">
                                                        Type of content that has been changed
                                                    </p>
                                                    <div class="question-body">
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <span class="toggle__text">Promotions</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <span class="toggle__text">Campaigns</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div class="page__toggle">
                                                            <label class="toggle">
                                                                <input class="toggle__input" name="content" type="checkbox">
                                                                <span class="toggle__label">
                                                                    <span class="toggle__text">Coupon codes</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-none">
                <div class="col-xs-12 content">
                    <h3>Hidden output:</h3>
                    <div id="output">
                        <div class="tableView-content-wrap"><div class="pm-table-container" data-number-column="true" data-layout="default" style="width: inherit;"><div style="position: absolute; top: 30px;"> </div><div class="pm-table-row-controls-wrapper"><div><div class="pm-table-numbered-column"><div class="pm-table-numbered-column__button  " data-index="0" style="height: 41px;"></div><div class="pm-table-numbered-column__button  " data-index="1" style="height: 41px;">1</div><div class="pm-table-numbered-column__button  " data-index="2" style="height: 41px;">2</div></div><div class="pm-table-corner-controls"><button type="button" class="pm-table-corner-button"></button><div class="pm-table-corner-controls__insert-column-marker"><div class="pm-table-controls__insert-marker"></div></div></div><div class="pm-table-row-controls"><div class="pm-table-row-controls__inner"><div class="pm-table-row-controls__button-wrap  " style="height: 41px; margin-top: -1px;"><button type="button" class="pm-table-row-controls__button
                  pm-table-controls__button
                " data-start-index="0" data-end-index="1"></button><div class="pm-table-controls__insert-marker"></div></div><div class="pm-table-row-controls__button-wrap  " style="height: 41px; margin-top: -1px;"><button type="button" class="pm-table-row-controls__button
                  pm-table-controls__button
                " data-start-index="1" data-end-index="2"></button><div class="pm-table-controls__insert-marker"></div></div><div class="pm-table-row-controls__button-wrap  " style="height: 41px; margin-top: -1px;"><button type="button" class="pm-table-row-controls__button
                  pm-table-controls__button
                " data-start-index="2" data-end-index="3"></button><div class="pm-table-controls__insert-marker"></div></div></div></div></div></div><div class="pm-table-with-left-shadow" style="display: none;"></div><div class="pm-table-wrapper"><table data-number-column="true" data-layout="default" data-autosize="false"><colgroup><col><col><col><col><col></colgroup><tbody><tr data-header-row="true" style="grid-template-columns: 351px 351px 352px 352px 352px; width: 1759px;"><th class="pm-table-header-content-wrap"><div class="pm-table-column-controls-decoration ProseMirror-widget" data-start-index="0" data-end-index="1" contenteditable="false"></div><p><strong>Action needed</strong></p></th><th class="pm-table-header-content-wrap"><div class="pm-table-column-controls-decoration ProseMirror-widget" data-start-index="1" data-end-index="2" contenteditable="false"></div><p><strong>KC responsible</strong></p></th><th class="pm-table-header-content-wrap"><div class="pm-table-column-controls-decoration ProseMirror-widget" data-start-index="2" data-end-index="3" contenteditable="false"></div><p><strong>OSF responsible</strong></p></th><th class="pm-table-header-content-wrap"><div class="pm-table-column-controls-decoration ProseMirror-widget" data-start-index="3" data-end-index="4" contenteditable="false"></div><p><strong>STG Status</strong></p></th><th class="pm-table-header-content-wrap"><div class="pm-table-column-controls-decoration ProseMirror-widget" data-start-index="4" data-end-index="5" contenteditable="false"></div><p><strong>PROD replication status</strong></p></th></tr><tr><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td></tr><tr><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td><td class="pm-table-cell-content-wrap"><p><br></p></td></tr></tbody></table></div><div class="pm-table-with-right-shadow" style="display: none;"></div></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
