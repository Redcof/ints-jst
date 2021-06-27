"use strict";
// sample check

function print_string(string){
    return string;
}
function print_key(key){
    return key;
}

function add_n(a, b){
    return a+b;
}
var ___NAME___ = "js-t";
var __VERSION___ = "3.9.0";
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
    var source = ___TGT___.querySelectorAll('script[type=jst]')[0].innerHTML;
    ___TGT___.innerHTML = '';

    try {
        var execute = new Function(___EXE___);
        var ret = execute();
        ___TGT___.innerHTML = ___TGT___.innerText;
        ___TGT___.innerHTML += "<script style='display:none;' type='jst'>" + source + "</script>";
        ___TGT___.style.display = '';

        /** select box operation */
        select_box_processing();

        ___TGT___ = null;
        ___EXE___ = null;
        return ret;
    } catch (e) {
        console.error(e.message);
        console.log(___EXE___);
    }
}

function prepare_select() {
    /** select box preparation */
    var select_boxes = ___TGT___.querySelectorAll('select[jst-populate]');
    var ctr = 0, len = select_boxes.length;
    for (ctr = 0; ctr < len; ctr++) {
        var select = select_boxes[ctr];
        var population_option_str = select.getAttribute('jst-populate');
        // var components = population_option_str.match(regex).groups;
        try {
            var components = eval('(' + population_option_str + ')');
            // var population_option = window[components.src];
            var population_option = Object.values(components.src);
            var value_key = components.val;
            var label_key = components.lbl;
            for (var ctr_o = 0; ctr_o < population_option.length; ctr_o++) {
                $(select).append('<option value="' + population_option[ctr_o][value_key] + '">' + population_option[ctr_o][label_key] + '</option>');
            }
        } catch (e) {
            console.error("jst-populate must contain 'src', 'val', 'lbl', where 'val' & 'lbl' are string", select);
            console.error(e);
        }
    }
}

function select_box_processing() {

    /** select box preparation */
    prepare_select();

    /** select box operation */
    var select_boxes = ___TGT___.querySelectorAll('select[jst-populate]');
    var ctr = 0, len = select_boxes.length;
    for (ctr = 0; ctr < len; ctr++) {
        var select = select_boxes[ctr];
        var val = select.getAttribute('jst-selected');
        var option = select.querySelectorAll('option');
        var o_len = option.length;
        if (o_len) {
            for (var o_ctr = 0; o_ctr < o_len; o_ctr++) {
                if (option[o_ctr].getAttribute('value') + "" === val + "") {
                    option[o_ctr].setAttribute('selected', 'selected');
                    break;
                }
            }

        }
    }
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
    var source = ___TGT___.querySelectorAll('script[type=jst]');
    var html = (tgt.innerHTML).trim();
    if (source.length === 0) {
        //get the source code
        html = (tgt.innerHTML).trim();
        ___TGT___.innerHTML += "<script style='display:none;' type='jst'>" + html + "</script>";
    } else {
        html = (source[0].innerHTML).trim();
    }

    var code_points = html.split(___STG___);

    var prnt = '', executable = '', exe = '';

    function filter(str) {
        str = str.replace(/[\s]{2,}/g, " "); // replace space
        str = str.replace(/[\n\r]{1,}/g, "\\n"); // replace line feed
        str = str.replace(/&lt;/g, "<"); // replace <
        str = str.replace(/&gt;/g, ">"); // replace >
        str = str.replace(/'/g, "\\'");// escape single-quote
        return str;
    }

    function append_print(statement) {
        statement = filter(statement);
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
        exe = filter(exe);
        executable += exe;

        if (parts.length > 1 && parts[1].trim().length > 0) {
            //part - 1 can contain expression or printable.
            prnt = parts[1].trim();
            prnt = prnt.replace(/'/g, "\\'");// escape single-quote
            var regex = /{{(?<expression>[\[\]()<>+\-*/=%!|~&.:?\w\s]*)}}/g;
            var print_parts = prnt.split(regex);
            var len = print_parts.length;
            if (len > 1) {
                for (var btr = 0; btr < len; btr += 2) {
                    append_print(print_parts[btr]);
                    if (btr + 1 < len) {
                        executable += "print(" + print_parts[btr + 1] + ");";
                    }
                }
            } else {
                append_print(prnt);
            }
        }
    }
    ___EXE___ = executable;
}

document.querySelectorAll('head')[0].innerHTML += "<style> js-t{display:none;} </style>";
