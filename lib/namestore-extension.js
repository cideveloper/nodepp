var commandMapping = [{
    "checkDomain": "checkDomainExtension",
    "createDomain": "createDomainExtension",
    "deleteDomain": "deleteDomainExtension",
    "infoDomain": "infoDomainExtension"
}];
function NameStoreExtension() {}

NameStoreExtension.prototype.checkDomainExtension = function(data) {
    var config = this.config;
    var namespace = config.namespaces.NameStore.xmlns;
    var processedExtension = {
        "namestoreExt:namestoreExt" : {
            "_attr": {
                "xmlns:namestoreExt" : namespace
            },
            "namestoreExt:subProduct": data.tldType
        }
    };
    return processedExtension;
};

NameStoreExtension.prototype.createDomainExtension = function(data) {
    var config = this.config;
    var namespace = config.namespaces.NameStore.xmlns;
    var processedExtension = {
        "namestoreExt:namestoreExt" : {
            "_attr": {
                "xmlns:namestoreExt" : namespace
            },
            "namestoreExt:subProduct": data.tldType
        }
    };
    return processedExtension;
};

NameStoreExtension.prototype.deleteDomainExtension = function(data) {
    var config = this.config;
    var namespace = config.namespaces.NameStore.xmlns;
    var processedExtension = {
        "namestoreExt:namestoreExt" : {
            "_attr": {
                "xmlns:namestoreExt" : namespace
            },
            "namestoreExt:subProduct": data.tldType
        }
    };
    return processedExtension;
};

NameStoreExtension.prototype.infoDomainExtension = function(data) {
    var config = this.config;
    var namespace = config.namespaces.NameStore.xmlns;
    var processedExtension = {
        "namestoreExt:namestoreExt" : {
            "_attr": {
                "xmlns:namestoreExt" : namespace
            },
            "namestoreExt:subProduct": data.tldType
        }
    };
    return processedExtension;
};

NameStoreExtension.mixinMapper = function(destObj) {
    return commandMapping;
};

module.exports = NameStoreExtension;

