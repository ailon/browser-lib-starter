
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['lib-dev-starter-test'] = {}));
}(this, (function (exports) { 'use strict';

    var LibDemo = /** @class */ (function () {
        function LibDemo() {
        }
        LibDemo.prototype.addHello = function (target) {
            var helloBox = document.createElement('div');
            helloBox.innerHTML = 'Hello!';
            target.appendChild(helloBox);
        };
        return LibDemo;
    }());

    var Experiments = /** @class */ (function () {
        function Experiments() {
        }
        Experiments.prototype.addHelloToBody = function () {
            var ld = new LibDemo();
            ld.addHello(document.body);
        };
        return Experiments;
    }());
    window.addEventListener('DOMContentLoaded', function (event) {
        var experiments = new Experiments();
        experiments.addHelloToBody();
    });

    exports.Experiments = Experiments;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=experiments.js.map
