const electron = require('electron');

let cmd = require('node-cmd');
let pt = '/Users/jartto/Documents/project/electron@5-demo';
 
cmd.get(
    'pwd',
    function(err, data, stderr){
        console.log('the current working dir is : ',data)
        pt = data;
    }
);

// cmd.run('touch created.electron.file');

let temp = document.querySelector('.temp');
temp.innerText = "loading...";

cmd.get(
    `
        cd ${pt}/wrk
        ./wrk -H 'Connection: keep-alive' -t4 -c100 -d10s http://jartto.wang --timeout=5s --latency
    `,
    function(err, data, stderr){
        console.log('>>>>>>>', data, stderr);
        temp.innerText = data;
    }
)
