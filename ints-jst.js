// Create a class for the element
class jst_ints extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
}

customElements.define("js-t", jst_ints);

$(document).ready(function () {
    var body = $('body');
    const html = ($(body).html()).trim();
    const len = html.length;
    //const code = html.split;
    var ctr = 0, jst_scope = false,
        executable = '', char_ex = '', last_ch = "-9999",
        print_buffer = '', char_pr = '', temp_pr = '', temp_ex = '';
    const SCOPE_START = "<js-t>";
    const SCOPE_END = "</js-t>";
    var ___ctr_sc_start___ = 0;
    var ___ctr_sc_end___ = 0;



    for (; ctr < len;) {
        //greed parsing scope start <jst>

        char_pr = html[ctr];
        if (!jst_scope && char_pr.toLocaleLowerCase() === SCOPE_START[___ctr_sc_start___]) {
            ctr++;
            ___ctr_sc_start___++;
            temp_pr += char_pr;
            if (___ctr_sc_start___ < SCOPE_START.length) {
                continue;
            }
            ___ctr_sc_start___ = 0;

            //todo scope start
            char_pr = '';
            temp_pr = '';
            jst_scope = true;
        } else if (jst_scope) {
            //flush the print buffer
            executable += "print('" + print_buffer + "');";
            print_buffer = '';

            for (; ctr < len;) {
                //search for scope end
                char_ex = html[ctr];
                if (jst_scope && char_ex.toLocaleLowerCase() === SCOPE_END[___ctr_sc_end___]) {
                    ctr++;
                    ___ctr_sc_end___++;
                    temp_ex += char_ex;
                    if (___ctr_sc_end___ < SCOPE_END.length) {
                        continue;
                    }

                    //todo scope end
                    ___ctr_sc_end___ = 0;
                    jst_scope = false;
                    char_ex = '';
                    temp_ex = '';
                }

                if (char_ex === "\n" || char_ex === '\r') {
                    char_ex = " ";
                }
                executable += temp_ex + char_ex;
                ctr++;

                //todo exit from scope
                if (jst_scope === false) {
                    ctr--;
                    break;
                }
            }//for loop - run in scope
        } else {
            //not in scope, add to print buffer
            if (char_pr === "\n" || char_pr === '\r') {
                char_pr = "\\n";
            }
            print_buffer += temp_pr + char_pr;
            ctr++;
        }
    }//for-loop run in code
    $(body).html('');
    eval(executable);
});

function log(l) {
    console.log(l)
}

function print(g) {
    $('body').append(g);
}