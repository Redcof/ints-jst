"use strict";

var ___NAME___ = "js-t";
var __VERSION___ = "3.2.1";
var ___STG___ = "<" + ___NAME___ + ">";
var ___CTG___ = "</" + ___NAME___ + ">";
jst_log("Ints JST v" + __VERSION___);

var ___TGT___ = document;
var ___EXE___ = '';

function jst_log() {
    var l = arguments.length;
    for (var c = 0; c < l; c++) {
        console.log(arguments[c]);
    }
}

function print() {
    var l = arguments.length;
    for (var c = 0; c < l; c++) {
        ___TGT___.innerText += (arguments[c]);
    }
}


class ___jst_element___ extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define(___NAME___, ___jst_element___);

function run() {
    var source = ___TGT___.querySelectorAll('script')[0].innerHTML;
    ___TGT___.innerHTML = '';
    var execute = new Function(___EXE___);
    var ret = execute();
    ___TGT___.innerHTML = ___TGT___.innerText;
    ___TGT___.innerHTML += "<script style='display:none;'>" + source + "</script>";
    ___TGT___.style.display = '';
    ___TGT___ = null;
    ___EXE___ = null;
    return ret;
}

function compile() {
    var target;
    if (arguments.length === 0) {
        target = document.getElementsByTagName('body')[0];
    } else {
        target = arguments[0];
    }
    var tgt = target;
    ___TGT___ = tgt;
    ___TGT___.style.display = 'none';

    //backup the source code if required
    var source = ___TGT___.querySelectorAll('script');
    var html;
    if (source.length === 0) {
        //get the source code
        html = (tgt.innerHTML).trim();
        ___TGT___.innerHTML += "<script style='display:none;'>" + html + "</script>";
    } else {
        html = (source[0].innerHTML).trim();
    }

    var code_points = html.split(___STG___);

    var prnt = '', executable = '', exe = '';

    function append_print(statement) {
        statement = statement.replace(/[\s]{2,}/g, " ");
        statement = statement.replace(/[\n\r]{1,}/g, "\\n");
        if (statement.trim() !== '') {
            executable += "print('" + statement + "');";
        }
    }

    prnt = code_points[0].trim();
    append_print(prnt);

    var cp_len = code_points.length, cp_ctr;
    for (cp_ctr = 1; cp_ctr < cp_len; cp_ctr++) {
        var codes = code_points[cp_ctr];
        codes = codes.trim();
        var parts = codes.split(___CTG___);
        //part 0 contains executable codes
        exe = parts[0].trim();
        exe = exe.replace(/[\n\r]{1,}/g, " ");
        exe = exe.replace(/&gt;/g, ">");
        exe = exe.replace(/&lt;/g, "<");
        executable += exe;

        if (parts.length > 1 && parts[1].trim().length > 0) {
            //part - 1 can contain expression or printable.
            prnt = parts[1].trim();
            prnt = prnt.replace(/'/g, "\\'");// escape single-quote
            var regex = /{{(?<expression>[\[\]\(\)\<\>\+\-\*/=%\!\|~\&\.:\?\w\s]*)}}/g;
            var print_parts = regex[Symbol.split](prnt);
            var len = print_parts.length;
            if (len > 1) {
                for (var btr = 0; btr < len; btr += 2) {
                    append_print(print_parts[btr]);
                    if (btr + 1 < len) {
                        executable += "print(" + print_parts[btr + 1] + ");";
                    }
                }
            }
            else {
                append_print(prnt);
            }
        }
    }
    ___EXE___ = executable;
}
