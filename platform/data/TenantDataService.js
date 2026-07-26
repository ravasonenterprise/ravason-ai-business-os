const RavasonTenantDataService = {

    STORAGE_PREFIX:
        "ravason_tenant_data",


    requireTenant() {

        if (
            !window.RavasonTenantBoundary
        ) {

            throw new Error(

                "TenantBoundary is not available."

            );

        }


        return RavasonTenantBoundary
            .requireCurrentTenant();

    },


    requireProductModule(
        productId,
        moduleId
    ) {

        if (
            !window.RavasonModuleAccessService
        ) {

            throw new Error(

                "ModuleAccessService is not available."

            );

        }


        return RavasonModuleAccessService
            .requireCurrentTenantModule(

                productId,

                moduleId

            );

    },


    getStorageKey(
        productId,
        moduleId,
        collection
    ) {

        const tenant =
            this.requireTenant();


        if (
            !productId ||
            !moduleId ||
            !collection
        ) {

            throw new Error(

                "Product, module, and collection are required."

            );

        }


        return [

            this.STORAGE_PREFIX,

            tenant.id,

            productId,

            moduleId,

            collection

        ].join(":");

    },


    getRecords(
        productId,
        moduleId,
        collection
    ) {

        this.requireProductModule(

            productId,

            moduleId

        );


        const key =
            this.getStorageKey(

                productId,

                moduleId,

                collection

            );


        const records =
            RavasonStorageService.get(
                key
            );


        if (
            !Array.isArray(
                records
            )
        ) {

            return [];

        }


        return records;

    },


    saveRecords(
        productId,
        moduleId,
        collection,
        records
    ) {

        this.requireProductModule(

            productId,

            moduleId

        );


        if (
            !Array.isArray(
                records
            )
        ) {

            throw new Error(

                "Records must be an array."

            );

        }


        const tenant =
            this.requireTenant();


        const key =
            this.getStorageKey(

                productId,

                moduleId,

                collection

            );


        const tenantScopedRecords =
            records.map(

                record => ({

                    ...record,

                    tenantId:
                        tenant.id,

                    productId:
                        productId,

                    moduleId:
                        moduleId

                })

            );


        return RavasonStorageService.set(

            key,

            tenantScopedRecords

        );

    },


    createRecord(
        productId,
        moduleId,
        collection,
        data = {}
    ) {

        this.requireProductModule(

            productId,

            moduleId

        );


        const tenant =
            this.requireTenant();


        const records =
            this.getRecords(

                productId,

                moduleId,

                collection

            );


        const record = {

            id:
                this.generateId(
                    "record"
                ),

            ...data,

            tenantId:
                tenant.id,

            productId:
                productId,

            moduleId:
                moduleId,

            createdAt:
                new Date()
                    .toISOString(),

            updatedAt:
                new Date()
                    .toISOString()

        };


        records.push(
            record
        );


        const saved =
            this.saveRecords(

                productId,

                moduleId,

                collection,

                records

            );


        return saved
            ? record
            : null;

    },


    getRecord(
        productId,
        moduleId,
        collection,
        recordId
    ) {

        const records =
            this.getRecords(

                productId,

                moduleId,

                collection

            );


        return records.find(

            record =>
                record.id ===
                recordId

        ) || null;

    },


    updateRecord(
        productId,
        moduleId,
        collection,
        recordId,
        updates = {}
    ) {

        const records =
            this.getRecords(

                productId,

                moduleId,

                collection

            );


        const index =
            records.findIndex(

                record =>
                    record.id ===
                    recordId

            );


        if (
            index === -1
        ) {

            return null;

        }


        const existing =
            records[index];


        const updatedRecord = {

            ...existing,

            ...updates,

            id:
                existing.id,

            tenantId:
                existing.tenantId,

            productId:
                existing.productId,

            moduleId:
                existing.moduleId,

            updatedAt:
                new Date()
                    .toISOString()

        };


        records[index] =
            updatedRecord;


        const saved =
            this.saveRecords(

                productId,

                moduleId,

                collection,

                records

            );


        return saved
            ? updatedRecord
            : null;

    },


    deleteRecord(
        productId,
        moduleId,
        collection,
        recordId
    ) {

        const records =
            this.getRecords(

                productId,

                moduleId,

                collection

            );


        const filtered =
            records.filter(

                record =>
                    record.id !==
                    recordId

            );


        if (
            filtered.length ===
            records.length
        ) {

            return false;

        }


        return this.saveRecords(

            productId,

            moduleId,

            collection,

            filtered

        );

    },


    generateId(
        prefix
    ) {

        if (
            window.crypto &&
            typeof window.crypto.randomUUID ===
                "function"
        ) {

            return prefix +
                "-" +
                window.crypto.randomUUID();

        }


        return prefix +
            "-" +
            Date.now() +
            "-" +
            Math.random()
                .toString(
                    36
                )
                .slice(
                    2
                );

    }

};


window.RavasonTenantDataService =
    RavasonTenantDataService;
