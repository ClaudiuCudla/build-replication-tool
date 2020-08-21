angular.module("appModule", ["stepperModule"]);

// Stepper Module ready to be included
// ===================================

angular
  .module("stepperModule", ["ngAnimate", "ui.bootstrap"])
  .directive("stepperDirective", stepperDirective);

function stepperController($scope) {
  $scope.forms = {
    steps: [
      {
        step: 1,
        name: "Content changes",
        template: `
          <p>Were there any content changes made?</p>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label for="vehicle1"> I have a bike</label><br>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
          <label for="vehicle2"> I have a car</label><br>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
          <label for="vehicle3"> I have a boat</label><br>
        `,
        expanded: true,
      },{
        step: 2,
        name: "Catalog changes",
        template: "This is the second step",
        expanded: false,
      },{
        step: 3,
        name: "Pricing, inventory?",
        template: "This is the third step",
        expanded: false,
      },{
        step: 4,
        name: "Promotions?",
        template: "This is the fourth step",
        expanded: false,
      },{
        step: 5,
        name: "Site preferences",
        template: "This is the fourth step",
        expanded: false,
      },{
        step: `<span>&#9745;</span>`,
        name: "Results",
        template: "Please copy and paste the results from below into your new build schedule:",
        expanded: false,
      }
    ],
  };
}

function stepperDirective() {
  function link($scope, $element, $attrs) {
    $scope.toggleListItems = function (index) {
      $scope.forms.steps[index].expanded = !$scope.forms.steps[index].expanded;

      for (var i = 0; i < $scope.forms.steps.length; i++) {
        if ($scope.forms.steps[i].expanded === true && i != index) {
          $scope.forms.steps[i].expanded = false;
        }
      }
    };
  }

  var directive = {
    restrict: "E",
    scope: {},
    controller: stepperController,
    template:
    `<div class="stepper">
      <div class="step" ng-repeat="step in forms.steps">
        <div class="step-heading" ng-class="{"active":!step.expanded}" ng-click="toggleListItems($index)">
          <div class="circle">{{step.step}}</div>
          <div class="title">{{step.name}}</div>
        </div>
        <div class="line" ng-hide="step.step >=forms.steps.length"></div>
        <div uib-collapse="!step.expanded">
          <div class="body">
            <div ng-bind-html="{{step.template}}"></div>
            <button ng-hide="step.step >=forms.steps.length" ng-click="toggleListItems($index + 1)" class="btn btn-sm btn-bg ripple" name="next" type="button"> Next </button>
            <button ng-hide="step.step <=1" ng-class="{"btn-bg": step.step==forms.steps.length}" ng-click="toggleListItems($index - 1)" class="btn btn-sm ripple" name="previous" type="button"> Previous </button>
          </div>
        </div>
      </div>
    </div>`,
    link: link,
  };
  return directive;
}
