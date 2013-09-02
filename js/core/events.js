( function () {
    var coreEvents = function () {
        var slice = [].slice,
            handlers = {};

        return {
            listen:function(events, module){
                if(app.core.dom.isObject(events) && module){
                    if(data[module]){
                        data[module].events = events;
                    }else{
                    }
                }
            },
            notify: function(events){
                if(app.core.dom.isObject(events)){
                    var mod;
                    for(mod in data){
                        if(data.hasOwnProperty(mod)){
                            mod = data[mod];
                            if(mod.events && mod.events[events.type]){
                                mod.events[events.type](events.data);
                            }
                        }
                    }
                }
            },
            remove:function(events, module){
                if(app.core.dom.isObject(events) && module && (module = data[module]) && module.events){
                    delete module.events;
                }
            }
        }
    };

    if (typeof define === "function" && define.amd) {
        define("Core.Events", ['Core'], function () {
            return coreEvents();
        });
    }
    else {
        window['Core.Events'] = coreEvents();
    }
} ());