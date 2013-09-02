(function () {
    var utils = function () {
        var modules = {},
            slice = [].slice;

        return {
            typeEqual: function(input, desiredType){
                return this.type(input).toLowerCase() == desiredType;
            },

            type:function(input){
                return Object.prototype.toString.call(input).match(/^\[object\s(.*)\]$/)[1];
            },

            newGUID: function(){

                var S4 = function() {
                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                };
                return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

            }

        }
    };

    // Expose Core as an AMD module
    if (typeof define === "function" && define.amd) {
        define("Utils", function (core) {
            utils = coreUtils();
            return utils;
        });
    }
    else {
        window['Utils'] = utils();
    }
} ());
