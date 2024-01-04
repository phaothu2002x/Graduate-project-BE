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
            "Product_Gallery",
            [
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702640152/productImages/lvvv7skay2oyu4ue4ec9.jpg",
                    ProductId: 1,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702640152/productImages/bmsvgqan7kb91lnh8qgx.jpg",
                    ProductId: 1,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702640152/productImages/azuutk9fupweilg2mkot.jpg",
                    ProductId: 1,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702640153/productImages/a0sznrsqizh9acvdg7wg.jpg",
                    ProductId: 1,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702644834/productImages/tkvm7lk5xczm0oqmtddt.jpg",
                    ProductId: 2,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702644836/productImages/deqfexhqzehsvda7whuo.jpg",
                    ProductId: 2,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702644834/productImages/mp6hhdqzkkz0ixgnvjdh.jpg",
                    ProductId: 2,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702645531/productImages/augu4l9lt3sa89yo4osv.jpg",
                    ProductId: 3,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702645532/productImages/gtx64hcqibh8zi4bgagg.jpg",
                    ProductId: 3,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702645534/productImages/lb5ssyga393mpanwldx8.jpg",
                    ProductId: 3,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702645532/productImages/zckdezvrwkdnevlha3tp.jpg",
                    ProductId: 3,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702647878/productImages/hsnfs9xv5bhgzchpxi9b.jpg",
                    ProductId: 4,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702647876/productImages/kxza84bpuvotbmmsiqce.jpg",
                    ProductId: 4,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702647878/productImages/br0wwbiarh1ia1xdluww.jpg",
                    ProductId: 4,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702647879/productImages/rdxkmlmkxnghalzptsif.jpg",
                    ProductId: 4,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648129/productImages/lh7isnmgjhu2npo9wqq4.jpg",
                    ProductId: 5,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648129/productImages/pasxksa7yq5ftfcyqhvr.jpg",
                    ProductId: 5,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648128/productImages/nrfiuhsdflfxkt9yhlum.jpg",
                    ProductId: 5,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648129/productImages/mzhcx4ud7awmqsrpvkey.jpg",
                    ProductId: 5,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648446/productImages/wlt2swgfkhbtf8nn1das.png",
                    ProductId: 6,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648446/productImages/lfghrjtgnvynlvsphe4w.png",
                    ProductId: 6,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648446/productImages/yetbs4coue9ykztg7rr5.png",
                    ProductId: 6,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648447/productImages/dlnfcyysr57tnkzvw8es.png",
                    ProductId: 6,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648448/productImages/vfmg6lmphfh5ftuo2dlq.png",
                    ProductId: 6,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702648448/productImages/jhzle5kngabpuqqsgsaj.png",
                    ProductId: 6,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664055/productImages/cqinqzwwrjatbvvn4s5y.jpg",
                    ProductId: 7,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664055/productImages/uhfz7m3nf4aaysdpzzck.jpg",
                    ProductId: 7,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664055/productImages/s5fs1vmtubvneqtzc2sa.jpg",
                    ProductId: 7,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664056/productImages/l35xr68wl63aorpnn01g.jpg",
                    ProductId: 7,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664309/productImages/drp3jxcf9r3obbpz5ykk.png",
                    ProductId: 8,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664310/productImages/w6hpj7ubb2zbnvcaxmit.png",
                    ProductId: 8,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664311/productImages/zx62nieqpk4hheegbdgn.png",
                    ProductId: 8,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664311/productImages/lhcuslhhupghsyc25ksa.png",
                    ProductId: 8,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664312/productImages/u3liydimxewgygoirf6p.png",
                    ProductId: 8,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664313/productImages/lemdylmwl4eod9rrdbbs.png",
                    ProductId: 8,
                },

                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664501/productImages/as753fbgxspnufus8mmf.jpg",
                    ProductId: 9,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664502/productImages/bqfqwmcjpznucwynegz9.jpg",
                    ProductId: 9,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664501/productImages/adizwvd1yiebaa0pqqrj.jpg",
                    ProductId: 9,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664501/productImages/enrvuoixsfjupyvdbtty.jpg",
                    ProductId: 9,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664799/productImages/cndukpdxzo5gke65ooha.jpg",
                    ProductId: 10,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664799/productImages/drxbqlnclfl9mbdmarep.jpg",
                    ProductId: 10,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664800/productImages/gchf9gldaswwgcmrfzql.jpg",
                    ProductId: 10,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664800/productImages/ndkl47uax2si0ufkhail.jpg",
                    ProductId: 10,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664800/productImages/b4urunglbqiqwnenkgxu.jpg",
                    ProductId: 10,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702664799/productImages/erzddwp8y67z09sireyp.jpg",
                    ProductId: 10,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665118/productImages/g8vvkeqwch57krs6dyxy.png",
                    ProductId: 11,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665119/productImages/dgawdfqvmlwtbxijokui.png",
                    ProductId: 11,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665119/productImages/sd79rg5bbleeqvoblwwc.jpg",
                    ProductId: 11,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665120/productImages/h27nnknm10r5wrrl0upz.png",
                    ProductId: 11,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665121/productImages/g9ktb0f7zalml2oojukh.png",
                    ProductId: 11,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665527/productImages/ar9zjlfaher1rarljrk7.jpg",
                    ProductId: 12,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665527/productImages/jp8591xfyklxdjo4oaou.jpg",
                    ProductId: 12,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665527/productImages/a5rkgwnmodyd7k6vfilk.jpg",
                    ProductId: 12,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665527/productImages/z8sttwbzbv5gde7izmyy.jpg",
                    ProductId: 12,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665527/productImages/dep5hvet39uhkae9tgsb.jpg",
                    ProductId: 12,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665527/productImages/aaghhtywy9hzlhmtdkye.jpg",
                    ProductId: 12,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702665527/productImages/qz7m5ksktxb9hs5tldcp.jpg",
                    ProductId: 12,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/tibzmrqfqm9c050o9dzb.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/jylqrzxgenbgbs4brwcs.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/neoivdwa7vymzn5bun4i.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/fl5f0vjeu1h2fxi2v1c9.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/x2fqi4ifgurudcsnxnkk.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762612/productImages/mdpvlmbooh4uzqhqcr67.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/lm2srhcqu8yoajdkbdzi.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762611/productImages/zaxunrpcubsu7xxf3zhb.jpg",
                    ProductId: 13,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762883/productImages/gpb81glxmfnlita5cjni.jpg",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/pvtzitvom5nydn9j7jno.jpg",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/o6j5xz9uhkevmpycjid3.jpg",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/enjw4fz1dsoxyrdutwr9.jpg",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/kngpp0mc0vhxxosmfzmg.jpg",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/btmzo4kuvgjeivddkvpt.jpg",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/jvm5kyi75jizuo1v1wou.png",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702762882/productImages/p03zxhxr2pn2sbl1qpli.jpg",
                    ProductId: 14,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763196/productImages/g252wcm85lbh8cmgz3ho.jpg",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763196/productImages/tta0oiyydjml7b4tr2bj.png",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763197/productImages/pnb2vzy22rdarw9vc2lg.jpg",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763197/productImages/ezqahsy2lygq8xr0tdqp.jpg",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763197/productImages/e2pr5mb4o4omg4ez53md.png",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763198/productImages/dsrmn4xzn7oixw23emjd.png",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763200/productImages/urwhk7ehsgt7gh3rcpso.png",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763202/productImages/htcdulqwxfskpawqnzhz.png",
                    ProductId: 15,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763546/productImages/gonjctkln25814clzf3f.jpg",
                    ProductId: 16,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763546/productImages/y8nrfyggyzd1y0tzbakz.jpg",
                    ProductId: 16,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763546/productImages/gkselrkcqxqhxiqlbqop.jpg",
                    ProductId: 16,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763547/productImages/huwf03g0wryceqw0fy5n.jpg",
                    ProductId: 16,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763547/productImages/cdp91qqnlbd3xdpfhgui.jpg",
                    ProductId: 16,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702763547/productImages/lghuefxog3v5tsbnhuox.jpg",
                    ProductId: 16,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764191/productImages/n0otcvwsbaw61ixiarq5.jpg",
                    ProductId: 17,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764192/productImages/voybspnpeva4bf9rxtvq.jpg",
                    ProductId: 17,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764192/productImages/gurpdvpkqoffya5xiimn.jpg",
                    ProductId: 17,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764660/productImages/blvmrzwju9vax6wgkjit.jpg",
                    ProductId: 18,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764660/productImages/wcrt2orrmjejn8dy3duq.jpg",
                    ProductId: 18,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764661/productImages/ii5k6wp3myzb7potktsf.jpg",
                    ProductId: 18,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702764661/productImages/cqdd9xruc6eele4bmaqp.jpg",
                    ProductId: 18,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765070/productImages/n4itznzohdc5hndfqf6t.jpg",
                    ProductId: 19,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765071/productImages/nsawsraktsiqokiytvjy.jpg",
                    ProductId: 19,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765071/productImages/eqpiseurqyle0bjiscio.jpg",
                    ProductId: 19,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765071/productImages/srchdvn2zgqzmv49usi2.jpg",
                    ProductId: 19,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765277/productImages/mqpzp19bbxz1xmsn4ac7.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765278/productImages/d5ijhvpyhex1sny3qqc2.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765278/productImages/bw0ps6iu4087ask5brrp.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765277/productImages/ugjmybbwh3yqjy8qkgpm.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765277/productImages/otuocnklceqh94pjfrbk.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765277/productImages/hynmpuw2bhzhgk9arpcy.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765277/productImages/gllhdo0b6ophry2l2oer.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702765277/productImages/onar7qchhrifaxlh0hvu.jpg",
                    ProductId: 20,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702777017/productImages/nzaaes4mzik8ntaforxl.jpg",
                    ProductId: 21,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702777017/productImages/bh0jlmmayh34szsvwudp.jpg",
                    ProductId: 21,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702777017/productImages/qeqp59916d5tvnvm0lrp.jpg",
                    ProductId: 21,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702777016/productImages/uvtd1qfkwzf8w0bjme04.jpg",
                    ProductId: 21,
                },
                {
                    url: "https://res.cloudinary.com/dxpisdy2r/image/upload/v1702777016/productImages/sw7mpbwcfiam3vikcmap.jpg",
                    ProductId: 21,
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
