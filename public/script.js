var socket = io();

let btn = document.getElementById('btn');

btn.onclick = () => {
    socket.emit('from_client',{
        msg: "sent from client click me"
    });
}


socket.on('from_server', (data) => {
    const div = document.createElement('div');
    div.innerText = data.msg;
    document.body.appendChild(div);   
})
