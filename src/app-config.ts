const config = require(`./app-config-${process.env.NODE_ENV}`).default;

const appConfig = {
    url: config.endPoint
}

export default appConfig;