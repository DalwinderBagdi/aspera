// Script section to load models into a JS Var
var defs = {}

defs["IbmAsperaHsts"] = {
    "title": "IbmAsperaHsts",
    "type": "object",
    "properties": {
        "apiVersion": {
            "type": "string",
            "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources"
        },
        "kind": {
            "type": "string",
            "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
        },
        "metadata": {
            "type": "object"
        },
        "spec": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec"
        },
        "status": {
            "$ref": "#/components/schemas/IbmAsperaHsts_status"
        }
    },
    "description": "Ibm Aspera Hsts is the Schema for the Ibm Aspera Hsts's API",
    "xml": {
        "name": "hsts.aspera.ibm.com",
        "namespace": "v1"
    }
};

defs["IbmAsperaHsts_spec"] = {
    "required": ["license", "version"],
    "type": "object",
    "properties": {
        "ascpconfig": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_ascpconfig"
        },
        "license": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_license"
        },
        "aej": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_aej"
        },
        "routes": {
            "type": "object",
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_routes",
            "description": "Routes describe the hostname or path the routes expose. Only supported on OpenShift."
        },
        "hostPorts": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_hostPorts"
        },
        "deployments": {
            "type": "object",
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_deployments",
            "description": "Deployment overwrites. Supported values are: asperanoded, asperanodedMaster, default, engine, httpProxy, httpScheduler, prometheus, tcpProxy, tcpScheduler"
        },
        "pods": {
            "type": "object",
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_pods",
            "description": "Pod overwrites. Supported values are: ascp, asperanoded, asperanodedMaster, default, httpProxy, httpScheduler, tcpProxy, tcpScheduler, prometheus, engine"
        },
        "containers": {
            "type": "object",
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_containers",
            "description": "Container overwrites. Supported values are: aejd, asconfigurator, ascp, ascplog, askms, asnodeadmin, asperanoded, asredis, asredisProbe, default, election, engine, httpProxy, prometheus, scheduler, tcpProxy"
        },
        "version": {
            "type": "string",
            "description": "Operand version. Supported values are: 3.9.10, 3.9.10-r1"
        },
        "storages": {
            "type": "array",
            "description": "Storage attached to the service.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_storages"
            }
        },
        "redis": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis"
        },
        "credentials": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "Credentials for the asperanoded admin user."
        },
        "configurations": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "Configurations. Supported values are: aejdConf, asperaConf, httpProxyRoutes, stunnelClient, stunnelClientService, stunnelServer, trapProperties"
        },
        "publickeys": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_publickeys"
        },
        "services": {
            "type": "object",
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_services",
            "description": "Service overwrites. Supported values are: asperanoded, default, engine, httpProxy, httpScheduler, prometheus, tcpProxy, tcpScheduler"
        },
        "sshdconfig": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_sshdconfig"
        },
        "certificateAndKey": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "TLS certificate and key."
        }
    },
    "description": "IbmAsperaHstsSpec defines the desired state of IbmAsperaHsts"
};
defs["IbmAsperaHsts_spec_aej"] = {
    "type": "object",
    "properties": {
        "toKafka": {
            "type": "array",
            "description": "List of kafka egress",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_aej_toKafka"
            }
        }
    },
    "description": "AEJ configuration"
};
defs["IbmAsperaHsts_spec_aej_toKafka"] = {
    "type": "object",
    "properties": {
        "address": {
            "type": "string",
            "description": "Host running kafka"
        },
        "autoCreateTopic": {
            "type": "boolean",
            "description": "auto create kafka topic or not, if topic doesen't exist"
        },
        "numPartitions": {
            "type": "integer",
            "description": "default number of patition of a kafka topic"
        },
        "replicationFactor": {
            "type": "integer",
            "description": "default replication factor of a kafka topic"
        },
        "saslMechanisms": {
            "type": "string",
            "description": "saslMechanisms"
        },
        "saslPassword": {
            "type": "string",
            "description": "Password"
        },
        "saslUsername": {
            "type": "string",
            "description": "Username"
        },
        "sslCertificate": {
            "type": "string",
            "description": "Certificate"
        }
    }
};
defs["IbmAsperaHsts_spec_affinity"] = {
    "type": "object",
    "properties": {
        "nodeAffinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity"
        },
        "podAffinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity"
        },
        "podAntiAffinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAntiAffinity"
        }
    },
    "description": "If specified, the pod's scheduling constraints"
};
defs["IbmAsperaHsts_spec_affinity_nodeAffinity"] = {
    "type": "object",
    "properties": {
        "preferredDuringSchedulingIgnoredDuringExecution": {
            "type": "array",
            "description": "The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_preferredDuringSchedulingIgnoredDuringExecution"
            }
        },
        "requiredDuringSchedulingIgnoredDuringExecution": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_requiredDuringSchedulingIgnoredDuringExecution"
        }
    },
    "description": "Describes node affinity scheduling rules for the pod."
};
defs["IbmAsperaHsts_spec_affinity_nodeAffinity_preference"] = {
    "type": "object",
    "properties": {
        "matchExpressions": {
            "type": "array",
            "description": "A list of node selector requirements by node's labels.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_preference_matchExpressions"
            }
        },
        "matchFields": {
            "type": "array",
            "description": "A list of node selector requirements by node's fields.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_preference_matchExpressions"
            }
        }
    },
    "description": "A node selector term, associated with the corresponding weight."
};
defs["IbmAsperaHsts_spec_affinity_nodeAffinity_preference_matchExpressions"] = {
    "required": ["key", "operator"],
    "type": "object",
    "properties": {
        "key": {
            "type": "string",
            "description": "The label key that the selector applies to."
        },
        "operator": {
            "type": "string",
            "description": "Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt."
        },
        "values": {
            "type": "array",
            "description": "An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.",
            "items": {
                "type": "string"
            }
        }
    },
    "description": "A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values."
};
defs["IbmAsperaHsts_spec_affinity_nodeAffinity_preferredDuringSchedulingIgnoredDuringExecution"] = {
    "required": ["preference", "weight"],
    "type": "object",
    "properties": {
        "preference": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_preference"
        },
        "weight": {
            "type": "integer",
            "description": "Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.",
            "format": "int32"
        }
    },
    "description": "An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op)."
};
defs["IbmAsperaHsts_spec_affinity_nodeAffinity_requiredDuringSchedulingIgnoredDuringExecution"] = {
    "required": ["nodeSelectorTerms"],
    "type": "object",
    "properties": {
        "nodeSelectorTerms": {
            "type": "array",
            "description": "Required. A list of node selector terms. The terms are ORed.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_requiredDuringSchedulingIgnoredDuringExecution_nodeSelectorTerms"
            }
        }
    },
    "description": "If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node."
};
defs["IbmAsperaHsts_spec_affinity_nodeAffinity_requiredDuringSchedulingIgnoredDuringExecution_nodeSelectorTerms"] = {
    "type": "object",
    "properties": {
        "matchExpressions": {
            "type": "array",
            "description": "A list of node selector requirements by node's labels.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_preference_matchExpressions"
            }
        },
        "matchFields": {
            "type": "array",
            "description": "A list of node selector requirements by node's fields.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity_preference_matchExpressions"
            }
        }
    },
    "description": "A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm."
};
defs["IbmAsperaHsts_spec_affinity_podAffinity"] = {
    "type": "object",
    "properties": {
        "preferredDuringSchedulingIgnoredDuringExecution": {
            "type": "array",
            "description": "The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_preferredDuringSchedulingIgnoredDuringExecution"
            }
        },
        "requiredDuringSchedulingIgnoredDuringExecution": {
            "type": "array",
            "description": "If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_requiredDuringSchedulingIgnoredDuringExecution"
            }
        }
    },
    "description": "Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s))."
};
defs["IbmAsperaHsts_spec_affinity_podAffinity_podAffinityTerm"] = {
    "required": ["topologyKey"],
    "type": "object",
    "properties": {
        "labelSelector": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_podAffinityTerm_labelSelector"
        },
        "namespaces": {
            "type": "array",
            "description": "namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means \"this pod's namespace\"",
            "items": {
                "type": "string"
            }
        },
        "topologyKey": {
            "type": "string",
            "description": "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed."
        }
    },
    "description": "Required. A pod affinity term, associated with the corresponding weight."
};
defs["IbmAsperaHsts_spec_affinity_podAffinity_podAffinityTerm_labelSelector"] = {
    "type": "object",
    "properties": {
        "matchExpressions": {
            "type": "array",
            "description": "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_podAffinityTerm_labelSelector_matchExpressions"
            }
        },
        "matchLabels": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed."
        }
    },
    "description": "A label query over a set of resources, in this case pods."
};
defs["IbmAsperaHsts_spec_affinity_podAffinity_podAffinityTerm_labelSelector_matchExpressions"] = {
    "required": ["key", "operator"],
    "type": "object",
    "properties": {
        "key": {
            "type": "string",
            "description": "key is the label key that the selector applies to."
        },
        "operator": {
            "type": "string",
            "description": "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist."
        },
        "values": {
            "type": "array",
            "description": "values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.",
            "items": {
                "type": "string"
            }
        }
    },
    "description": "A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values."
};
defs["IbmAsperaHsts_spec_affinity_podAffinity_preferredDuringSchedulingIgnoredDuringExecution"] = {
    "required": ["podAffinityTerm", "weight"],
    "type": "object",
    "properties": {
        "podAffinityTerm": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_podAffinityTerm"
        },
        "weight": {
            "type": "integer",
            "description": "weight associated with matching the corresponding podAffinityTerm, in the range 1-100.",
            "format": "int32"
        }
    },
    "description": "The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)"
};
defs["IbmAsperaHsts_spec_affinity_podAffinity_requiredDuringSchedulingIgnoredDuringExecution"] = {
    "required": ["topologyKey"],
    "type": "object",
    "properties": {
        "labelSelector": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_podAffinityTerm_labelSelector"
        },
        "namespaces": {
            "type": "array",
            "description": "namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means \"this pod's namespace\"",
            "items": {
                "type": "string"
            }
        },
        "topologyKey": {
            "type": "string",
            "description": "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed."
        }
    },
    "description": "Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running"
};
defs["IbmAsperaHsts_spec_affinity_podAntiAffinity"] = {
    "type": "object",
    "properties": {
        "preferredDuringSchedulingIgnoredDuringExecution": {
            "type": "array",
            "description": "The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_preferredDuringSchedulingIgnoredDuringExecution"
            }
        },
        "requiredDuringSchedulingIgnoredDuringExecution": {
            "type": "array",
            "description": "If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity_requiredDuringSchedulingIgnoredDuringExecution"
            }
        }
    },
    "description": "Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s))."
};
defs["IbmAsperaHsts_spec_ascpconfig"] = {
    "type": "object",
    "properties": {
        "config": {
            "type": "string",
            "description": "aspera.conf to use instead of the default"
        }
    },
    "description": "Aspera Configuration"
};
defs["IbmAsperaHsts_spec_awsElasticBlockStore"] = {
    "required": ["volumeID"],
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine"
        },
        "partition": {
            "type": "integer",
            "description": "The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty).",
            "format": "int32"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Specify \"true\" to force and set the ReadOnly property in VolumeMounts to \"true\". If omitted, the default is \"false\". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore"
        },
        "volumeID": {
            "type": "string",
            "description": "Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore"
        }
    },
    "description": "AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore"
};
defs["IbmAsperaHsts_spec_azureDisk"] = {
    "required": ["diskName", "diskURI"],
    "type": "object",
    "properties": {
        "cachingMode": {
            "type": "string",
            "description": "Host Caching mode: None, Read Only, Read Write."
        },
        "diskName": {
            "type": "string",
            "description": "The Name of the data disk in the blob storage"
        },
        "diskURI": {
            "type": "string",
            "description": "The URI the data disk in the blob storage"
        },
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified."
        },
        "kind": {
            "type": "string",
            "description": "Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."
        }
    },
    "description": "AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod."
};
defs["IbmAsperaHsts_spec_azureFile"] = {
    "required": ["secretName", "shareName"],
    "type": "object",
    "properties": {
        "readOnly": {
            "type": "boolean",
            "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."
        },
        "secretName": {
            "type": "string",
            "description": "the name of secret that contains Azure Storage Account Name and Key"
        },
        "shareName": {
            "type": "string",
            "description": "Share Name"
        }
    },
    "description": "AzureFile represents an Azure File Service mount on the host and bind mount to the pod."
};
defs["IbmAsperaHsts_spec_cephfs"] = {
    "required": ["monitors"],
    "type": "object",
    "properties": {
        "monitors": {
            "type": "array",
            "description": "Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
            "items": {
                "type": "string"
            }
        },
        "path": {
            "type": "string",
            "description": "Optional: Used as the mounted root, rather than the full Ceph tree, default is /"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it"
        },
        "secretFile": {
            "type": "string",
            "description": "Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it"
        },
        "secretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_cephfs_secretRef"
        },
        "user": {
            "type": "string",
            "description": "Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it"
        }
    },
    "description": "CephFS represents a Ceph FS mount on the host that shares a pod's lifetime"
};
defs["IbmAsperaHsts_spec_cephfs_secretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it"
};
defs["IbmAsperaHsts_spec_cinder"] = {
    "required": ["volumeID"],
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md"
        },
        "secretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_cinder_secretRef"
        },
        "volumeID": {
            "type": "string",
            "description": "volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md"
        }
    },
    "description": "Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md"
};
defs["IbmAsperaHsts_spec_cinder_secretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "Optional: points to a secret object containing parameters used to connect to OpenStack."
};
defs["IbmAsperaHsts_spec_configMap"] = {
    "type": "object",
    "properties": {
        "defaultMode": {
            "type": "integer",
            "description": "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
            "format": "int32"
        },
        "items": {
            "type": "array",
            "description": "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_secret_items"
            }
        },
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        },
        "optional": {
            "type": "boolean",
            "description": "Specify whether the ConfigMap or its keys must be defined"
        }
    },
    "description": "ConfigMap represents a configMap that should populate this volume"
};
defs["IbmAsperaHsts_spec_containers"] = {
    "type": "object",
    "properties": {
        "image": {
            "type": "string",
            "description": "Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets."
        },
        "imagePullPolicy": {
            "type": "string",
            "description": "Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images"
        },
        "livenessProbe": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_livenessProbe"
        },
        "readinessProbe": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_readinessProbe"
        },
        "resources": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_resources"
        },
        "securityContext": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_securityContext"
        },
        "volumeMounts": {
            "type": "array",
            "description": "Pod volumes to mount into the container's filesystem. Cannot be updated.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_volumeMounts"
            }
        }
    }
};
defs["IbmAsperaHsts_spec_csi"] = {
    "required": ["driver"],
    "type": "object",
    "properties": {
        "driver": {
            "type": "string",
            "description": "Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster."
        },
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply."
        },
        "nodePublishSecretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_csi_nodePublishSecretRef"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Specifies a read-only configuration for the volume. Defaults to false (read/write)."
        },
        "volumeAttributes": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values."
        }
    },
    "description": "CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature)."
};
defs["IbmAsperaHsts_spec_csi_nodePublishSecretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed."
};
defs["IbmAsperaHsts_spec_deployments"] = {
    "type": "object",
    "properties": {
        "metadata": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_metadata"
        },
        "replicas": {
            "type": "integer",
            "description": "Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller",
            "format": "int32"
        }
    }
};
defs["IbmAsperaHsts_spec_downwardAPI"] = {
    "type": "object",
    "properties": {
        "defaultMode": {
            "type": "integer",
            "description": "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
            "format": "int32"
        },
        "items": {
            "type": "array",
            "description": "Items is a list of downward API volume file",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_downwardAPI_items"
            }
        }
    },
    "description": "DownwardAPI represents downward API about the pod that should populate this volume"
};
defs["IbmAsperaHsts_spec_emptyDir"] = {
    "type": "object",
    "properties": {
        "medium": {
            "type": "string",
            "description": "What type of storage medium should back this directory. The default is \"\" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir"
        },
        "sizeLimit": {
            "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
            "description": "Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir",
            "anyOf": [{
                "type": "integer"
            }, {
                "type": "string"
            }],
            "x-kubernetes-int-or-string": true
        }
    },
    "description": "EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir"
};
defs["IbmAsperaHsts_spec_fc"] = {
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine"
        },
        "lun": {
            "type": "integer",
            "description": "Optional: FC target lun number",
            "format": "int32"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."
        },
        "targetWWNs": {
            "type": "array",
            "description": "Optional: FC target worldwide names (WWNs)",
            "items": {
                "type": "string"
            }
        },
        "wwids": {
            "type": "array",
            "description": "Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.",
            "items": {
                "type": "string"
            }
        }
    },
    "description": "FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod."
};
defs["IbmAsperaHsts_spec_flexVolume"] = {
    "required": ["driver"],
    "type": "object",
    "properties": {
        "driver": {
            "type": "string",
            "description": "Driver is the name of the driver to use for this volume."
        },
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script."
        },
        "options": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "Optional: Extra command options if any."
        },
        "readOnly": {
            "type": "boolean",
            "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."
        },
        "secretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_flexVolume_secretRef"
        }
    },
    "description": "FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin."
};
defs["IbmAsperaHsts_spec_flexVolume_secretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts."
};
defs["IbmAsperaHsts_spec_flocker"] = {
    "type": "object",
    "properties": {
        "datasetName": {
            "type": "string",
            "description": "Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated"
        },
        "datasetUUID": {
            "type": "string",
            "description": "UUID of the dataset. This is unique identifier of a Flocker dataset"
        }
    },
    "description": "Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running"
};
defs["IbmAsperaHsts_spec_gcePersistentDisk"] = {
    "required": ["pdName"],
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine"
        },
        "partition": {
            "type": "integer",
            "description": "The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
            "format": "int32"
        },
        "pdName": {
            "type": "string",
            "description": "Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk"
        },
        "readOnly": {
            "type": "boolean",
            "description": "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk"
        }
    },
    "description": "GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk"
};
defs["IbmAsperaHsts_spec_gitRepo"] = {
    "required": ["repository"],
    "type": "object",
    "properties": {
        "directory": {
            "type": "string",
            "description": "Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name."
        },
        "repository": {
            "type": "string",
            "description": "Repository URL"
        },
        "revision": {
            "type": "string",
            "description": "Commit hash for the specified revision."
        }
    },
    "description": "GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container."
};
defs["IbmAsperaHsts_spec_glusterfs"] = {
    "required": ["endpoints", "path"],
    "type": "object",
    "properties": {
        "endpoints": {
            "type": "string",
            "description": "EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod"
        },
        "path": {
            "type": "string",
            "description": "Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod"
        },
        "readOnly": {
            "type": "boolean",
            "description": "ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod"
        }
    },
    "description": "Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md"
};
defs["IbmAsperaHsts_spec_hostPath"] = {
    "required": ["path"],
    "type": "object",
    "properties": {
        "path": {
            "type": "string",
            "description": "Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath"
        },
        "type": {
            "type": "string",
            "description": "Type for HostPath Volume Defaults to \"\" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath"
        }
    },
    "description": "HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write."
};
defs["IbmAsperaHsts_spec_hostPorts"] = {
    "type": "object",
    "properties": {
        "ascp": {
            "type": "integer",
            "format": "int32"
        }
    },
    "description": "HostPorts overwrites. Supported values are: ascp"
};
defs["IbmAsperaHsts_spec_imagePullSecrets"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace."
};
defs["IbmAsperaHsts_spec_iscsi"] = {
    "required": ["iqn", "lun", "targetPortal"],
    "type": "object",
    "properties": {
        "readOnly": {
            "type": "boolean",
            "description": "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false."
        },
        "secretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_iscsi_secretRef"
        },
        "lun": {
            "type": "integer",
            "description": "iSCSI Target Lun number.",
            "format": "int32"
        },
        "iqn": {
            "type": "string",
            "description": "Target iSCSI Qualified Name."
        },
        "portals": {
            "type": "array",
            "description": "iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).",
            "items": {
                "type": "string"
            }
        },
        "fsType": {
            "type": "string",
            "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine"
        },
        "iscsiInterface": {
            "type": "string",
            "description": "iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp)."
        },
        "chapAuthDiscovery": {
            "type": "boolean",
            "description": "whether support iSCSI Discovery CHAP authentication"
        },
        "initiatorName": {
            "type": "string",
            "description": "Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection."
        },
        "chapAuthSession": {
            "type": "boolean",
            "description": "whether support iSCSI Session CHAP authentication"
        },
        "targetPortal": {
            "type": "string",
            "description": "iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260)."
        }
    },
    "description": "ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md"
};
defs["IbmAsperaHsts_spec_iscsi_secretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "CHAP Secret for iSCSI target and initiator authentication"
};
defs["IbmAsperaHsts_spec_license"] = {
    "required": ["accept", "key", "use"],
    "type": "object",
    "properties": {
        "accept": {
            "type": "boolean",
            "description": "Accept the aspera license"
        },
        "key": {
            "type": "string",
            "description": "The aspera license key"
        },
        "use": {
            "type": "string",
            "description": "Use of License. Supported values are: CloudPakForIntegrationNonProduction, CloudPakForIntegrationProduction, AsperaNonProduction, AsperaProduction"
        }
    },
    "description": "License configuration"
};
defs["IbmAsperaHsts_spec_livenessProbe"] = {
    "type": "object",
    "properties": {
        "failureThreshold": {
            "type": "integer",
            "description": "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
            "format": "int32"
        },
        "initialDelaySeconds": {
            "type": "integer",
            "description": "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
            "format": "int32"
        },
        "periodSeconds": {
            "type": "integer",
            "description": "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
            "format": "int32"
        },
        "successThreshold": {
            "type": "integer",
            "description": "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
            "format": "int32"
        },
        "timeoutSeconds": {
            "type": "integer",
            "description": "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
            "format": "int32"
        }
    },
    "description": "Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
};
defs["IbmAsperaHsts_spec_metadata"] = {
    "type": "object",
    "properties": {
        "annotations": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations"
        },
        "labels": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels"
        }
    },
    "description": "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata"
};
defs["IbmAsperaHsts_spec_nfs"] = {
    "required": ["path", "server"],
    "type": "object",
    "properties": {
        "path": {
            "type": "string",
            "description": "Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs"
        },
        "readOnly": {
            "type": "boolean",
            "description": "ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs"
        },
        "server": {
            "type": "string",
            "description": "Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs"
        }
    },
    "description": "NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs"
};
defs["IbmAsperaHsts_spec_persistentVolumeClaim"] = {
    "required": ["claimName"],
    "type": "object",
    "properties": {
        "claimName": {
            "type": "string",
            "description": "ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Will force the ReadOnly setting in VolumeMounts. Default false."
        }
    },
    "description": "PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims"
};
defs["IbmAsperaHsts_spec_photonPersistentDisk"] = {
    "required": ["pdID"],
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified."
        },
        "pdID": {
            "type": "string",
            "description": "ID that identifies Photon Controller persistent disk"
        }
    },
    "description": "PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine"
};
defs["IbmAsperaHsts_spec_pods"] = {
    "type": "object",
    "properties": {
        "affinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity"
        },
        "imagePullSecrets": {
            "type": "array",
            "description": "ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_imagePullSecrets"
            }
        },
        "metadata": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_metadata"
        },
        "nodeSelector": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            },
            "description": "NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"
        },
        "serviceAccountName": {
            "type": "string",
            "description": "More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"
        },
        "volumes": {
            "type": "array",
            "description": "List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_volumes"
            }
        }
    }
};
defs["IbmAsperaHsts_spec_ports"] = {
    "required": ["name", "port"],
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The name of the container port this port is referring to."
        },
        "port": {
            "type": "integer",
            "description": "The port that will be exposed by this service.",
            "format": "int32"
        }
    }
};
defs["IbmAsperaHsts_spec_portworxVolume"] = {
    "required": ["volumeID"],
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\". Implicitly inferred to be \"ext4\" if unspecified."
        },
        "readOnly": {
            "type": "boolean",
            "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."
        },
        "volumeID": {
            "type": "string",
            "description": "VolumeID uniquely identifies a Portworx volume"
        }
    },
    "description": "PortworxVolume represents a portworx volume attached and mounted on kubelets host machine"
};
defs["IbmAsperaHsts_spec_projected"] = {
    "required": ["sources"],
    "type": "object",
    "properties": {
        "defaultMode": {
            "type": "integer",
            "description": "Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
            "format": "int32"
        },
        "sources": {
            "type": "array",
            "description": "list of volume projections",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_sources"
            }
        }
    },
    "description": "Items for all in one resources secrets, configmaps, and downward API"
};
defs["IbmAsperaHsts_spec_projected_configMap"] = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "description": "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_secret_items"
            }
        },
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        },
        "optional": {
            "type": "boolean",
            "description": "Specify whether the ConfigMap or its keys must be defined"
        }
    },
    "description": "information about the configMap data to project"
};
defs["IbmAsperaHsts_spec_projected_downwardAPI"] = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "description": "Items is a list of DownwardAPIVolume file",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_downwardAPI_items"
            }
        }
    },
    "description": "information about the downwardAPI data to project"
};
defs["IbmAsperaHsts_spec_projected_downwardAPI_fieldRef"] = {
    "required": ["fieldPath"],
    "type": "object",
    "properties": {
        "apiVersion": {
            "type": "string",
            "description": "Version of the schema the FieldPath is written in terms of, defaults to \"v1\"."
        },
        "fieldPath": {
            "type": "string",
            "description": "Path of the field to select in the specified API version."
        }
    },
    "description": "Required: Selects a field of the pod: only annotations, labels, name and namespace are supported."
};
defs["IbmAsperaHsts_spec_projected_downwardAPI_items"] = {
    "required": ["path"],
    "type": "object",
    "properties": {
        "fieldRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_downwardAPI_fieldRef"
        },
        "mode": {
            "type": "integer",
            "description": "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
            "format": "int32"
        },
        "path": {
            "type": "string",
            "description": "Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'"
        },
        "resourceFieldRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_downwardAPI_resourceFieldRef"
        }
    },
    "description": "DownwardAPIVolumeFile represents information to create the file containing the pod field"
};
defs["IbmAsperaHsts_spec_projected_downwardAPI_resourceFieldRef"] = {
    "required": ["resource"],
    "type": "object",
    "properties": {
        "containerName": {
            "type": "string",
            "description": "Container name: required for volumes, optional for env vars"
        },
        "divisor": {
            "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
            "description": "Specifies the output format of the exposed resources, defaults to \"1\"",
            "anyOf": [{
                "type": "integer"
            }, {
                "type": "string"
            }],
            "x-kubernetes-int-or-string": true
        },
        "resource": {
            "type": "string",
            "description": "Required: resource to select"
        }
    },
    "description": "Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported."
};
defs["IbmAsperaHsts_spec_projected_secret"] = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "description": "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_secret_items"
            }
        },
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        },
        "optional": {
            "type": "boolean",
            "description": "Specify whether the Secret or its key must be defined"
        }
    },
    "description": "information about the secret data to project"
};
defs["IbmAsperaHsts_spec_projected_serviceAccountToken"] = {
    "required": ["path"],
    "type": "object",
    "properties": {
        "audience": {
            "type": "string",
            "description": "Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver."
        },
        "expirationSeconds": {
            "type": "integer",
            "description": "ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.",
            "format": "int64"
        },
        "path": {
            "type": "string",
            "description": "Path is the path relative to the mount point of the file to project the token into."
        }
    },
    "description": "information about the serviceAccountToken data to project"
};
defs["IbmAsperaHsts_spec_projected_sources"] = {
    "type": "object",
    "properties": {
        "configMap": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_configMap"
        },
        "downwardAPI": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_downwardAPI"
        },
        "secret": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_secret"
        },
        "serviceAccountToken": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected_serviceAccountToken"
        }
    },
    "description": "Projection that may be projected along with other supported volume types"
};
defs["IbmAsperaHsts_spec_publickeys"] = {
    "type": "object",
    "properties": {
        "keys": {
            "type": "string",
            "description": "Public keys for aspera to use"
        }
    },
    "description": "Publickeys configuration"
};
defs["IbmAsperaHsts_spec_quobyte"] = {
    "required": ["registry", "volume"],
    "type": "object",
    "properties": {
        "group": {
            "type": "string",
            "description": "Group to map volume access to Default is no group"
        },
        "readOnly": {
            "type": "boolean",
            "description": "ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false."
        },
        "registry": {
            "type": "string",
            "description": "Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes"
        },
        "tenant": {
            "type": "string",
            "description": "Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin"
        },
        "user": {
            "type": "string",
            "description": "User to map volume access to Defaults to serivceaccount user"
        },
        "volume": {
            "type": "string",
            "description": "Volume is a string that references an already created Quobyte volume by name."
        }
    },
    "description": "Quobyte represents a Quobyte mount on the host that shares a pod's lifetime"
};
defs["IbmAsperaHsts_spec_rbd"] = {
    "required": ["image", "monitors"],
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine"
        },
        "image": {
            "type": "string",
            "description": "The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it"
        },
        "keyring": {
            "type": "string",
            "description": "Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it"
        },
        "monitors": {
            "type": "array",
            "description": "A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
            "items": {
                "type": "string"
            }
        },
        "pool": {
            "type": "string",
            "description": "The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it"
        },
        "readOnly": {
            "type": "boolean",
            "description": "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it"
        },
        "secretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_rbd_secretRef"
        },
        "user": {
            "type": "string",
            "description": "The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it"
        }
    },
    "description": "RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md"
};
defs["IbmAsperaHsts_spec_rbd_secretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it"
};
defs["IbmAsperaHsts_spec_readinessProbe"] = {
    "type": "object",
    "properties": {
        "failureThreshold": {
            "type": "integer",
            "description": "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
            "format": "int32"
        },
        "initialDelaySeconds": {
            "type": "integer",
            "description": "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
            "format": "int32"
        },
        "periodSeconds": {
            "type": "integer",
            "description": "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
            "format": "int32"
        },
        "successThreshold": {
            "type": "integer",
            "description": "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
            "format": "int32"
        },
        "timeoutSeconds": {
            "type": "integer",
            "description": "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
            "format": "int32"
        }
    },
    "description": "Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
};
defs["IbmAsperaHsts_spec_redis"] = {
    "type": "object",
    "properties": {
        "size": {
            "type": "integer",
            "description": "Replica size of members and sentinels",
            "format": "int32"
        },
        "license": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_license"
        },
        "resources": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_resources"
        },
        "external": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_external"
        },
        "sentinels": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_sentinels"
        },
        "environment": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_environment"
        },
        "version": {
            "type": "string",
            "description": "Redis version. Supported values are: 5.0.5, 5.0.9"
        },
        "devMode": {
            "type": "boolean"
        },
        "members": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_members"
        },
        "persistence": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_persistence"
        }
    },
    "description": "Redis configuration."
};
defs["IbmAsperaHsts_spec_redis_environment"] = {
    "type": "object",
    "properties": {
        "adminPassword": {
            "type": "string",
            "description": "Redis administrator password"
        },
        "logLevel": {
            "type": "string"
        }
    },
    "description": "Redis environment configuration"
};
defs["IbmAsperaHsts_spec_redis_external"] = {
    "type": "object",
    "properties": {
        "enabled": {
            "type": "boolean",
            "description": "Enable external redis"
        },
        "host": {
            "type": "string",
            "description": "Host running the provided redis database"
        },
        "port": {
            "type": "integer",
            "description": "Port on which the provided redis host is listening"
        },
        "sentinel": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_external_sentinel"
        },
        "tls": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_external_tls"
        }
    },
    "description": "External redis configuration"
};
defs["IbmAsperaHsts_spec_redis_external_sentinel"] = {
    "type": "object",
    "properties": {
        "enabled": {
            "type": "boolean",
            "description": "Enable external redis sentinel"
        },
        "masterSet": {
            "type": "string",
            "description": "Master set name"
        },
        "port": {
            "type": "integer",
            "description": "Port on which the provided redis sentinel is listening"
        }
    },
    "description": "External redis sentinel configuration"
};
defs["IbmAsperaHsts_spec_redis_external_tls"] = {
    "type": "object",
    "properties": {
        "authClients": {
            "type": "boolean",
            "description": "Require clients to authenticate"
        },
        "caCert": {
            "type": "string",
            "description": "Name of the key containing the ca certificate"
        },
        "cert": {
            "type": "string",
            "description": "Name of the key containing the certificate"
        },
        "enabled": {
            "type": "boolean",
            "description": "Enable external redis tls"
        },
        "key": {
            "type": "string",
            "description": "Name of the key containing the key"
        },
        "secretName": {
            "type": "string",
            "description": "Name of the secret containing the credentials"
        }
    },
    "description": "External redis tls configuration"
};
defs["IbmAsperaHsts_spec_redis_license"] = {
    "type": "object",
    "properties": {
        "accept": {
            "type": "boolean",
            "description": "To install you must accept the Redis license"
        }
    },
    "description": "Redis license configuration"
};
defs["IbmAsperaHsts_spec_redis_members"] = {
    "type": "object",
    "properties": {
        "affinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_sentinels_affinity"
        },
        "annotations": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        },
        "labels": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        }
    },
    "description": "Custom labels, annotations and affinity rules for redis members pods"
};
defs["IbmAsperaHsts_spec_redis_persistence"] = {
    "type": "object",
    "properties": {
        "disk": {
            "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
            "anyOf": [{
                "type": "integer"
            }, {
                "type": "string"
            }],
            "x-kubernetes-int-or-string": true
        },
        "enabled": {
            "type": "boolean",
            "description": "Enable redis persistence"
        },
        "storageClass": {
            "type": "string",
            "description": "Name of the StorageClass required by the claim"
        }
    },
    "description": "Redis Persistence configuration"
};
defs["IbmAsperaHsts_spec_redis_resources"] = {
    "type": "object",
    "properties": {
        "requests": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_resources_requests"
        }
    },
    "description": "Compute resources CPU and memory for members and sentinels"
};
defs["IbmAsperaHsts_spec_redis_resources_requests"] = {
    "type": "object",
    "properties": {
        "cpu": {
            "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
            "anyOf": [{
                "type": "integer"
            }, {
                "type": "string"
            }],
            "x-kubernetes-int-or-string": true
        },
        "memory": {
            "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
            "anyOf": [{
                "type": "integer"
            }, {
                "type": "string"
            }],
            "x-kubernetes-int-or-string": true
        }
    }
};
defs["IbmAsperaHsts_spec_redis_sentinels"] = {
    "type": "object",
    "properties": {
        "affinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_redis_sentinels_affinity"
        },
        "annotations": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        },
        "labels": {
            "type": "object",
            "additionalProperties": {
                "type": "string"
            }
        }
    },
    "description": "Custom labels, annotations and affinity rules for redis sentinels pods"
};
defs["IbmAsperaHsts_spec_redis_sentinels_affinity"] = {
    "type": "object",
    "properties": {
        "nodeAffinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_nodeAffinity"
        },
        "podAffinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAffinity"
        },
        "podAntiAffinity": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_affinity_podAntiAffinity"
        }
    },
    "description": "Affinity is a group of affinity scheduling rules."
};
defs["IbmAsperaHsts_spec_resources"] = {
    "type": "object",
    "properties": {
        "limits": {
            "type": "object",
            "additionalProperties": {
                "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
                "anyOf": [{
                    "type": "integer"
                }, {
                    "type": "string"
                }],
                "x-kubernetes-int-or-string": true
            },
            "description": "Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"
        },
        "requests": {
            "type": "object",
            "additionalProperties": {
                "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
                "anyOf": [{
                    "type": "integer"
                }, {
                    "type": "string"
                }],
                "x-kubernetes-int-or-string": true
            },
            "description": "Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"
        }
    },
    "description": "Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"
};
defs["IbmAsperaHsts_spec_routes"] = {
    "type": "object",
    "properties": {
        "host": {
            "type": "string",
            "description": "host is an alias/DNS that points to the service. Optional. If not specified a route name will typically be automatically chosen. Must follow DNS952 subdomain conventions."
        },
        "metadata": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_metadata"
        },
        "subdomain": {
            "type": "string",
            "description": "subdomain is a DNS subdomain that is requested within the ingress controller's domain (as a subdomain). If host is set this field is ignored. An ingress controller may choose to ignore this suggested name, in which case the controller will report the assigned name in the status.ingress array or refuse to admit the route. If this value is set and the server does not support this field host will be populated automatically. Otherwise host is left empty. The field may have multiple parts separated by a dot, but not all ingress controllers may honor the request. This field may not be changed after creation except by a user with the update routes/custom-host permission. \\n Example: subdomain `frontend` automatically receives the router subdomain `apps.mycluster.com` to have a full hostname `frontend.apps.mycluster.com`."
        }
    }
};
defs["IbmAsperaHsts_spec_scaleIO"] = {
    "required": ["gateway", "secretRef", "system"],
    "type": "object",
    "properties": {
        "readOnly": {
            "type": "boolean",
            "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."
        },
        "secretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_scaleIO_secretRef"
        },
        "gateway": {
            "type": "string",
            "description": "The host address of the ScaleIO API Gateway."
        },
        "volumeName": {
            "type": "string",
            "description": "The name of a volume already created in the ScaleIO system that is associated with this volume source."
        },
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\"."
        },
        "system": {
            "type": "string",
            "description": "The name of the storage system as configured in ScaleIO."
        },
        "sslEnabled": {
            "type": "boolean",
            "description": "Flag to enable/disable SSL communication with Gateway, default false"
        },
        "storagePool": {
            "type": "string",
            "description": "The ScaleIO Storage Pool associated with the protection domain."
        },
        "protectionDomain": {
            "type": "string",
            "description": "The name of the ScaleIO Protection Domain for the configured storage."
        },
        "storageMode": {
            "type": "string",
            "description": "Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned."
        }
    },
    "description": "ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes."
};
defs["IbmAsperaHsts_spec_scaleIO_secretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail."
};
defs["IbmAsperaHsts_spec_secret"] = {
    "type": "object",
    "properties": {
        "defaultMode": {
            "type": "integer",
            "description": "Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
            "format": "int32"
        },
        "items": {
            "type": "array",
            "description": "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_secret_items"
            }
        },
        "optional": {
            "type": "boolean",
            "description": "Specify whether the Secret or its keys must be defined"
        },
        "secretName": {
            "type": "string",
            "description": "Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret"
        }
    },
    "description": "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret"
};
defs["IbmAsperaHsts_spec_secret_items"] = {
    "required": ["key", "path"],
    "type": "object",
    "properties": {
        "key": {
            "type": "string",
            "description": "The key to project."
        },
        "mode": {
            "type": "integer",
            "description": "Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
            "format": "int32"
        },
        "path": {
            "type": "string",
            "description": "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'."
        }
    },
    "description": "Maps a string key to a path within a volume."
};
defs["IbmAsperaHsts_spec_securityContext"] = {
    "type": "object",
    "properties": {
        "runAsGroup": {
            "type": "integer",
            "description": "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
            "format": "int64"
        },
        "procMount": {
            "type": "string",
            "description": "procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled."
        },
        "runAsUser": {
            "type": "integer",
            "description": "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
            "format": "int64"
        },
        "readOnlyRootFilesystem": {
            "type": "boolean",
            "description": "Whether this container has a read-only root filesystem. Default is false."
        },
        "runAsNonRoot": {
            "type": "boolean",
            "description": "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence."
        },
        "privileged": {
            "type": "boolean",
            "description": "Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false."
        },
        "capabilities": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_securityContext_capabilities"
        },
        "windowsOptions": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_securityContext_windowsOptions"
        },
        "seLinuxOptions": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_securityContext_seLinuxOptions"
        },
        "allowPrivilegeEscalation": {
            "type": "boolean",
            "description": "AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN"
        }
    },
    "description": "Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
};
defs["IbmAsperaHsts_spec_securityContext_capabilities"] = {
    "type": "object",
    "properties": {
        "add": {
            "type": "array",
            "description": "Added capabilities",
            "items": {
                "type": "string",
                "description": "Capability represent POSIX capabilities type"
            }
        },
        "drop": {
            "type": "array",
            "description": "Removed capabilities",
            "items": {
                "type": "string",
                "description": "Capability represent POSIX capabilities type"
            }
        }
    },
    "description": "The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime."
};
defs["IbmAsperaHsts_spec_securityContext_seLinuxOptions"] = {
    "type": "object",
    "properties": {
        "level": {
            "type": "string",
            "description": "Level is SELinux level label that applies to the container."
        },
        "role": {
            "type": "string",
            "description": "Role is a SELinux role label that applies to the container."
        },
        "type": {
            "type": "string",
            "description": "Type is a SELinux type label that applies to the container."
        },
        "user": {
            "type": "string",
            "description": "User is a SELinux user label that applies to the container."
        }
    },
    "description": "The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence."
};
defs["IbmAsperaHsts_spec_securityContext_windowsOptions"] = {
    "type": "object",
    "properties": {
        "gmsaCredentialSpec": {
            "type": "string",
            "description": "GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag."
        },
        "gmsaCredentialSpecName": {
            "type": "string",
            "description": "GMSACredentialSpecName is the name of the GMSA credential spec to use. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag."
        },
        "runAsUserName": {
            "type": "string",
            "description": "The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. This field is alpha-level and it is only honored by servers that enable the WindowsRunAsUserName feature flag."
        }
    },
    "description": "The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence."
};
defs["IbmAsperaHsts_spec_services"] = {
    "type": "object",
    "properties": {
        "metadata": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_metadata"
        },
        "ports": {
            "type": "array",
            "description": "The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_spec_ports"
            },
            "x-kubernetes-list-map-keys": ["name", "port"],
            "x-kubernetes-list-type": "map"
        },
        "type": {
            "type": "string",
            "description": "type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. \"ExternalName\" maps to the specified externalName. \"ClusterIP\" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is \"None\", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. \"NodePort\" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. \"LoadBalancer\" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"
        }
    }
};
defs["IbmAsperaHsts_spec_sshdconfig"] = {
    "type": "object",
    "properties": {
        "config": {
            "type": "string",
            "description": "sshd_config to use instead of the default"
        }
    },
    "description": "Aspera Configuration"
};
defs["IbmAsperaHsts_spec_storageos"] = {
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified."
        },
        "readOnly": {
            "type": "boolean",
            "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."
        },
        "secretRef": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_storageos_secretRef"
        },
        "volumeName": {
            "type": "string",
            "description": "VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace."
        },
        "volumeNamespace": {
            "type": "string",
            "description": "VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created."
        }
    },
    "description": "StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes."
};
defs["IbmAsperaHsts_spec_storageos_secretRef"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?"
        }
    },
    "description": "SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted."
};
defs["IbmAsperaHsts_spec_storages"] = {
    "required": ["claimName", "class", "mountPath"],
    "type": "object",
    "properties": {
        "claimName": {
            "type": "string",
            "description": "ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims"
        },
        "class": {
            "type": "string",
            "description": "Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1"
        },
        "deleteClaim": {
            "type": "boolean",
            "description": "Defines if the operator should delete the claim when the operand is deleted. Default to false."
        },
        "metadata": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_metadata"
        },
        "mountPath": {
            "type": "string",
            "description": "Path within the container at which the volume should be mounted.  Must not contain ':'."
        },
        "size": {
            "pattern": "^(\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\\\+|-)?(([0-9]+(\\\\.[0-9]*)?)|(\\\\.[0-9]+))))?$",
            "description": "Total amount of local storage required for this volume.",
            "anyOf": [{
                "type": "integer"
            }, {
                "type": "string"
            }],
            "x-kubernetes-int-or-string": true
        }
    }
};
defs["IbmAsperaHsts_spec_volumeMounts"] = {
    "required": ["mountPath", "name"],
    "type": "object",
    "properties": {
        "mountPath": {
            "type": "string",
            "description": "Path within the container at which the volume should be mounted.  Must not contain ':'."
        },
        "mountPropagation": {
            "type": "string",
            "description": "mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10."
        },
        "name": {
            "type": "string",
            "description": "This must match the Name of a Volume."
        },
        "readOnly": {
            "type": "boolean",
            "description": "Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false."
        },
        "subPath": {
            "type": "string",
            "description": "Path within the volume from which the container's volume should be mounted. Defaults to \"\" (volume's root)."
        },
        "subPathExpr": {
            "type": "string",
            "description": "Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). SubPathExpr and SubPath are mutually exclusive. This field is beta in 1.15."
        }
    },
    "description": "VolumeMount describes a mounting of a Volume within a container."
};
defs["IbmAsperaHsts_spec_volumes"] = {
    "required": ["name"],
    "type": "object",
    "properties": {
        "emptyDir": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_emptyDir"
        },
        "gitRepo": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_gitRepo"
        },
        "cephfs": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_cephfs"
        },
        "cinder": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_cinder"
        },
        "glusterfs": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_glusterfs"
        },
        "azureFile": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_azureFile"
        },
        "persistentVolumeClaim": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_persistentVolumeClaim"
        },
        "name": {
            "type": "string",
            "description": "Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"
        },
        "azureDisk": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_azureDisk"
        },
        "awsElasticBlockStore": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_awsElasticBlockStore"
        },
        "hostPath": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_hostPath"
        },
        "iscsi": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_iscsi"
        },
        "photonPersistentDisk": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_photonPersistentDisk"
        },
        "secret": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_secret"
        },
        "scaleIO": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_scaleIO"
        },
        "flexVolume": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_flexVolume"
        },
        "quobyte": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_quobyte"
        },
        "rbd": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_rbd"
        },
        "projected": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_projected"
        },
        "csi": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_csi"
        },
        "portworxVolume": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_portworxVolume"
        },
        "configMap": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_configMap"
        },
        "nfs": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_nfs"
        },
        "downwardAPI": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_downwardAPI"
        },
        "gcePersistentDisk": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_gcePersistentDisk"
        },
        "fc": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_fc"
        },
        "vsphereVolume": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_vsphereVolume"
        },
        "flocker": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_flocker"
        },
        "storageos": {
            "$ref": "#/components/schemas/IbmAsperaHsts_spec_storageos"
        }
    },
    "description": "Volume represents a named volume in a pod that may be accessed by any container in the pod."
};
defs["IbmAsperaHsts_spec_vsphereVolume"] = {
    "required": ["volumePath"],
    "type": "object",
    "properties": {
        "fsType": {
            "type": "string",
            "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified."
        },
        "storagePolicyID": {
            "type": "string",
            "description": "Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName."
        },
        "storagePolicyName": {
            "type": "string",
            "description": "Storage Policy Based Management (SPBM) profile name."
        },
        "volumePath": {
            "type": "string",
            "description": "Path that identifies vSphere volume vmdk"
        }
    },
    "description": "VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine"
};
defs["IbmAsperaHsts_status"] = {
    "type": "object",
    "properties": {
        "conditions": {
            "type": "array",
            "description": "Conditions is a set of Condition instances.",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_status_conditions"
            }
        },
        "endpoints": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_status_endpoints"
            }
        },
        "phase": {
            "type": "string"
        },
        "versions": {
            "$ref": "#/components/schemas/IbmAsperaHsts_status_versions"
        }
    },
    "description": "IbmAsperaHstsStatus defines the observed state of IbmAsperaHsts"
};
defs["IbmAsperaHsts_status_conditions"] = {
    "required": ["status", "type"],
    "type": "object",
    "properties": {
        "lastTransitionTime": {
            "type": "string",
            "format": "date-time"
        },
        "message": {
            "type": "string"
        },
        "reason": {
            "type": "string",
            "description": "ConditionReason is intended to be a one-word, CamelCase representation of the category of cause of the current status. It is intended to be used in concise output, such as one-line kubectl get output, and in summarizing occurrences of causes."
        },
        "status": {
            "type": "string"
        },
        "type": {
            "type": "string",
            "description": "ConditionType is the type of the condition and is typically a CamelCased word or short phrase. \\n Condition types should indicate state in the \"abnormal-true\" polarity. For example, if the condition indicates when a policy is invalid, the \"is valid\" case is probably the norm, so the condition should be called \"Invalid\"."
        }
    },
    "description": "Condition represents an observation of an object's state. Conditions are an extension mechanism intended to be used when the details of an observation are not a priori known or would not apply to all instances of a given Kind. \\n Conditions should be added to explicitly convey properties that users and components care about rather than requiring those properties to be inferred from other observations. Once defined, the meaning of a Condition can not be changed arbitrarily - it becomes part of the API, and has the same backwards- and forwards-compatibility concerns of any other part of the API."
};
defs["IbmAsperaHsts_status_credentials"] = {
    "type": "object",
    "properties": {
        "pass": {
            "type": "string",
            "description": "Name of the key containing the password"
        },
        "secretName": {
            "type": "string",
            "description": "Name of the secret containing the credentials"
        },
        "user": {
            "type": "string",
            "description": "Name of the key containing the user name"
        }
    }
};
defs["IbmAsperaHsts_status_endpoints"] = {
    "type": "object",
    "properties": {
        "credentials": {
            "$ref": "#/components/schemas/IbmAsperaHsts_status_credentials"
        },
        "name": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "uri": {
            "type": "string"
        }
    }
};
defs["IbmAsperaHsts_status_versions"] = {
    "type": "object",
    "properties": {
        "available": {
            "$ref": "#/components/schemas/IbmAsperaHsts_status_versions_available"
        },
        "reconciled": {
            "type": "string"
        }
    }
};
defs["IbmAsperaHsts_status_versions_available"] = {
    "type": "object",
    "properties": {
        "channels": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_status_versions_available_channels"
            }
        },
        "versions": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/IbmAsperaHsts_status_versions_available_channels"
            }
        }
    }
};
defs["IbmAsperaHsts_status_versions_available_channels"] = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        }
    }
};
var schemaWrapper = {
    "components": {
        "schemas": defs
    }
};
defsParser = new $RefParser();
defsParser.dereference(schemaWrapper).catch(function(err) {
    console.log(err);
});