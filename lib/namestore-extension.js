var commandMapping = [{
    "createDomain": "createDomainExtension"
}];
function NameStoreExtension() {}

NameStoreExtension.prototype.createDomainExtension = function(data) {
    var processedExtension = {};
    return processedExtension;
};

NameStoreExtension.mixinMapper = function(destObj) {
    return commandMapping;
};

module.exports = NameStoreExtension;

