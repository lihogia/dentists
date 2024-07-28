/** @type {import('next').NextConfig} */
const { name, version } = require('./package.json');

const nextConfig = {
    env: {
        productname: name,
        version
    }
}

module.exports = nextConfig;
