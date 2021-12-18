module.exports = {
    // Configura redirecionamentos permanentes
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true // triggers 308
            }
        ]
    }
}