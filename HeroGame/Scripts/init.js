//Add a module for the buttons on the page.
(function (testModule) {
    var getDeleteButton = function () { return document.getElementsByClassName("deleteButton"); };
    var getEditButton = function () { return document.getElementsByClassName("editButton"); };
    var getDetailsButton = function () { return document.getElementsByClassName("detailsButton"); };

    var show = function (elem) {
        if (elem) {
            for (var i = 0; i < elem.length; i++) {
                if (elem[i]) elem[i].style.display = 'inline';
            }
        }
    };
    
    testModule.showDeleteButton = function showDeleteButton() {
        show(getDeleteButton());
    };
    
    testModule.showEditButton = function showEditButton() {
        show(getEditButton());
    };
    
    testModule.showDetailsButton = function showDetailsButton() {
        show(getDetailsButton());
    };
    
})(window.TestModule = window.TestModule || {});

(function () {
  Hero.init().buildConsole()
    .registerAbility("View", TestModule, TestModule.showDetailsButton)
    .registerAbility("Edit", TestModule, TestModule.showEditButton)
    .registerAbility("Delete", TestModule, TestModule.showDeleteButton);
})();
