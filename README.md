@primecode/async-qrcode
=========================
Async QR code generator, C++ implementation

The typical use case for this high speed Node.js module is to convert data-strings in QR code - svg.
C++ AsyncWorker is used to perform non blocking task for generation of svg image ( qr code ) in another thread.

Most modern macOS, Windows and Linux systems running Node.js v10+ do not require any additional install or runtime dependencies.

- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
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
const { QrCode, Ecl, Types } =  require('@primecode/async-qrcode');

QrCode.generate({
  data: "string to transform",
  border: 2,
  type: Types.ROUND,
  ecl: Ecl.MEDIUM,
  minVersion: 1,
  maxVersion: 40,
  mask: 0,
  boostEcl: false
}).then((svg) => {
  console.log(svg) //SVG String
}).catch((e) => {
  console.log(e);
});
```

### Typescript
Import the module `@primecode/async-qrcode`

```javascript
const { QrCode, Ecl, Types } =  require('@primecode/async-qrcode');

// With promises
QrCode.generate({
  data: "string to transform",
  border: 2,
  type: Types.ROUND,
  ecl: Ecl.MEDIUM,
  minVersion: 1,
  maxVersion: 40,
  mask: 0,
  boostEcl: false
})
.then(url => {
  console.log(url)
})
.catch(err => {
  console.error(err)
});
```

## Styling

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