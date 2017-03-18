function sendMessage() {
    socket.emit('test1', JSON.stringify(someData), function(data){
       console.log('ACK from server wtih data: ', data);
    });
};




