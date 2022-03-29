var count = 2 // just for demonstration
chat_click = function() {
    document.getElementById("main_column").classList.remove("slideout");
    document.getElementById("main_column").classList.remove("mob_hidden");
}
chat_close = function() {
    document.getElementById("main_column").classList.add("slideout");
}
send = function() {
    if ( document.getElementById("input").value.length != 0 ) {
        count = count + 1
        document.getElementById("messages").innerHTML = document.getElementById("messages").innerHTML + '<div class="mymessagecell" id="msg' + count + '"><div class="message">' + document.getElementById("input").value + '</div><div class="time">' + lss0(new Date().getHours()) + ":" + lss0(new Date().getMinutes()) + '</div><div class="msg_tools"><button class="msg_tools_delete" onclick="delmsg(\'' + count + '\')">Delete</button></div></div>'
        document.getElementById("input").value = ""
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
    }
}
onpageload = function() {
    var input = document.getElementById("input")
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("send").click();
        }
    });
}
delmsg = function(_n) {
    document.getElementById("msg" + _n).remove()
}
lss0 = function(_time) {
    if (_time < 10) {
        _time = "0" + _time
    }
    return (_time)
}