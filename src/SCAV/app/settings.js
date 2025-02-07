/*
 * JS for settings generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '65801e8a-6228-4ec2-a5cb-baad9e97f627';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "how_to_play",
    "location": "how_to_play.html"
}, {
    "name": "settings",
    "location": "settings.html"
}, {
    "name": "HomeScreen",
    "location": "HomeScreen.html"
}];

function settings_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_27': 'settings_mobileimage_27',
        'mobilegroupedbuttons_32': 'settings_mobilegroupedbuttons_32',
        'mobilebutton_33': 'settings_mobilebutton_33',
        'mobilebutton_35': 'settings_mobilebutton_35'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'settings';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var settings_onLoad = function() {
        settings_elementsExtraJS();
        settings_deviceEvents();
        settings_windowEvents();
        settings_elementsEvents();
    };
    // screen window events
    function settings_windowEvents() {
        $('#settings').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function settings_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function settings_elementsExtraJS() {
        // screen (settings) extra code
    };
    // screen elements handler
    function settings_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#settings_mobilecontainer [name="mobilebutton_33"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('how_to_play', {
                        transition: 'pop'
                    });
                }
            },
        }, '#settings_mobilecontainer [name="mobilebutton_33"]');
        $(document).off("click", '#settings_mobilecontainer [name="mobilebutton_35"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('HomeScreen', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            },
        }, '#settings_mobilecontainer [name="mobilebutton_35"]');
    };
    $(document).off("pagebeforeshow", "#settings").on("pagebeforeshow", "#settings", function(event, ui) {
        Apperyio.CurrentScreen = "settings";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    settings_onLoad();
};
$(document).off("pagecreate", "#settings").on("pagecreate", "#settings", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    settings_js();
});