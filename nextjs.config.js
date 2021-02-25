module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$|.tsx$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}
