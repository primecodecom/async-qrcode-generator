"use strict";

const { readFileSync } = require('fs');
const { strictEqual } = require('assert');
const { QrCode, Types } = require('../index');


describe("QR CODE GENERATE", () => {
    it("should generate default qr code", (done) => {
        QrCode.generate({
            data: 'qrcode'
        }).then((svg) => {
            const content = readFileSync("./test/outputs/default.svg").toString();
            strictEqual(content.replace(/\n|\r|\s/g, ""), svg.replace(/\n|\r|\s/g, ""));
            done();
        }).catch((e) => {
            done(e);
        });
    });

    it("should generate custom qr code v1 - border = 2", (done) => {
        QrCode.generate({
            data: 'qrcode',
            border: 2
        }).then((svg) => {
            const content = readFileSync("./test/outputs/custom1.svg").toString();
            strictEqual(content.replace(/\n|\r|\s/g, ""), svg.replace(/\n|\r|\s/g, ""));
            done();
        }).catch((e) => {
            done(e);
        });
    });

    it("should generate custom qr code v2 - border = 2, type = ROUND", (done) => {
        QrCode.generate({
            data: 'qrcode-v2',
            border: 2,
            type: Types.ROUND
        }).then((svg) => {
            const content = readFileSync("./test/outputs/custom2.svg").toString();
            strictEqual(content.replace(/\n|\r|\s/g, ""), svg.replace(/\n|\r|\s/g, ""));
            done();
        }).catch((e) => {
            done(e);
        });
    });

    it("should generate custom qr code v3 - border = 2, type = CIRCLE, mask = 0", (done) => {
        QrCode.generate({
            data: 'qrcode-v3',
            border: 2,
            type: Types.CIRCLE,
            mask: 0
        }).then((svg) => {
            const content = readFileSync("./test/outputs/custom3.svg").toString();
            strictEqual(content.replace(/\n|\r|\s/g, ""), svg.replace(/\n|\r|\s/g, ""));
            done();
        }).catch((e) => {
            done(e);
        });
    });

    it("should generate custom qr code v4 - border = 2, type = SQUARE, mask = 0, minVersion = 5", (done) => {
        QrCode.generate({
            data: 'qrcode-v4',
            border: 2,
            type: Types.SQUARE,
            mask: 0,
            minVersion: 5
        }).then((svg) => {
            const content = readFileSync("./test/outputs/custom4.svg").toString();
            strictEqual(content.replace(/\n|\r|\s/g, ""), svg.replace(/\n|\r|\s/g, ""));
            done();
        }).catch((e) => {
            done(e);
        });
    });

    it("should generate custom qr code v5 - border = 2, type = SQUARE, mask = 0, minVersion = 10, maxVersion = 40", (done) => {
        QrCode.generate({
            data: 'qrcode-v5',
            border: 2,
            type: Types.SQUARE,
            mask: 0,
            minVersion: 10,
            maxVersion: 40
        }).then((svg) => {
            const content = readFileSync("./test/outputs/custom5.svg").toString();
            strictEqual(content.replace(/\n|\r|\s/g, ""), svg.replace(/\n|\r|\s/g, ""));
            done();
        }).catch((e) => {
            done(e);
        });
    });

    it("should generate custom qr code v6 - mask = 7, color = white, background = red", (done) => {
        QrCode.generate({
            data: 'qrcode-v6',
            mask: 7,
            background: 'red',
            color: 'white'
        }).then((svg) => {
            const content = readFileSync("./test/outputs/custom6.svg").toString();
            strictEqual(content.replace(/\n|\r|\s/g, ""), svg.replace(/\n|\r|\s/g, ""));
            done();
        }).catch((e) => {
            done(e);
        });
    });

});