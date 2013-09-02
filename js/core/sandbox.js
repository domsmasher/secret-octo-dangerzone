var Sandbox = function (core, moduleId) {
    return {
        listen: function () {
            return Core.Events.listen.apply(Core.Events, arguments);
        },
        notify : function () {
            return Core.Events.notify.apply(Core.Events, arguments);
        }
    };
};