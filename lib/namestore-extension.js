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
                "xmlns:namestoreExt" : "http://www.verisign-grs.com/epp/namestoreExt-1.1"
            },
            "namestoreExt:subProduct": "dotCOM"
        }
    };
    console.log(processedExtension);
    console.log("Finished checkDomainExtension");
    return processedExtension;
};

NameStoreExtension.mixinMapper = function(destObj) {
    return commandMapping;
};

module.exports = NameStoreExtension;

