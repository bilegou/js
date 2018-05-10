$(document).ready(function() {
    replace_content('iii', format('ejs_test', {}));
    $("#Template").val('tas_funcodes.h');
    $("#Value").val(
    	"{ALL:[{Identify:'QueryAccountReq', CH:1, CL:1, C2:1}, {Identify:'QueryAccountRsq', CH:1, CL:1, C2:2}, {Identify:'AddAccountReq', CH:1, CL:1, C2:3}, {Identify:'AddAccountRsq', CH:1, CL:1, C2:4}]}");
    $("#exec").click(function() {
    	var Tmpl = $("#Template").val()
		var JsonText = $("#Value").val()
		replace_content('outer', format(Tmpl, eval('(' + JsonText + ')')));
    });
});

function format(template, json) {
    try {
        var tmpl = new EJS({url: 'js/tmpl/' + template + '.ejs'});
        return tmpl.render(json);
    } catch (err) {
        debug(err['name'] + ": " + err['message']);
    }
}

function replace_content(id, html) {
    $("#" + id).html(html);
}

function debug(str) {
    $('<p>' + str + '</p>').appendTo('#debug');
}


aa = {}