"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert(
            "Product",
            [
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702640154/productImages/ifyhybpd0j4fvuxh2jgg.jpg",
                    name: "BLACKBERRY SWITCHES 2022",
                    description: `Clicky tactile switch with a 68g spring and 72g actuation force. These have a bump at actuation that you will both hear and feel.
                        Ultra-high-molecular-weight polyethylene ( UHMWPE) housing. This material is used in places where the plastic is required to be extremely tough with high abrasion and wear resistance. Applications for this type of plastic spans from joint replacement to marine structures for ship mooring. 
                        POM (polyoxymethylene) stem. Another staple in engineering thermoplastics, known for low-friction capabilities and outstanding stability. 
                        PCB mount.
                        Pre-lubed in factory – very light application. You can lube these switches on top of this.
                        Packaged in a new hard plastic case with a sticker snap lid. Easily reusable and perfect for holding spare switches.
                        Designed by TKC and manufactured by Tecsee.
                        Sound test: MP3. Recorded using a Behringer XM8500 connected to a Focusrite Scarlett 2i2, no audio post-processing.`,
                    price: 49.99,
                    code: "A01",
                    BrandId: 1,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702644835/productImages/meluiiocaas1vq1hdyeu.jpg",
                    name: "DRAOZA Kailh Box OWL Switch RGB SMD 5-pin Clicky Switches/ (Kailh OWL Switches 108PCS）",
                    description: `Precision workmanship, using aviation materials and alloy contact technology for pins, with stronger service life and antioxidant performance.
                    Increase the design of light guide columns to achieve a transmittance of 90%
                    Clicky switch, operating force: 46gf, conduction stroke: 18 ± 0.4mm, bottom contact force: 70gf, total stroke: 3.6 ± 0.3mm, mechanical life of 80 million times.
                    
                    
                    
                    The blister inner lining is independently packaged, and the outer packaging is a colored paper box, which can effectively avoid switch damage and can be reused.`,
                    price: 39.89,
                    code: "A02",
                    BrandId: 1,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702645531/productImages/ldi7iyfh18z1ozw6bmdg.jpg",
                    name: "DRAOZA Gateron Pro 2.0 Switch 3-Pin Prelubricated (36pcs Pro 2.0 Black)",
                    description: `G Pro 2.0 product optimization reduces the rebound sound of the shaft body and enhances stability. 
                    G Pro 2.0 continues the pre lubrication technology of the standard version of G Pro, and the factory self lubrication of the shaft body is also one of the representative technologies of Gatarone. 
                    Style: Linear Switch Total travel:4.0mm Max Conduction travel: 2.0 ± 0.6mm Operation Force:60g Tactile Force: 70g Spring length: 15.4mm Operating Life: 80 million`,
                    price: 79.99,
                    code: "A03",
                    BrandId: 3,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702647877/productImages/mjwgy2gxar750ht9kbyt.jpg",
                    name: "EQUALZ X TKC FRUIT SMOOTHIE SWITCHES",
                    description: `The latest switch offering from the designers who brought you community favorite linear switches, the CEqualz Tangerine and Banana Split, introducing the long awaited super smooth line, The Fruit Smoothie Switches. 

                    Fruit Smoothie Switches use a new housing material and an Equalz exclusive plastic for the stem to create the smoothest switch on the market today! `,
                    price: 59.99,
                    code: "A04",
                    BrandId: 1,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648129/productImages/iun3vq4tqslzqndmkz3k.jpg",
                    name: "FAIRY PRO (SILENT LINEAR)",
                    description: `Fairy Pro Silent is a silent linear switch that is part of the Akko v3 Pro Generation series. Fair Pro Silent have lubed rails and have been overall improved to provide a more consistent typing experience.`,
                    price: 13.19,
                    code: "A05",
                    BrandId: 1,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648447/productImages/ooazmnxcekguavtp6jpp.jpg",
                    name: "PIANO PRO (LUBED)",
                    description: `Piano Pro is a linear switch that is part of the Akko v3 Pro Generation series. Piano pros have lubed rails and have been overall improved to provide a more consistent typing experience.

                    Type: Linear.
                    Pre-Travel: 1.9 ± 0.5mm.
                    Total Travel: 3.5mm.
                    Operating Force: 45gf ± 5gf.`,
                    price: 15.99,
                    code: "A06",
                    BrandId: 1,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664055/productImages/qwuryhuzx83pqsxethuj.jpg",
                    name: "TANGERINE SWITCHES 2022 (90 Switches)",
                    description: `The smoothest linear in the game, here's our Tangerine switches with a linear POM stem, a 67g spring (Dark variant) or 62g spring (Light variant), and a UHMWPE housing.`,
                    price: 69.99,
                    code: "A08",
                    BrandId: 2,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664310/productImages/lsmcoof3ixeyqzdplie7.jpg",
                    name: "MATCHA GREEN PRO (LUBED) (60 Switches)",
                    description: `Match Green Pro is a linear switch that is part of the Akko v3 Pro Generation series. Matcha Green Pros have lubed rails and have been overall improved to provide a more consistent typing experience.
                    For common sizes, here are some estimates (these can vary slightly by keyboard model):`,
                    price: 32.99,
                    code: "A09",
                    BrandId: 3,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664502/productImages/jji9jkzcvq5qpdonmrbo.jpg",
                    name: "PENGUIN PRO (SILENT TACTILE) (104 Switches)",
                    description: `Penguin Pro is a silent tactile switch that is part of the Akko v3 Pro Generation series. Penguin Pro Silent have lubed rails and have been overall improved to provide a more consistent typing experience.
                    A keyboard switch is the little component that sits underneath the keycap and connects to the keyboard PCB. On a mechanical keyboard, every key has its own switch.`,
                    price: 73.99,
                    code: "A010",
                    BrandId: 2,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664799/productImages/gksapiniynz0k2whqzjn.jpg",
                    name: "CREAM BLUE PRO (104 Switches)",
                    description: `Cream Blue Pro is a tactile switch that is part of the Akko v3 Pro Generation series. They have a long pole compared to other Akko tactile switches to provide a solid and faster bottom-out feeling. Cream blue pros have lubed rails and have been overall improved to provide a more consistent typing experience.
                    We recommend buying enough to fill your board, with some extra to spare.`,
                    price: 103.99,
                    code: "A011",
                    BrandId: 2,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665120/productImages/yci7utses4xxqlezl1kb.png",
                    name: "LAVENDER PURPLE PRO V3 (LUBED) (60 Switches)",
                    description: `Lavender Purple Pro is a tactile switch that is part of the Akko v3 Pro Generation series. Lavender Purple pros have lubed rails and have been overall improved to provide a more consistent typing experience.`,
                    price: 32.99,
                    code: "A012",
                    BrandId: 2,
                    CategoryId: 3,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665528/productImages/ldhpc5up1vrxwridgmng.jpg",
                    name: "SYLPH POTION ACR PRO 75",
                    description: `Thanks to a special partnership between Mochi Crafts, TKC, and AKKO, we are proud to offer a limited edition AKKO ACR Pro 75. The official Mochi limited edition bundle includes a fully assembled, ready to used keyboard right out of the box, spec’d exactly as Mochi uses.`,
                    price: 169.99,
                    code: "B01",
                    BrandId: 2,
                    CategoryId: 1,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/bkmzw3ogfaxh1w7s0bi0.jpg",
                    name: "MONSGEEK M2",
                    description: `**Note** the M2 does require 2 1.5u function keys at R1 (ALT/FN). This board is compatible with Akko MDA / SAL profile keycaps. Since it is QMK compatible, you can program any key to do the function of these keys. Or simply put, if you have any keyset with an alternate 1.5u R1 key you can put it here, but you should verify your kitting before assuming it will fit on the M2.   

                    It comes with extra teflon pads (in case you want to perform the Force Break mod) and tape (in case you want to perform a Tape mod). The M2 offers flexibility for you to modify it and make it truly yours while also offering a great out-of-the-box experience with MonsGeek’s custom foam and gasket mount. `,
                    price: 129.99,
                    code: "B02",
                    BrandId: 2,
                    CategoryId: 1,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/gbuc8p3verz6xoigf86z.jpg",
                    name: "MONSGEEK M6",
                    description: `Please note: This keyboard's unusual layout requires split spacebars (2.25u & 2.75u) as well as an additional R4 "B" key.  
 
                    It comes with extra teflon pads for force break mod and materials for a tape mod. The M6 offers flexibility for you to modify it and make it truly yours while also offering a great out-of-the-box experience with MonsGeek’s custom foam and gasket mount. `,
                    price: 129.99,
                    code: "B03",
                    BrandId: 2,
                    CategoryId: 1,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763195/productImages/ws08964uo8knconzoqe2.jpg",
                    name: "M0LLY POLYCARBONATE KEYBOARD - B-STOCK",
                    description: `A modern geometric replica of the iconic Apple M0110A. Designed by BlindAssassin111 and JSON in 2018.   

                    Featuring mirror polished brass accents and a fully functioning USB 3.1 hub built in. Minor changes from the first round of M0llY. Plate and PCB from original M0llY are 100% compatible with the Polycarbonate version. 
                    
                    This edition of M0LLY features a polycarbonate case with CNC mirror-polished brass parts, available in three finishes:`,
                    price: 209.99,
                    code: "B04",
                    BrandId: 3,
                    CategoryId: 1,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763549/productImages/grgfmmfrppegwbzy8cem.jpg",
                    name: "Ducky One 3 Daybreak Hotswap RGB Double Shot PBT ",
                    description: `Featuring Ducky's QUACK Mechanics design philosophy. 
                    Dual layer hotswap PCB w/ exclusive Kailh yellow hotswap sockets.
                    Cherry profile Double Shot PBT keycaps. 
                    Equipped with dual-layer high-grade silicone and EVA foam sound dampeners
                    Per-key programmable RGB. 
                    3 level adjustable feet and detachable braided USB-C cable. 
                    Improved PCB design, V2 stabilizers, and remapped macro layout.`,
                    price: 127.29,
                    code: "B05",
                    BrandId: 3,
                    CategoryId: 1,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764192/productImages/ure9b9xjbxy5uiexouva.png",
                    name: "K65 RGB MINI 60% Mechanical Keyboard – Purple Rune",
                    description: `The CORSAIR K65 RGB MINI 60% Mechanical Gaming Keyboard combines top-level performance with portability, featuring AXON hyper-processing technology, CHERRY MX SPEED mechanical key switches, and exceptional customizability in a compact design. 
                    *Actual color may vary.`,
                    price: 129.99,
                    code: "B06",
                    BrandId: 1,
                    CategoryId: 1,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764660/productImages/ey4qe4gtzaufnyoo7rwa.jpg",
                    name: "K70 PRO RGB Optical",
                    description: `The K70 RGB PRO retains the iconic elements of our award-winning K70 series with a durable aluminum frame, CHERRY MX mechanical keyswitches, and per-key RGB backlighting, while setting a new bar for performance with AXON technology and a tournament switch.


                    DURABLE ALUMINUM FRAME
                    
                    
                    8X FASTER PROCESSING
                    
                    
                    PBT DOUBLE-SHOT KEYCAPS 
                    Top-down view of CORSAIR K70 RGB PRO mechanical gaming keyboard with RGB lighting turned on. 
                    Durable aluminum frame with per-key RGB lighting. 
                    Precision at your fingertips with Corsair OPX switches. 
                    Performance you can feel. 
                    Upgrade your keyboard game with double-shot keycaps. 
                    Tournament switch for distraction-free gameplay. `,
                    price: 179.99,
                    code: "B07",
                    BrandId: 1,
                    CategoryId: 1,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765071/productImages/jnhnj4deyqsitunesx1q.png",
                    name: "MICO Keycaps",
                    description: `Black Exchange Keycap Complete Set from Glorious PC Gaming Race, With 104 black key covers made of ABS, Translucent letteringcompatible with Gateron & Kailh & Cherry MX Switches`,
                    price: 59.49,
                    code: "C01",
                    BrandId: 3,
                    CategoryId: 2,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765277/productImages/gqdwl844idr6ukzmlepv.jpg",
                    name: "MV SYNTH",
                    description: `These dyesub keycaps feature intricate artwork showcasing an array of knobs, sliders, and pads that transport you back to the golden era of electronic music. Made with premium materials for durability and compatibility with a wide range of keyboards, Synth is the perfect way to add a touch of nostalgia and style to your mechanical keyboard setup.`,
                    price: 80,
                    code: "C02",
                    BrandId: 3,
                    CategoryId: 2,
                },
                {
                    thumbnail:
                        "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702777016/productImages/ojg8fucvixcfzp6meqae.jpg",
                    name: "MARSHMALLOW KEYSET",
                    description: `Marshmallow is a soft and cute set, with legends set in a friendly typeface and delicate novelty icons. It features warm cream and brown tones, pulling inspiration from makeup palettes. Designed by PRJKT_. 

                    Images are photos of production models, flat lays are renders.`,
                    price: 84.99,
                    code: "C03",
                    BrandId: 2,
                    CategoryId: 2,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
