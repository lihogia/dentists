/** @type {import('next').NextConfig} */
const { name, version } = require('./package.json');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    env: {
        productname: name,
        version
    }
}
 
module.exports = withNextIntl(nextConfig);