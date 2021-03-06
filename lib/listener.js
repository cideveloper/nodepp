var available;
var busy;
var childQueue = [];
var eventer;
function Listener(eventDispatcher, availableProcesses) {
    eventer = eventDispatcher;
    available = availableProcesses;
    busy = {};
}
Listener.prototype.pushChildQueue = function (child) {
    childQueue.push(child);
    console.info("Items in queue: ", childQueue.length);
};
Listener.prototype.childFree = function(registry) {
    console.info(registry + " free ");
    var childProc = busy[registry];
    delete busy[registry];
    available[registry] = childProc;
    eventer.queueChild(registry);
};

Listener.prototype.queueChild = function (registry) {
    var childProc = available[registry];
    if (childProc && childQueue.length > 0) {
        delete available[registry];
        busy[registry] = childProc;
        var callToChild = childQueue.shift();
        callToChild(childProc);
    }
};

module.exports = Listener;
