const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const sharp = require('sharp');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('Escanea el QR 👇');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Mai-san its ready');
});

client.on('message', async message => {

    const msg = message.body.toLowerCase();

    // ===== MENÚ =====
    if (msg === '#menu') {
        message.reply(
`     *Mai-san*

#menu - Ver comandos
#reglas - Ver reglas
#s - Crear sticker (responde a imagen)

Escribe "hola" y saluda hp`
        );
    }

    // ===== REGLAS =====
    if (msg === '#reglas') {
        message.reply(
`📜 *Reglas de la comunidad*
1️⃣ NO porno ni gore, puercos hijos de la vrga
2️⃣ NO de spam
3️⃣ Hacer bullying al carepipi de Narcista`
        );
    }

    // ===== RESPUESTAS AUTOMÁTICAS =====
    if (msg.includes('hola')) {
        message.reply('ola');
    }

    if (msg.includes('mai')) {
        message.reply('Que Mondá quieres');
    }

    if (msg.includes('admin')) {
        message.reply('Hoy no, mañana si');
    }

    if (msg.includes('narcista')){
        message.reply('el narcista se la come');
    }
    
    if (msg.includes('magia')){
        message.reply('🪄?');
    }

    if (msg.includes('culpa de ya saben quien')){
        message.reply('culpa e petro');
    }

    if (msg.includes('pinocho no sabía que era de madera 🗣️🔥')){
        message.reply('se hizo una paja y se prendio en candela🗣️🔥');
    }

    if (msg.includes('katarenai')){
        message.reply('nemurenai');
    }

    if (msg.includes('toroimerai')){
        message.reply('anata no miteru shoutai');
    }

    if (msg.includes('daremo yomenai karute')){
        message.reply('fukashigi shiritai dake');
    }

    if (msg.includes('manden porno')){
        message.reply('tu quiere magia vea?');
    }

    if (msg.includes('tetas')){
        message.reply('donde');
    }

    if (msg.includes('cod')){
        message.reply('saquen saquen cod');
    }

    if (msg.includes('arca')){
        message.reply('dejen a mi Arca hpts');
    }
    
    if (msg.includes('pendejo')){
        message.reply('te dejo');
    }

    if (msg.includes('silver')){
        message.reply('silver deja el genshin we');
    }

    if (msg.includes('info')){
        message.reply('Para información de precios y paquetes de cps con alguno de los administradores Tyr o Silver');
    }

     if (msg.includes('precios')){
        message.reply('Para información de precios y paquetes de cps con alguno de los administradores Tyr o Silver');
    }

     if (msg.includes('catálogo')){
        message.reply('Para información de precios y paquetes de cps con alguno de los administradores Tyr o Silver');
    }

    if (msg.includes('spam')){
        message.reply('referencias 🗣️🔥')
    }

    if (msg.includes('carepipi')){
        message.reply('usted');
    }

    if (msg.includes('cuenta tyr')){
        message.reply('cuenta tyr');
    }

    if (msg.includes('María')){
        message.reply('vieja hp');
    }

    
       // ===== STICKER DESDE IMAGEN =====
    if (msg === '#s' && message.hasQuotedMsg) {

        const quotedMsg = await message.getQuotedMessage();

        if (quotedMsg.hasMedia) {

            const media = await quotedMsg.downloadMedia();
            const buffer = Buffer.from(media.data, 'base64');

            const stickerBuffer = await sharp(buffer)
                .resize(512, 512, {
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                })
                .webp()
                .toBuffer();

            const sticker = new MessageMedia(
                'image/webp',
                stickerBuffer.toString('base64')
            );

            await message.reply(sticker, undefined, { sendMediaAsSticker: true });

        } else {
            message.reply('eres pendejo o masticas agua we?, ponlo en una imagen hijuelagranputa');
        }
    }

});

client.initialize();
