(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["map/templates/map.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div id=\"map\" style=\"height: 600px;\"></div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
return function(ctx, cb) { return nunjucks.render("map/templates/map.html", ctx, cb); }})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["project/templates/project.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"panel panel-default b-shadow project-container\" >\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">";
output += runtime.suppressValue(env.getFilter("upper").call(context, runtime.contextOrFrameLookup(context, frame, "projectName")), env.autoesc);
output += "</h3>\n    </div>\n    <div class=\"panel-body\" style=\"padding-bottom: 10px;\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n\n                <dl class=\"xdl-horizontal\">\n                    <dt>Resumo:</dt>\n                    <dd>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "summary"), env.autoesc);
output += "</dd>\n\n                    <dt>Tipo de projecto ou iniciativa:</dt>\n                    <dd><a href=\"#\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.autoesc);
output += "</a></dd>\n\n                    <dt>Website:</dt>\n                    <dd><a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "url"), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "url"), env.autoesc);
output += "</a></dd>\n                </dl>\n\n\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"text-center\" style=\"margin-bottom: 15px;\">\n                    <img src=\"client/common/images/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "logoImg"), env.autoesc);
output += "\" class=\"img-thumbnail\">\n                </div>\n\n\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"margin-top: 25px;\">\n            <div class=\"col-sm-6 xcol-sm-offset-3\">\n                <button type=\"button\" class=\"btn btn-info btn-block\">Mais informações</button>\n            </div>\n            <div class=\"col-sm-6 xcol-sm-offset-3\">\n                <button type=\"button\" class=\"btn btn-info btn-block\">Eventos deste projecto</button>\n            </div>\n        </div>\n\n        <div class=\"text-right\" style=\"margin-top: 25px;\">\n    \t\t<small>\n    \t\t\t<strong>Adicionado por:</strong> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "addedBy"), env.autoesc);
output += "\n    \t\t</small>                        \t\n        </div>\n        <div class=\"text-right\" style=\"margin-top: -5px;\">\n    \t\t<small>\n    \t\t\t<strong>Última actualização:</strong> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "lastUpdated"), env.autoesc);
output += "\n    \t\t</small>                        \t\n        </div>\n\n                                       \n\n    </div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
return function(ctx, cb) { return nunjucks.render("project/templates/project.html", ctx, cb); }})();

