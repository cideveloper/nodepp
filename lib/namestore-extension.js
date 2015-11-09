var commandMapping = [{
    "checkDomain": "checkDomainExtension"
}];
function NameStoreExtension() {}

NameStoreExtension.prototype.checkDomainExtension = function(data) {
    var processedExtension = {
        "namestoreExt:namestoreExt" : {
            "_attr": {
                "xmlns:namestoreExt" : "http://www.verisign-grs.com/epp/namestoreExt-1.1"
            },
            "namestoreExt:subProduct": "dotCOM"
        }
    }
    return processedExtension;
};

NameStoreExtension.mixinMapper = function(destObj) {
    return commandMapping;
};

module.exports = NameStoreExtension;

