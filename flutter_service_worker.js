'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b427076ee6beaea509713366e92ddfa8",
"splash/img/light-2x.png": "caebe42bd2f338ea8b30cae31f3c5f55",
"splash/img/dark-4x.png": "b907b9b8c95d999168ca80a625e8e941",
"splash/img/light-3x.png": "a84b76bfc27ee992555c66cc82f7c51f",
"splash/img/dark-3x.png": "a84b76bfc27ee992555c66cc82f7c51f",
"splash/img/light-4x.png": "b907b9b8c95d999168ca80a625e8e941",
"splash/img/dark-2x.png": "caebe42bd2f338ea8b30cae31f3c5f55",
"splash/img/dark-1x.png": "e8ecb360bf39cebc2c8d3cd31fd07f26",
"splash/img/light-1x.png": "e8ecb360bf39cebc2c8d3cd31fd07f26",
"index.html": "6e0c1d1361ed538bab44973b40147697",
"/": "6e0c1d1361ed538bab44973b40147697",
"main.dart.js": "829bd8b9f15ce21106d2622e13aa8141",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"loading.gif": "c41cdb25bfe35388dd1c8f0bc79fb164",
"favicon.png": "a1fff6fdb573c8133b07d563aa104cbc",
"icons/Icon-192.png": "8da78d21a9ef8c081f1b3b185d2b20ed",
"icons/Icon-maskable-192.png": "8da78d21a9ef8c081f1b3b185d2b20ed",
"icons/Icon-maskable-512.png": "b907b9b8c95d999168ca80a625e8e941",
"icons/Icon-512.png": "b907b9b8c95d999168ca80a625e8e941",
"manifest.json": "5b03a2a63f100b587e4f057504bf10e5",
".git/config": "63b388483c754a4767035802c5f7b3d6",
".git/objects/61/d91d1e2d95be3d99f80152572ca236db5ea1be": "82123c3a93e72200c548c5976fd433c3",
".git/objects/61/388d5f4b90fa60e4542846f482b8c0d0a38aa1": "b557168c64d4bcafa9fd28b7f174fb93",
".git/objects/59/8767daef94015a3b5d963fdf8fe8b2f6158e56": "fbb90c41741fce30466b765c9b11201e",
".git/objects/0c/801c8f42fb710817afdc43fab39ca48fee288c": "d2d22b18b578b398533faced600ea198",
".git/objects/3e/c03ab35d255d541e1c0db97902e7a67a7a53bf": "4749396b84de5e4c032233ab19287b53",
".git/objects/3e/433d912991f0cd82b1fbc0aadcb77b0c24f132": "028dafda78100a691b8fcd0262633932",
".git/objects/57/826403419dd95d19e587b6d4c627a69f825c06": "fc082a291d91b69c3eb92f88171291d5",
".git/objects/3b/0f5a42d39ebac5dd7ce2e02c5a741697624bb1": "bffb8e9274838feb2c335830a9f1b6a6",
".git/objects/3b/9f93cb55660f93d618c3e2d7b4391092c6b732": "26ef874f1eb336cb0edd26782605e70d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/cbded16d2d61ed2e0eb18ab514e37c1348e9c1": "504da8f019dfd9723efc06c48e9c27d8",
".git/objects/9b/353058151a7674dff361671ddb2e255539682a": "b5e8a974c360a46b980306354d99cb49",
".git/objects/9b/c4b0b36daefe2c2b6c02fddc86634cc3c22429": "3664b817475bd111e91b23fb07de3186",
".git/objects/04/aa79c6fdad14f0f9a7d5b39c29c31495c94420": "d15af15baa8d3b7ab8a819c2640b5af4",
".git/objects/04/083c84d59ec34239ca0455a8db37bebba7469c": "4a05e2cbf207da6aaf86888877df8cb8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/02b675322ed6f7f92671e6bc34b9c845b6a83f": "dd1afac18b7929ec8b64b9a9240ea838",
".git/objects/3c/6dc68e55e49dd2bd27da320242507a73fe67d9": "8044d3750faaca4b63c96d8083bb74c5",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/b7518350b315c2ea52b46c40c2a6c0287fdc05": "3f6e644e92d077882056d7dcdd72fbd2",
".git/objects/60/e7f8d389c93fec6fb47ddc8558b37e1a1a0858": "91792a3044ba388080a208f6df09e403",
".git/objects/5a/5d7626b6ff1ff5df8a0c267c171e8c83f9fd41": "9ce1463bf812ac23c1ad84876531e227",
".git/objects/33/52511095f5fea73b93f5dd59abfbb009caa3d2": "aef311ea74c46853816a0f39323f3043",
".git/objects/33/68ac9c4c6c12389a8535ce6cbcb8cfa63b189c": "7c680a466b3812b4a37780325a889e04",
".git/objects/a4/beb72fd464e7deedd1523b9e95dd55ec594274": "2742b3b4f64afda488ee4e8562c72923",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ac/2fdbf8e944aa05949c78ae4e8dab2a6754a34e": "05ce3f1070ed692f9d28d1997b4077a3",
".git/objects/d0/ffd834c3354e1bbfec7cd2221311e2d6a28313": "fb608aea602c3414fabb1feb1ba6206d",
".git/objects/d0/44836c481b1590d818b5c1591545e4ef895d02": "1482077972edff10c3b895f7ce2808f8",
".git/objects/be/083326c9ff34344e1eb8e64a0180f0cd4fb5de": "037562ce8f115a9c6023fc0d651a8f04",
".git/objects/be/1a594c040d9220a3165e7395a4641bf73bcdd8": "2a8e87f5859209d4bf7dec3410a2daf3",
".git/objects/b3/4031daf9623673843d8ebef1310ad2ceba98e5": "a6804a8d7d806c1aeac65286547ba18a",
".git/objects/df/b8a63555d6e494e152ccdac9338571ea6ee3a3": "68ca99ea34fd7d96974ca30651372212",
".git/objects/da/67ee40e6e56ed34e2d7369963c19a1816890cb": "0c9d096c3ce7e3e6876c71249bf7a4eb",
".git/objects/b4/8ad8c25608a3e2ba227a04228c49e3f94e3f64": "231cb64ec3cc5fe28388e49f11b58561",
".git/objects/a5/edeff0ce128897fb7cb6e5765984a951fe09f6": "ca20bea2f5a7253280eeb4286d612244",
".git/objects/bd/d15559fc451ab04f0e1acd8f862e68e913e0fe": "50dff7e36896cc4a39cc48820883ea1e",
".git/objects/d6/55c1abe1947eba60c0df28e2d4e3cfea9d183b": "ba518566e8882166620e9a8ce7fe6421",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/5832cb000de84520765d20f643000d5995e5e5": "cb1080772513a67ba4d15d94d8ba3e06",
".git/objects/bc/5f6580c7e38619695a5092158fe756266ea963": "94685d60c1f2a99b5a0fae5c32cf236e",
".git/objects/ae/246581539f43cb47c6143c533e68b75e1795bf": "6a3a7895d1052012edd67a8b1f8b3946",
".git/objects/ae/0f0ec745cc52a2b65c4ed3df861419d52c20cc": "b6403cc6b9ae853c5e2dff5c1ff6259e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/bfec60719fd7f9b190c1490c7e1b623a4f1b86": "11ed44054854e8d18b5e5062cac6c68b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/c07f60be7f5241ee827e509c9039e72a050cb4": "e77c9f03dea93e5e4a517d84b74467d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/1c723fcbe0bb59d696e19b4d16594dbf00a104": "ea839bba6f800f2add81479b9191843c",
".git/objects/c9/e521f587880273a0e131eab0a637e5dea58b22": "1a9f78e2aa859c5624a9f30004b67c3c",
".git/objects/fc/ae72c94050a01e523fa215eae5bea4ba734964": "df6fa4c486f2bc6d915244b6acc72052",
".git/objects/fc/328d0e9f8894527f43518868b5c8cf26310962": "05dbca58c227fa1909d56719feb893c8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f5/02bbe3f8d8781fa5893958a84c19ca8b11812d": "5beb16179cfaff0526a2779ac7e17f61",
".git/objects/e3/0de019f08f98ee0813baff0dfae47be20afd6f": "3a048eb3f8c246690935d018be86aa80",
".git/objects/cf/b6926b17bee47cd75c0507d382338c3ee2b037": "e07eef21574fdf73a0c6216499116c7f",
".git/objects/e4/06d6935e982905bfc1045422009ad82e749565": "5b31d604d1d7b473a0bc68bb09ce2011",
".git/objects/fe/d4b2c26bf42f5f21b742c271c9f5808e01be13": "296a710982913c7705823c0d6e0f81b3",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/ed/de247d27686d12a3e82ea585bada5703d0800a": "57da12b75a34381b403e66652b81bcfd",
".git/objects/c1/89a708f72cbf7fed529e75af62e3ccdba5bf80": "689aa0f02c2a1f54ec5659a77f548254",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/469e5f4cc05c90c845fe7cce9f2e77ef9495b2": "bd722139f312716de3834eb81567ca1c",
".git/objects/27/950651a16227d389c434a184018dd8c04a649c": "2b5d42197306dea3603d4e9fbff75f08",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/ce4f68a104747334bc6f84b525dfb0398698fa": "bd3a3db451749e364f70108fe2b3954a",
".git/objects/11/c58eb82f0fcad205c18eade6b5bb64d30b47e1": "a065ac0add48613083ccaff58dbf85e9",
".git/objects/7d/731047254407d793b15729fe4197e2cfb16442": "e3c02c882b1db38a48f98c85293259dd",
".git/objects/29/0ea4235a498e8b393f3c99607566318c4b94b1": "022ce7aca4c35437e38fcc70c81e9d4d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/d40802099809c40bc27da03c73fed2d951f5f2": "6fb1cd238e2b94d09b5830ddcf5417fd",
".git/objects/42/cc9e5345ae42ce95d047dc6b4b3c93b665258e": "5b32fdc476a4ad8d3d36f9e33f1b5801",
".git/objects/89/001e6f6d13cf741a9c9a498fa6db749c932713": "df9d2fa8da08a1d89a0f16c061a7631e",
".git/objects/89/7f2eb8dec84c505b9c8c4763e17cbb9e96f3c5": "a568e5935686ecdf4f34eac3dfe14412",
".git/objects/45/50e469ae104e78f520b044415fcfafdd09e507": "97df98a264633168e76089e13a45f463",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/3e9df14bba78f64d4ae9313de1c0c3f535f9c0": "0e5f8c7cd6744ed5845903b93c975ee1",
".git/objects/1a/f5217a2416fc37567c35bb1c614dcb68018440": "1123120703c38906f74a20c2fa8c79c7",
".git/objects/17/7208132643a20fd0511113d7310219a013c7c3": "a5230087c52d6c3cb5cac0e322d31581",
".git/objects/7b/b783994d627221c63e402b9bda19f3b5a06e4f": "19261fbdf98f08dbf52436a6b44857a2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7b150fcd64b2cc426174b6bcc5a7d46b7f19df": "b8f960f371084ac54d2cd9f53639e386",
".git/objects/4d/d21af4ffe03490231f0905bde36e19fab8eade": "508806463069a1fb4414925d3684ea60",
".git/objects/75/b468e703a9779d03b3620e69425a083fc6b468": "7deb6b7776738282568b024f0dea5343",
".git/objects/81/6792d0e30995fd5e6e30653a244e65edba0c67": "94cfce5a6ff0d7d761fb8f2d72f8568e",
".git/objects/2a/0fa0cfab56bea8c3e6948b78b449350b90d711": "f4156186fb056a2ea8a7802c03fea8dc",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/ac6e9ddbeb3f17f17187cb2c8a31c1a87173ad": "4293ad3523ff67c9555a0b007aa04f98",
".git/objects/00/b424bf66848f8a9677aa9399732a7f14eb366c": "2ce5dd010ca47d412db4e6bc9e2e2c67",
".git/objects/9a/c680aedcd3b09e6cffedf945ab8511b41a5ab2": "41cedb91f5e712a4d762cdf62dd03f26",
".git/objects/5c/95cbb7dbe86270663c1c787f4b0b2b5e753dca": "63efdc60ba0baeff37275c1ef70d080e",
".git/objects/09/6cf805a514d8d175446a97de2aa641f39e2196": "8be4abf231c1067fe526e7b58c65c6b7",
".git/objects/5d/7d891061be71fec10b5de4338c8d89d5ad4a06": "7a366b434c6c390a87352b31c0454ca8",
".git/objects/5d/af7cd48cffa70dfa1c28915b0200c6b2b7bdfa": "bf3674f3c0a0e157b8f7efbb3f8b2796",
".git/objects/62/0d3d4ff693f42f895cc98e9692ecc75dda9dd2": "da546df1d9f2f37f204f5773a7667b0e",
".git/objects/3a/230677de33e32d9e777eebfc17b89e5bf91c73": "0cb24500097fdf2586b3fa85d011ff2c",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/5b/480eaf84d9cbe0d633920ca5a5d26ae3fe20e7": "99026770d5b165594573b6a653fbd05b",
".git/objects/37/081fef128bdd2b7a32022bce638e05142529ed": "442e4b0909f0cd20c0bb0f126fe0946b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6c/246aecedcba724fa36d2465f1495ea07e2d3b2": "353d4a3828bb9f1983a3d1f7f232c758",
".git/objects/39/edd45e990ca5e7443737ec30f40b46ffdafa14": "cd47aa8d33b7ea72707dd2a50596358f",
".git/objects/39/049b062cc59e5eb3a73938bd85c42dd079aef7": "cb97928fc20309bb2b0a5d05ed40272a",
".git/objects/52/948b7139ff5f212b41209740ff1379a6877b86": "ee227708b5cf5de0855e3222eb394033",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/a51a72cd1ddb658f6693a2ae99daf5da833007": "df46a6a2ed97ed82050455107b35f69b",
".git/objects/97/bc6afa623cf89cb19eb568358589a631cdfa71": "9f8a435d764061fbb352335b4ab9d168",
".git/objects/0a/463290ad77a92677f2cf40fb85369d8ed8e0e1": "bf109f21ffa99686b112354af04d6fff",
".git/objects/90/4272e27c20c7e50e5bf1e58282794d492119ae": "054fc6f0cd932f4ebd856bff45b79449",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/bc30f82f96e4ed9289e7e0c1172b1b15cf2025": "b99bdf66618128bdfbbe717e727302ab",
".git/objects/ba/472d85424367607e9a894836d4444947add6eb": "485584d7ae13dc81522961c71c5b28c2",
".git/objects/a0/62affeff224f1e5037edd97738d5db041d37ed": "d0ea66ee213b0a84978ec52c61c6d47a",
".git/objects/a7/eb1ba6c2c8ef93826b90db5cf38a2495b13018": "6eada9f7399b0aa43cc3cf95c8a8e1da",
".git/objects/b6/3b51df39cb5db554fd0d1c40da34b259caceee": "811703512d863d69c143e79340de5bee",
".git/objects/a9/f1dd28e97e3a2572e7efe2a6acc629d1b57178": "ffe01c23e003a343a55726e17fe83663",
".git/objects/a9/098635dc6fd2bab5ba57632788d356210b5718": "baf0160f30f73c1dd9c763e64bd93a68",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/8ae6593a513c1ae78ea916b44e2c3cc4718e6f": "ca19bb81028d6fc404a783f4c86f2812",
".git/objects/db/c77be533e48950345bcb9f48767284140938a8": "3424e75af34aefeecc97a81a974be4f3",
".git/objects/a8/551ac6d1a1b3a442b99c40737a766358a62e16": "ef468c290bb17403536e4b4b0b1c112c",
".git/objects/b0/00db7377c64093fb82d6e75ae0ef7fd6daa611": "d316152ed4b1918e5bf2927b54b87229",
".git/objects/b0/e15378347e77d2f11baad69dbd9d26b9682cdd": "13c6997e6b5f5a4fdf821fe63e932a21",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f0/675f96ba8e1a7d711c9c6daea624bb30dca537": "138140095e940dc6b2ab04c110bd910d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/eb9a3293809d9270aa067c717fa0cb9a9a3895": "574ac1fd4ba1c3510dbb0a5725704b49",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f05f48f90b539baa7772554aece1f12a80919e": "fff584d524f223389351b7ac8f138523",
".git/objects/41/fb7caf735dedf43d0fbf1f1648a43c49b0f15b": "6e0aa8ca5e5409162ac7197d04b0e0ea",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/eac42db426269f28041ff170cc24691d4c0b1a": "db467c6942a7e06496bf9b76b166582a",
".git/objects/83/e0d7e0418590b9dd5aa09f1d6dafb820e61abf": "9ce4eb6e4df39dab91fe5958b1e237a4",
".git/objects/48/6e320552cb442883769a2664e0ede7094ea4e6": "69a9deb9ff7683e060eedce33423ae5d",
".git/objects/48/590e74cdd9b693267c36eb1e716b9be7468862": "afaa3ce4966d7bfd874c8f8e9af3aeff",
".git/objects/4a/d5d9354d74e0532ecfe06fc7a59876fe01d93e": "ac19b8f3621a026b53e5d733647c0f14",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/e56785469716475add24f868f88267248577d4": "4ac0f88dbd17df0184d1812c892ca667",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/5c3817725d71643d9c08c30dc6480abe50fa94": "22d605c2ce52468f6d3c6deb927b813f",
".git/objects/1c/18833a858410ac67344084ce02a1aa3b8e9aec": "8d3df2fd9dfdfb87dec7f6d62885e06c",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/78/acf6e0b60528076b8033f19b443ccbd2d2c078": "9ee9d57051f9b4bbe8a9b3a357f4c86a",
".git/objects/13/65f1a41c9db636c1bacf6d92a23da0ec380ce9": "43e0105336ca5db19764adc4b6e86865",
".git/objects/14/7e1782e189fa43e09676fe0f6ba3aa8619aa3d": "7d680909bf95bdfd19d79c9fda1b4818",
".git/objects/8e/d34ca09c9f277dbf0189f611140e3b15246740": "d17f3a114370f515c4b0ecf65f06dfb9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b0fc8dda375dbc01669963465914fd9",
".git/logs/refs/heads/main": "0b0fc8dda375dbc01669963465914fd9",
".git/logs/refs/remotes/origin/main": "ba84fa9ad933380abbf75a2a3a90d1c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cbab383c5ac3f83b8469df2accba21a4",
".git/refs/remotes/origin/main": "d825264807652c591184e956564725ee",
".git/index": "70b803cbc76b0b7a472845933cad35c7",
".git/COMMIT_EDITMSG": "69103e5af80118b578d06c61e33a05da",
".git/FETCH_HEAD": "8f1746686f9e5784937bc8a2732e3719",
"assets/AssetManifest.json": "5d6d6314a9e9c1338d8a95f7dcd63c5e",
"assets/NOTICES": "6e59baac0551d323b7618d13101a9bba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "f4de59ce41b93d5222b43c522bb92b44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "800c01a8c1761c941fd614061fb92201",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "820c7fa5ef3f569494af81acabd2ab4c",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0674b3ce5a54aab85805e865c5cae11a",
"assets/fonts/MaterialIcons-Regular.otf": "a6fbdf0d0b6af3d3de038153ebb4c44d",
"assets/assets/icon.png": "8a9b7af23913e7e415adbbabf765d61a",
"assets/assets/dotenv": "90c876fdac60af079ebf039f5738839e",
"assets/assets/placeholder.jpg": "0f4240f12b4b9aeae326441e0a413a0f",
"assets/assets/logo.png": "2a9636087c15d6a8491d4d069df75f58",
"assets/assets/whatsapp.png": "6c4591090164213f17232d8a47213d60",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
