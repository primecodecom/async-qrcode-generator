const addon = require('bindings')('addon.node');

module.exports = {
    Types: {
        CIRCLE: 0,
        ROUND: 1,
        SQUARE: 2,
    },
    Ecl: {
        LOW: 0,
        MEDIUM: 1,
        QUARTILE: 2,
        HIGH: 3
    },
    QrCode: {
        generate({
            data = 'qrcode',
            border = 2,
            type = 2,
            ecl = 1,
            minVersion = 1,
            maxVersion = 40,
            mask = -1,
            boostEcl = false,
            color = '#000',
            background = '#fff'
        }) {
            return addon.generate(data, border, type, ecl, minVersion, maxVersion, mask, boostEcl, color, background);
        }
    }
}