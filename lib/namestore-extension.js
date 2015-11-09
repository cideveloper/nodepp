var commandMapping = [{
    "checkDomain": "checkDomainExtension"
}];
function NameStoreExtension() {}

NameStoreExtension.prototype.checkDomainExtension = function(data) {
    console.log("Starting checkDomainExtension");
    var config = this.config;
    var namespace = config.namespaces.NameStore.xmlns;
    var processedExtension = {
        "namestoreExt:namestoreExt" : {
            "_attr": {
                "xmlns:namestoreExt" : namespace
            },
            "namestoreExt:subProduct": "dotCOM"
        }
    };
    console.log("8-----------------");
    console.log(data);
    console.log("9-----------------");
    console.log(processedExtension);
    console.log("Finished checkDomainExtension");
    return processedExtension;
};

NameStoreExtension.mixinMapper = function(destObj) {
    return commandMapping;
};

module.exports = NameStoreExtension;

