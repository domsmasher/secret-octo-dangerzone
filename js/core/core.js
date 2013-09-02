(function () {
    var core = function () {
        var modules = {},
            slice = [].slice;

        return {
            register: function (moduleId, creator) {
                if(Utils.typeEqual(moduleId, 'string') && Utils.typeEqual(creator, 'function')){
                    modules[moduleId] = {
                        creator: creator,
                        instance: null
                    };
                }
            },
            start: function (moduleId) {
                var module = modules[moduleId];
                module.instance = module.creator(new Sandbox(this, moduleId));
                module.instance.initialize();
            },
            startAll: function () {
                var moduleId;
                for (moduleId in modules) {
                    if (modules.hasOwnProperty(moduleId)) {
                        this.start(moduleId);
                    }
                }
            },
            stop: function (moduleId) {
                var module = modules[moduleId];
                if (module && module.instance) {
                    module.instance.destroy();
                    module.instance = null;
                }
            },
            stopAll: function () {
                var moduleId;
                for (moduleId in modules) {
                    if (modules.hasOwnProperty(moduleId)) {
                        this.stop(moduleId);
                    }
                }
            }
        }
    };

    if (typeof define === "function" && define.amd) {
        define("Core", [], function () {
            return core();
        });
    }
    else {
        window['Core'] = core();
    }
} ());