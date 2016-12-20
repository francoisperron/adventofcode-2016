export const parse = (input) => input.map(i => [parseInt(i.split('-')[0]), parseInt(i.split('-')[1])]);

export const nonBlockedIp = (blacklist) => {
    let ip = 0;
    let found = false;
    while (!found){
        if(blacklist.find(b => b[0] <= ip && b[1] >= ip) == undefined){
            found = true;
        }
        ip++;
    }
    return --ip;
};



