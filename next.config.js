/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/post',
                destination: '/post/list',
                permanent: true,
            },
        ];
    },
};
