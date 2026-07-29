/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * ArchitectureScanner.js
 */

const fs = require("fs");
const path = require("path");

const ArchitectureRules = require("./ArchitectureRules");

class ArchitectureScanner {

    constructor(rootDirectory = process.cwd()) {

        this.rootDirectory = rootDirectory;

        this.excluded =
            ArchitectureRules.SCAN.EXCLUDED_PATHS;

    }

    scan() {

        return this.walk(this.rootDirectory);

    }

    walk(directory) {

        let files = [];

        if (!fs.existsSync(directory)) {
            return files;
        }

        for (const item of fs.readdirSync(directory)) {

            const fullPath =
                path.join(directory, item);

            const relativePath =
                path.relative(
                    this.rootDirectory,
                    fullPath
                ).replace(/\\/g, "/");

            if (
                this.excluded.some(prefix =>
                    relativePath.startsWith(prefix)
                )
            ) {
                continue;
            }

            const stat =
                fs.statSync(fullPath);

            if (stat.isDirectory()) {

                files.push(
                    ...this.walk(fullPath)
                );

            }
            else if (item.endsWith(".js")) {

                files.push({

                    name: item,

                    path: fullPath,

                    relativePath

                });

            }

        }

        return files;

    }

}

module.exports = ArchitectureScanner;
