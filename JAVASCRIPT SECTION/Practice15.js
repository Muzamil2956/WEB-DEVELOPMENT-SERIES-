// start: ['january', 'july', 'march', 'august'] to final: ['july', 'june', 'march', 'august']   change array from start to end

let start = ['january', 'july', 'march', 'august'];
start.shift();
start.shift();
start.unshift('june');
start.unshift('july');
console.log(start);