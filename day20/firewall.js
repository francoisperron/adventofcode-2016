export const parse = (input) => input.map(i => [parseInt(i.split('-')[0]), parseInt(i.split('-')[1])]);

export const orderAscending = (blacklist) => blacklist.sort((l1, l2) => l1[0] - l2[0]);

export const nonBlockedIps = (blacklist, maxIps) => {
    blacklist = orderAscending(blacklist);
    let ips = 0;
    let lastMaxIp = -1;
    for (let list of blacklist) {
        const minIp = Math.max(0, list[0]);
        const allowedIps = minIp - lastMaxIp - 1;
        if (allowedIps > 0) {
            ips += allowedIps;
        }
        lastMaxIp = Math.max(lastMaxIp, list[1]);
    }
    ips += maxIps - lastMaxIp > 0 ? maxIps - lastMaxIp : 0;

    return ips;
};



