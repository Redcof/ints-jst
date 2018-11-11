"use strict";

const ___NAME___ = "js-t";
const __VERSION___ = "3.0.0";
const ___STG___ = "<" + ___NAME___ + ">";
const ___CSTG___ = "</" + ___NAME___ + ">";
log("Ints JST v" + __VERSION___);

let ___TGT___ = document;
let ___EXE___ = '';

function log() {
    let l = arguments.length;
    for (let c = 0; c < l; c++) {
        console.log(arguments[c]);
    }
}

function print() {
    let l = arguments.length;
    for (let c = 0; c < l; c++) {
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
    let execute = new Function(___EXE___);
    let ret = execute();
    ___TGT___.innerHTML = ___TGT___.innerText;
    ___TGT___ = null;
    ___EXE___ = null;
    return ret;
}

function compile() {
    let target;
    if (arguments.length === 0) {
        target = document.getElementsByTagName('body')[0];
    } else {
        target = arguments[0];
    }
    let tgt = target;
    ___TGT___ = tgt;
    let html = (tgt.innerHTML).trim();
    let code_points = html.split(___STG___);

    let printable = '', executable = '', exe = '';

    function append_print(statement) {
        statement = statement.replace(/[\n\r]/, "\\n");
        executable += "print('" + statement + "');";
    }

    printable = code_points[0].trim();
    append_print(printable);

    let cp_len = code_points.length, cp_ctr;
    for (cp_ctr = 1; cp_ctr < cp_len; cp_ctr++) {
        let codes = code_points[cp_ctr];
        codes = codes.trim();
        let parts = codes.split(___CSTG___);
        exe = parts[0].trim();
        exe = exe.replace(/[\n\r]/, "\\");
        exe = exe.replace(/&gt;/, ">");
        exe = exe.replace(/&lt;/, "<");
        executable += exe;
        if (parts.length > 1 && parts[1].trim().length > 0) {
            printable = parts[1].trim();
            append_print(printable);
        }
    }
    ___EXE___ = executable;
}
