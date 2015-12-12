/*
        animation-context
 */

(function(def){
    def(['riot'], function(riot) {

        function Library() {
            this.name = "animation-context"
        }

        var library = new Library()

        //
        //
        // Am i a mixin?
        // riot.mixin('animation-context', { animation-context: library })

        //
        //
        // BEGIN RIOT TAGS

        // END RIOT TAGS
        //
        //

        return library;

    });
}( (function(darr, name){
    if (typeof require === 'undefined') {
        return function (deps, factory) { this[name] = factory.apply(this, darr.map(function(arg) { return window[arg] })); }
    } else if (typeof exports === 'undefined') {
        return function (deps, factory) { define(name, deps, factory); }
    } else {
        require('riot'); // must find a solution to why require needs to be called with primitive
        return function (deps, factory) { module.exports = factory.apply(this, deps.map(require)); }
    }
})(['riot'], 'animation-context') ));
