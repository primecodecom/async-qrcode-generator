export const QrCode: {
    generate({
        data,
        border,
        type,
        ecl,
        minVersion,
        maxVersion,
        mask,
        boostEcl,
        color,
        background
    }: {
        data: string,
        border?: number,
        type?: 0 | 1 | 2,
        ecl?: 0 | 1 | 2 | 3,
        minVersion?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40,
        maxVersion?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40,
        mask?: number,
        boostEcl?: boolean,
        color?: string,
        background?: string
    }): Promise<string>;
};

export const Types: {
    CIRCLE: 0,  // The QR Code can tolerate about  7% erroneous codewords
    ROUND: 1,  // The QR Code can tolerate about 15% erroneous codewords
    SQUARE: 2
};

export const Ecl: {
    LOW: 0,	  // The QR Code can tolerate about  7% erroneous codewords
    MEDIUM: 1,	  // The QR Code can tolerate about 15% erroneous codewords
    QUARTILE: 2, // The QR Code can tolerate about 25% erroneous codewords
    HIGH: 3
};
