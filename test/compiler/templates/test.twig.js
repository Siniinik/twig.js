module.declare([{ twig: "undefined" }], function (require, exports, module) {
	var twig = require("twig").twig;
	exports.template = twig({id:"templates/test.twig", data:[{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"test","match":["test"]}],"output":[{"type":"raw","value":"\n    Yep\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"\n    Nope\n"}]}},{"type":"raw","value":"\n"}], precompiled: true});

});