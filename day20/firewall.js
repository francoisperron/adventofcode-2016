export const parse = (input) => input.map(i => [parseInt(i.split('-')[0]), parseInt(i.split('-')[1])]);

export const orderAscending = (blacklist) => blacklist.sort((l1, l2) => l1[0] - l2[0]);

export const ipsIn = (min, max) => Array.from(Array(max - min - 1).keys()).map(v => parseInt(v + min + 1));

export const nonBlockedIps = (blacklist, maxIps) => {
    blacklist = orderAscending(blacklist);
    blacklist.push([maxIps + 1, maxIps + 1]);

    let ips = [];
    let lastMaxIp = -1;
    for (let list of blacklist) {
        const minIp = Math.max(0, list[0]);
        const nbAllowedIps = minIp - lastMaxIp - 1;
        if (nbAllowedIps > 0) {
            const allowedIps = ipsIn(lastMaxIp, minIp);
            ips = [...ips, ...allowedIps];
        }
        lastMaxIp = Math.max(lastMaxIp, list[1]);
    }

    return ips;
};



