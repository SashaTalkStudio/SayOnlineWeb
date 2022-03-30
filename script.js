// just for demonstration
count = 2
currdate = "15.03.2022"

onpageload = function() {
    // put elements to variables
    messages = document.getElementById("messages")
    input = document.getElementById("input")
    sendbutton = document.getElementById("send")

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            sendbutton.click();
        }
    });
}

chat_click = function() {
    document.getElementById("main_column").classList.remove("slideout")
    document.getElementById("main_column").classList.remove("mob_hidden")
}

chat_close = function() {
    document.getElementById("main_column").classList.add("slideout")
}

send = function() {
    if (currdate != getcurrdate()) {
        messages.innerHTML += '<div class="date_container" id="' + getcurrdate() + '"><div class="date">' + getcurrdate() + '</div></div>'
    }
    currdate = getcurrdate()
    if ( input.value.length != 0 ) {
        count = count + 1
        messages.innerHTML += '<div class="mymessagecell" id="msg' + count + '"><div class="message">' + input.value + '</div><div class="time">' + getcurrtime() + '</div>' + initmsgtools(count) + '</div>'
        input.value = ""
        messages.scrollTop = messages.scrollHeight
    }
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

getcurrdate = function() {
    return lss0((new Date).getDate()) + "." + lss0((new Date).getMonth() + 1) + "." + ((new Date).getYear() + 1900)
}

getcurrtime = function() {
    return lss0(new Date().getHours()) + ":" + lss0(new Date().getMinutes())
}

initmsgtools = function(_msg) {
    return '<div class="msg_tools"><button class="msg_tools_delete" onclick="delmsg(\'' + _msg + '\')">Delete</button></div>'
}
