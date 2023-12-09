const QRCODE = require('qrcode');

async function qrCodeGenerator(url){
    try {
        const qrcodePath = await QRCODE.toDataURL(url);
        return qrcodePath; 

    } catch (error) {
        return error;
    }
}


module.exports = qrCodeGenerator;