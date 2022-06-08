let count = 2
let currdate = "15.03.2022"
let messages = document.getElementById("messages")
let sendbutton = document.getElementById("send")
let input = document.getElementById("input")

input.addEventListener("keyup", event=> {
    if (event.keyCode === 13) {
        send()
    }
});

function chat_click() {
    document.getElementById("main_column").classList.remove("slideout", "mob_hidden")
}

function chat_close() {
    document.getElementById("main_column").classList.add("slideout")
}

function send() { 
    if ( input.value.trim().length != 0 ) {
        if (currdate != getcurrdate()) {
            messages.innerHTML += '<div class="date_container" id="' + getcurrdate() + '"><div class="date">' + getcurrdate() + '</div></div>'
        }
        currdate = getcurrdate()

        count = count + 1
        let re = /</gi;
        let mess = input.value.replace(re, "&lt;")
        messages.innerHTML += `<div class="mymessagecell" id="msg${count}"><div class="message">${mess}<time>${getcurrtime()}</time></div>${initmsgtools(count)}</div>`
        input.value = ""
        messages.scrollTop = messages.scrollHeight
    }
}

function delmsg(_n) {
    document.getElementById("msg" + _n).remove()
}

function lss0(_time) {
    if (_time < 10) {
        _time = "0" + _time
    }
    return (_time)
}

function getcurrdate() {
    return lss0((new Date).getDate()) + "." + lss0((new Date).getMonth() + 1) + "." + ((new Date).getFullYear())
}

function getcurrtime() {
    return lss0(new Date().getHours()) + ":" + lss0(new Date().getMinutes())
}

function initmsgtools(_msg) {
    return '<div class="msg_tools"><button class="msg_tools_delete" onclick="delmsg(\'' + _msg + '\')">Delete</button></div>'
}
