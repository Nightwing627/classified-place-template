"use strict";
function codemirror_init() {
    var arr = document.querySelectorAll(".file_content");
    if (arr)
        for (var i = 0; i < arr.length; i++) {
            var editor = CodeMirror.fromTextArea(arr[i], {
                lineNumbers: true,
                mode: "application/x-httpd-php",
            });
    }
}