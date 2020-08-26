@primecode/async-qrcode
=========================
Async QR code generator, C++ implementation

The typical use case for this high speed Node.js module is to convert data-strings in QR code - svg.
C++ AsyncWorker is used to perform non blocking task for generation of svg image ( qr code ) in another thread.

Most modern macOS, Windows and Linux systems running Node.js v10+ do not require any additional install or runtime dependencies.

- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
- [API](#api)
- [Webpack](#webpack)
- [Credits](#credits)


## Installation
Inside your project folder do:

```shell
npm install --save @primecode/async-qrcode
```

## Usage

### NodeJS
Require the module `@primecode/async-qrcode`

```javascript
const { QrCode, Types, Ecl } = require('@primecode/async-qrcode');

QrCode.generate({
  data: "string to transform",
  border: 2,
  type: Types.ROUND,
  ecl: Ecl.MEDIUM,
  minVersion: 1,
  maxVersion: 40,
  mask: 0,
  boostEcl: false,
  color: '#000',
  background:'#fff'
}).then((svg) => {
  console.log(svg) //SVG String
}).catch((e) => {
  console.log(e);
});

QrCode.generate({
  data: "another string to transform",
  type: Types.SQUARE,
}).then((svg) => {
  console.log(svg) //SVG String
}).catch((e) => {
  console.log(e);
});

```

### Typescript
Import the module `@primecode/async-qrcode`

```javascript
import { QrCode, Ecl, Types } from '@primecode/async-qrcode';

// With promises
QrCode.generate({
  data: "string to transform",
  border: 2,
  type: Types.ROUND,
  ecl: Ecl.MEDIUM,
  minVersion: 1,
  maxVersion: 40,
  mask: 0,
  boostEcl: false,
  color: '#000',
  background:'#fff'
})
.then(url => {
  console.log(url)
})
.catch(err => {
  console.error(err)
});

QrCode.generate({
  data: "another string to transform",
  type: Types.SQUARE,
}).then((svg) => {
  console.log(svg) //SVG String
}).catch((e) => {
  console.log(e);
});
```

## Error correction level
Error correction capability allows to successfully scan a QR Code even if the symbol is dirty or damaged.
Four levels are available to choose according to the operating environment.

Higher levels offer a better error resistance but reduce the symbol's capacity.<br>
If the chances that the QR Code symbol may be corrupted are low (for example if it is showed through a monitor)
is possible to safely use a low error level such as `Low` or `Medium`.

Possible levels are shown below:

| Level            | Error resistance |
|------------------|:----------------:|
| **L** (Low)      | **~7%**          |
| **M** (Medium)   | **~15%**         |
| **Q** (Quartile) | **~25%**         |
| **H** (High)     | **~30%**         |

The percentage indicates the maximum amount of damaged surface after which the symbol becomes unreadable.

## Styling

### SQUARE

```javascript
{
  data: "string to transform",
  type: Types.SQUARE,
}
```
<img src="https://github.com/primecodecom/files/raw/master/SQUARE.png" width="120" height="120">

### ROUND

```javascript
{
  data: "string to transform",
  type: Types.ROUND,
}
```
<img src="https://github.com/primecodecom/files/raw/master/ROUND.png" width="120" height="120">

### CIRCLE

```javascript
{
  data: "string to transform",
  type: Types.CIRCLE,
}
```
<img src="https://github.com/primecodecom/files/raw/master/CIRCLE.png" width="120" height="120">

### COLORED

```javascript
{
  data: "string to transform",
  color: '#c11616',
  background:'#d2e0f1',
  type: Types.ROUND,
}
```
<img src="https://github.com/primecodecom/files/raw/master/COLORED.png" width="120" height="120">

### API
#### `generate([options])`
Generate QR Code svg.
<br>

See [generate](#options).
##### `options`
```javascript
{
        data: string, //Text to encode
        border: number, // Border separator in svg image
        type: number, // Types.SQUARE | Types.ROUND | Types.CIRCLE
        ecl: number, // Ecl.LOW | Ecl.MEDIUM | Ecl.QUARTILE | Ecl.HIGH,
        minVersion: number, // Value between 1 - 40: Increase the error correction level
        maxVersion: number, // Value between 1 - 40: Increase the error correction level
        mask: number, // User can specify mask pattern manually, value between 0 - 7
        boostEcl: boolean, // User can specify absolute error correction level, or allow the library to boost it if it doesn't increase the version number
        color: string, // Dot color in image
        background: string // SVG bacground color
}
```

##### `returns`

Type: `Promise<String>`
```javascript
{
        data: string, //Text to encode
        border: number, // Border separator in svg image
        type: number, // Types.SQUARE | Types.ROUND | Types.CIRCLE
        ecl: number, // Ecl.LOW | Ecl.MEDIUM | Ecl.QUARTILE | Ecl.HIGH,
        minVersion: number, // Value between 1 - 40: Increase the error correction level
        maxVersion: number, // Value between 1 - 40: Increase the error correction level
        mask: number, // User can specify mask pattern manually, value between 0 - 7
        boostEcl: boolean, // User can specify absolute error correction level, or allow the library to boost it if it doesn't increase the version number
        color: string, // Dot color in image
        background: string // SVG bacground color
}
```

## Webpack
```javascript

externals: [
  {
    '@primecode/async-qrcode': 'commonjs @primecode/async-qrcode'
  }
]

```

## Credits
Software is based on "QRCode c++ library" - Project Nayuki [https://www.nayuki.io/page/qr-code-generator-library](https://www.nayuki.io/page/qr-code-generator-library).

License - MIT License
-------

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

* The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

* The Software is provided "as is", without warranty of any kind, express or
  implied, including but not limited to the warranties of merchantability,
  fitness for a particular purpose and noninfringement. In no event shall the
  authors or copyright holders be liable for any claim, damages or other
  liability, whether in an action of contract, tort or otherwise, arising from,
  out of or in connection with the Software or the use or other dealings in the
  Software.