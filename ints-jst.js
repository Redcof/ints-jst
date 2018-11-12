"use strict";

var ___NAME___ = "js-t";
var __VERSION___ = "3.0.2";
var ___STG___ = "<" + ___NAME___ + ">";
var ___CSTG___ = "</" + ___NAME___ + ">";
log("Ints JST v" + __VERSION___);

var ___TGT___ = document;
var ___EXE___ = '';

function log() {
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
    ___TGT___.innerHTML = '';
    var execute = new Function(___EXE___);
    var ret = execute();
    ___TGT___.innerHTML = ___TGT___.innerText;
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
    var html = (tgt.innerHTML).trim();
    var code_points = html.split(___STG___);

    var prnt = '', executable = '', exe = '';

    function append_print(statement) {
        statement = statement.replace(/[\s]{2,}/g, " ");
        statement = statement.replace(/[\n\r]{1,}/g, "\\n");
        executable += "print('" + statement + "');";
    }

    prnt = code_points[0].trim();
    append_print(prnt);

    var cp_len = code_points.length, cp_ctr;
    for (cp_ctr = 1; cp_ctr < cp_len; cp_ctr++) {
        var codes = code_points[cp_ctr];
        codes = codes.trim();
        var parts = codes.split(___CSTG___);
        exe = parts[0].trim();
        exe = exe.replace(/[\n\r]{1,}/g, " ");
        exe = exe.replace(/&gt;/g, ">");
        exe = exe.replace(/&lt;/g, "<");
        executable += exe;
        if (parts.length > 1 && parts[1].trim().length > 0) {
            prnt = parts[1].trim();
            prnt = prnt.replace(/'/g, "\\'");
            prnt = prnt.replace(/'/g, "\\'");
            var prnt_prts = prnt.match(/{{(?<exprsn>.*)}}/g);
            if (prnt_prts) {
                prnt_prts.forEach(function (items) {
                    log(items);
                })
            }
            append_print(prnt);
        }
    }
    ___EXE___ = executable;
}
