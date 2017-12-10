// Todo: load data on server-side
var itemNames = {
    'abanoz-odunu': "Abanoz Odunu",
    'adacayi-yapragi': "Adaçayı Yaprağı",
    'akcaagac-odunu': "Akçaağaç Odunu",
    'altin': "Altın",
    'ametist': "Ametist",
    'bakir': "Bakır",
    "ceviz-yapragi": "Ceviz Yaprağı",
    'civan-percemi': "Civan Perçemi",
    'demir': "Demir",
    'elmas': "Elmas",
    'gumus': "Gümüş",
    'isirgan-otu': "Isırgan Otu",
    'kalay': "Kalay",
    'kalsedon': "Kalsedon",
    'kantasi': "Kantaşı",
    'koni-yapragi': "Koni Yaprağı",
    'krom': "Krom",
    'kursun': "Kurşun",
    'kuvars': "Kuvars",
    'mese-odunu': "Meşe Odunu",
    'nikel': "Nikel",
    'obsidyen': "Obsidyen",
    'okse-otu': "Ökse Otu",
    'turkuaz': "Turkuaz",
    'beril': "Beril",
    'mavi-safir': "Mavi Safir",
    'platin': "Platin",
    'serbetci-otu': "Şerbetçi Otu",
    'tungsten': "Tungsten",
    'ciban-otu': "Çıban Otu",
    'krizoberil': "Krizoberil",
    'mantar': "Mantar",
    'topaz': "Topaz",
    'titanyum': "Titanyum",
    'cigdem': "Çiğdem",
    'meteorit': "Meteorit",
    'monazit': "Monazit",
    'yesim-tasi': "Yeşim Taşı",
    'acik-mavi-lapis': "Açık Mavi Lapis"
};
var itemTypes = {
    'madenci': [
        'bakir',
        'kalay',
        'kursun',
        'demir',
        'nikel',
        'krom',
        'gumus',
        'altin',
        'tungsten',
        'platin',
        'titanyum',
        'osmiridyum'
    ],
    'sarraf': [
        'kuvars',
        'obsidyen',
        'kantasi',
        'acik-mavi-lapis',
        'turkuaz',
        'ametist',
        'kalsedon',
        'elmas',
        'mavi-safir',
        'beril',
        'topaz',
        'krizoberil'
    ],
    'lokman': [
        'mese-odunu',
        'ceviz-yapragi',
        'isirgan-otu',
        'okse-otu',
        'adacayi-yapragi',
        'akcaagac-odunu',
        'koni-yapragi',
        'civan-percemi',
        'mantar',
        'serbetci-otu',
        'abanoz-odunu',
        'ciban-otu'
    ]
};
var data = {"ada":{"abanoz-odunu":[{"x":115,"y":179},{"x":199,"y":218},{"x":183,"y":263},{"x":184,"y":301},{"x":316,"y":322},{"x":217,"y":377},{"x":286,"y":489},{"x":398,"y":431}],"beril":[{"x":251,"y":136},{"x":142,"y":232},{"x":206,"y":286},{"x":341,"y":286},{"x":287,"y":364},{"x":243,"y":416},{"x":187,"y":443},{"x":391,"y":459}],"ciban-otu":[{"x":125,"y":213},{"x":89,"y":223},{"x":165,"y":251},{"x":279,"y":289},{"x":227,"y":386},{"x":301,"y":416},{"x":405,"y":390},{"x":215,"y":475}],"krizoberil":[{"x":61,"y":227},{"x":236,"y":210},{"x":204,"y":323},{"x":150,"y":374},{"x":283,"y":351},{"x":322,"y":396},{"x":390,"y":398},{"x":210,"y":450}],"mantar":[{"x":136,"y":211},{"x":74,"y":244},{"x":190,"y":324},{"x":260,"y":309},{"x":309,"y":351},{"x":330,"y":419},{"x":391,"y":418},{"x":252,"y":483}],"mavi-safir":[{"x":113,"y":134},{"x":106,"y":227},{"x":177,"y":287},{"x":325,"y":223},{"x":263,"y":409},{"x":320,"y":412},{"x":378,"y":343},{"x":375,"y":372}],"serbetci-otu":[{"x":256,"y":191},{"x":173,"y":212},{"x":149,"y":263},{"x":141,"y":342},{"x":229,"y":372},{"x":214,"y":395},{"x":380,"y":447},{"x":339,"y":357}],"topaz":[{"x":283,"y":182},{"x":332,"y":258},{"x":114,"y":245},{"x":89,"y":266},{"x":289,"y":331},{"x":231,"y":406},{"x":184,"y":424},{"x":409,"y":425}],"tungsten":[{"x":184,"y":171},{"x":71,"y":187},{"x":263,"y":267},{"x":202,"y":369},{"x":157,"y":398},{"x":255,"y":424},{"x":309,"y":483},{"x":239,"y":388}]},"antrepo":{"adacayi-yapragi":[{"x":282,"y":255},{"x":292,"y":337}],"nikel":[{"x":231,"y":294},{"x":359,"y":251}],"turkuaz":[{"x":164,"y":252},{"x":245,"y":337}]},"eminonu":{"acik-mavi-lapis":[{"x":155,"y":172},{"x":213,"y":215},{"x":188,"y":291},{"x":274,"y":300},{"x":285,"y":184},{"x":333,"y":135},{"x":343,"y":193},{"x":348,"y":233},{"x":301,"y":323},{"x":416,"y":236},{"x":434,"y":278},{"x":469,"y":214},{"x":461,"y":191},{"x":456,"y":175},{"x":459,"y":157},{"x":523,"y":199}],"adacayi-yapragi":[{"x":80,"y":54},{"x":108,"y":98},{"x":172,"y":187},{"x":105,"y":256},{"x":270,"y":273},{"x":279,"y":270},{"x":371,"y":261},{"x":410,"y":227},{"x":447,"y":214},{"x":446,"y":193}],"akcaagac-odunu":[{"x":68,"y":38},{"x":15,"y":87},{"x":183,"y":165},{"x":145,"y":204},{"x":62,"y":264},{"x":174,"y":242},{"x":241,"y":236},{"x":257,"y":329},{"x":372,"y":325},{"x":484,"y":231}],"altin":[{"x":59,"y":7},{"x":78,"y":42},{"x":27,"y":107},{"x":12,"y":259},{"x":67,"y":271},{"x":283,"y":217},{"x":258,"y":376},{"x":382,"y":329},{"x":462,"y":140},{"x":519,"y":234}],"ametist":[{"x":86,"y":31},{"x":67,"y":103},{"x":167,"y":175},{"x":11,"y":262},{"x":129,"y":261},{"x":258,"y":67},{"x":316,"y":77},{"x":311,"y":232},{"x":275,"y":349},{"x":445,"y":264}],"bakir":[{"x":90,"y":63},{"x":162,"y":70},{"x":178,"y":75},{"x":218,"y":93},{"x":210,"y":101},{"x":282,"y":177},{"x":486,"y":173},{"x":458,"y":251},{"x":263,"y":265},{"x":68,"y":258},{"x":17,"y":265},{"x":162,"y":307},{"x":339,"y":344},{"x":307,"y":391},{"x":265,"y":387},{"x":390,"y":476}],"ceviz-yapragi":[{"x":188,"y":94},{"x":196,"y":98},{"x":257,"y":92},{"x":265,"y":125},{"x":284,"y":143},{"x":239,"y":141},{"x":183,"y":180},{"x":258,"y":221},{"x":293,"y":233},{"x":242,"y":258},{"x":166,"y":309},{"x":248,"y":307},{"x":316,"y":356},{"x":429,"y":223},{"x":480,"y":176},{"x":500,"y":216}],"civan-percemi":[{"x":33,"y":5},{"x":34,"y":21},{"x":6,"y":74},{"x":86,"y":193},{"x":112,"y":270},{"x":229,"y":280},{"x":283,"y":156},{"x":323,"y":186},{"x":416,"y":256},{"x":485,"y":202}],"demir":[{"x":246,"y":87},{"x":372,"y":102},{"x":427,"y":140},{"x":244,"y":124},{"x":146,"y":182},{"x":229,"y":207},{"x":196,"y":271},{"x":160,"y":285},{"x":324,"y":237},{"x":241,"y":356},{"x":366,"y":350},{"x":407,"y":315},{"x":406,"y":282},{"x":428,"y":259},{"x":441,"y":235},{"x":521,"y":251}],"elmas":[{"x":64,"y":22},{"x":61,"y":59},{"x":14,"y":49},{"x":31,"y":85},{"x":4,"y":271},{"x":207,"y":297},{"x":256,"y":366},{"x":373,"y":194},{"x":432,"y":136},{"x":405,"y":323}],"gumus":[{"x":94,"y":77},{"x":67,"y":267},{"x":177,"y":279},{"x":236,"y":197},{"x":382,"y":105},{"x":358,"y":189},{"x":294,"y":300},{"x":302,"y":374},{"x":403,"y":408},{"x":506,"y":259}],"isirgan-otu":[{"x":121,"y":57},{"x":114,"y":69},{"x":162,"y":183},{"x":212,"y":196},{"x":276,"y":200},{"x":126,"y":250},{"x":231,"y":264},{"x":291,"y":281},{"x":383,"y":199},{"x":383,"y":228},{"x":383,"y":326},{"x":392,"y":325},{"x":493,"y":186},{"x":509,"y":228},{"x":341,"y":408},{"x":372,"y":382}],"kalay":[{"x":163,"y":109},{"x":138,"y":151},{"x":37,"y":186},{"x":94,"y":200},{"x":56,"y":247},{"x":197,"y":207},{"x":135,"y":251},{"x":109,"y":274},{"x":177,"y":244},{"x":149,"y":301},{"x":263,"y":150},{"x":303,"y":137},{"x":307,"y":188},{"x":407,"y":157},{"x":294,"y":390},{"x":372,"y":385}],"kalsedon":[{"x":19,"y":21},{"x":58,"y":28},{"x":29,"y":35},{"x":72,"y":66},{"x":145,"y":84},{"x":40,"y":241},{"x":213,"y":265},{"x":274,"y":314},{"x":416,"y":119}],"kantasi":[{"x":57,"y":250},{"x":164,"y":117},{"x":161,"y":257},{"x":158,"y":293},{"x":181,"y":307},{"x":242,"y":108},{"x":275,"y":60},{"x":297,"y":66},{"x":293,"y":211},{"x":350,"y":139},{"x":334,"y":181},{"x":398,"y":162},{"x":361,"y":200},{"x":362,"y":283},{"x":401,"y":421},{"x":511,"y":268}],"koni-yapragi":[{"x":89,"y":74},{"x":87,"y":105},{"x":84,"y":157},{"x":189,"y":82},{"x":109,"y":243},{"x":168,"y":295},{"x":299,"y":346},{"x":396,"y":232},{"x":492,"y":206},{"x":501,"y":244}],"krom":[{"x":104,"y":46},{"x":229,"y":108},{"x":114,"y":187},{"x":221,"y":209},{"x":336,"y":292},{"x":271,"y":382},{"x":398,"y":333},{"x":478,"y":148},{"x":512,"y":172}],"kursun":[{"x":44,"y":15},{"x":405,"y":114},{"x":448,"y":134},{"x":300,"y":130},{"x":396,"y":188},{"x":472,"y":234},{"x":488,"y":262},{"x":344,"y":248},{"x":200,"y":264},{"x":137,"y":303},{"x":376,"y":278},{"x":343,"y":306},{"x":385,"y":314},{"x":327,"y":396},{"x":403,"y":440}],"kuvars":[{"x":51,"y":32},{"x":128,"y":98},{"x":120,"y":127},{"x":197,"y":87},{"x":176,"y":200},{"x":110,"y":220},{"x":247,"y":146},{"x":267,"y":235},{"x":299,"y":157},{"x":311,"y":181},{"x":366,"y":236},{"x":319,"y":333},{"x":296,"y":371},{"x":373,"y":365},{"x":347,"y":415}],"mese-odunu":[{"x":91,"y":86},{"x":144,"y":62},{"x":197,"y":78},{"x":205,"y":94},{"x":215,"y":96},{"x":264,"y":118},{"x":280,"y":124},{"x":272,"y":131},{"x":199,"y":198},{"x":45,"y":124},{"x":57,"y":272},{"x":384,"y":378},{"x":374,"y":449},{"x":378,"y":468},{"x":485,"y":214},{"x":492,"y":235}],"nikel":[{"x":375,"y":148},{"x":366,"y":151},{"x":275,"y":165},{"x":67,"y":148},{"x":53,"y":238},{"x":313,"y":279},{"x":366,"y":295},{"x":504,"y":238},{"x":286,"y":343},{"x":384,"y":392}],"obsidyen":[{"x":59,"y":44},{"x":80,"y":126},{"x":69,"y":220},{"x":144,"y":126},{"x":215,"y":79},{"x":189,"y":207},{"x":186,"y":262},{"x":184,"y":293},{"x":252,"y":134},{"x":275,"y":99},{"x":287,"y":118},{"x":311,"y":169},{"x":315,"y":292},{"x":394,"y":262},{"x":388,"y":460},{"x":506,"y":273}],"okse-otu":[{"x":112,"y":61},{"x":110,"y":147},{"x":222,"y":239},{"x":223,"y":300},{"x":250,"y":306},{"x":274,"y":142},{"x":292,"y":174},{"x":286,"y":323},{"x":251,"y":352},{"x":333,"y":404},{"x":380,"y":311},{"x":355,"y":271},{"x":430,"y":194},{"x":434,"y":164},{"x":444,"y":156},{"x":429,"y":125}],"turkuaz":[{"x":79,"y":13},{"x":9,"y":113},{"x":9,"y":236},{"x":170,"y":217},{"x":326,"y":79},{"x":340,"y":83},{"x":259,"y":302},{"x":261,"y":344},{"x":390,"y":270},{"x":507,"y":189}]},"hol":{"cigdem":[{"x":310,"y":237},{"x":163,"y":377},{"x":157,"y":346},{"x":204,"y":301},{"x":97,"y":337},{"x":28,"y":370},{"x":39,"y":413},{"x":21,"y":483},{"x":110,"y":207},{"x":221,"y":178},{"x":191,"y":134},{"x":252,"y":90},{"x":45,"y":48},{"x":204,"y":394},{"x":213,"y":451},{"x":191,"y":525},{"x":68,"y":529},{"x":253,"y":348},{"x":312,"y":411},{"x":333,"y":528},{"x":351,"y":355},{"x":373,"y":443},{"x":435,"y":373},{"x":453,"y":298}],"meteorit":[{"x":444,"y":116},{"x":383,"y":88},{"x":328,"y":29},{"x":523,"y":222},{"x":276,"y":274},{"x":227,"y":324},{"x":203,"y":352},{"x":163,"y":388},{"x":43,"y":484},{"x":30,"y":362},{"x":186,"y":268},{"x":227,"y":207},{"x":167,"y":149},{"x":51,"y":138},{"x":139,"y":108},{"x":206,"y":20},{"x":288,"y":364},{"x":64,"y":506},{"x":179,"y":522},{"x":397,"y":416},{"x":389,"y":335},{"x":412,"y":500},{"x":439,"y":435},{"x":534,"y":338}],"monazit":[{"x":383,"y":95},{"x":457,"y":243},{"x":329,"y":166},{"x":78,"y":440},{"x":94,"y":382},{"x":176,"y":303},{"x":109,"y":279},{"x":64,"y":256},{"x":243,"y":245},{"x":171,"y":219},{"x":64,"y":214},{"x":26,"y":195},{"x":32,"y":74},{"x":167,"y":455},{"x":109,"y":473},{"x":236,"y":370},{"x":305,"y":312},{"x":272,"y":458},{"x":348,"y":382},{"x":330,"y":489},{"x":356,"y":529},{"x":413,"y":348},{"x":465,"y":391},{"x":454,"y":521}],"yesim-tasi":[{"x":479,"y":263},{"x":289,"y":72},{"x":361,"y":189},{"x":336,"y":210},{"x":247,"y":307},{"x":173,"y":385},{"x":22,"y":448},{"x":184,"y":322},{"x":126,"y":311},{"x":44,"y":308},{"x":141,"y":242},{"x":15,"y":259},{"x":168,"y":204},{"x":253,"y":120},{"x":249,"y":25},{"x":132,"y":450},{"x":106,"y":530},{"x":230,"y":508},{"x":242,"y":420},{"x":277,"y":337},{"x":325,"y":376},{"x":296,"y":535},{"x":340,"y":438},{"x":463,"y":321},{"x":525,"y":300}]},"labirent":{"akcaagac-odunu":[{"x":214,"y":378},{"x":303,"y":257}],"altin":[{"x":200,"y":288},{"x":332,"y":471}],"ametist":[{"x":410,"y":119},{"x":357,"y":367}],"civan-percemi":[{"x":274,"y":288},{"x":412,"y":357}],"elmas":[{"x":373,"y":321},{"x":309,"y":136}],"gumus":[{"x":373,"y":220},{"x":301,"y":442}],"kalsedon":[{"x":465,"y":356},{"x":234,"y":355}],"koni-yapragi":[{"x":239,"y":379},{"x":391,"y":259}],"krom":[{"x":456,"y":412},{"x":324,"y":295}]},"meteor":{"adacayi-yapragi":[{"x":265,"y":108},{"x":272,"y":244},{"x":376,"y":296},{"x":243,"y":401}],"akcaagac-odunu":[{"x":223,"y":182},{"x":163,"y":322},{"x":166,"y":345},{"x":324,"y":511}],"altin":[{"x":187,"y":88},{"x":173,"y":457},{"x":272,"y":467},{"x":458,"y":518}],"ametist":[{"x":410,"y":224},{"x":147,"y":249},{"x":159,"y":411},{"x":309,"y":527}],"beril":[{"x":294,"y":159},{"x":233,"y":159},{"x":136,"y":137},{"x":391,"y":289},{"x":474,"y":349},{"x":215,"y":291},{"x":156,"y":354},{"x":478,"y":451}],"civan-percemi":[{"x":330,"y":168},{"x":247,"y":248},{"x":460,"y":376},{"x":400,"y":451}],"elmas":[{"x":380,"y":169},{"x":503,"y":399},{"x":286,"y":406},{"x":129,"y":343}],"gumus":[{"x":397,"y":279},{"x":319,"y":334},{"x":217,"y":356},{"x":356,"y":511}],"kalsedon":[{"x":430,"y":438},{"x":425,"y":525},{"x":322,"y":438},{"x":128,"y":252}],"koni-yapragi":[{"x":404,"y":199},{"x":213,"y":210},{"x":186,"y":379},{"x":397,"y":500}],"krom":[{"x":213,"y":277},{"x":116,"y":349},{"x":223,"y":438},{"x":330,"y":459}],"mavi-safir":[{"x":308,"y":171},{"x":320,"y":203},{"x":258,"y":148},{"x":210,"y":111},{"x":111,"y":249},{"x":394,"y":333},{"x":317,"y":499},{"x":149,"y":450}],"nikel":[{"x":263,"y":96},{"x":197,"y":245},{"x":184,"y":403},{"x":364,"y":437}],"platin":[{"x":160,"y":181},{"x":350,"y":166},{"x":134,"y":354},{"x":454,"y":278},{"x":430,"y":303},{"x":390,"y":397},{"x":346,"y":467},{"x":410,"y":248}],"serbetci-otu":[{"x":201,"y":159},{"x":297,"y":195},{"x":382,"y":236},{"x":349,"y":300},{"x":110,"y":270},{"x":168,"y":398},{"x":208,"y":424},{"x":466,"y":435}],"tungsten":[{"x":195,"y":179},{"x":266,"y":182},{"x":326,"y":159},{"x":327,"y":228},{"x":281,"y":323},{"x":231,"y":338},{"x":99,"y":285},{"x":401,"y":521}],"turkuaz":[{"x":266,"y":166},{"x":195,"y":213},{"x":279,"y":350},{"x":148,"y":344}]},"yeralti":{"abanoz-odunu":[{"x":351,"y":79},{"x":379,"y":213},{"x":418,"y":218},{"x":429,"y":157},{"x":433,"y":138},{"x":508,"y":346},{"x":391,"y":348},{"x":387,"y":506}],"ciban-otu":[{"x":299,"y":104},{"x":463,"y":207},{"x":339,"y":269},{"x":420,"y":292},{"x":516,"y":328},{"x":357,"y":323},{"x":361,"y":425},{"x":413,"y":192}],"krizoberil":[{"x":330,"y":291},{"x":372,"y":195},{"x":354,"y":168},{"x":356,"y":138},{"x":485,"y":273},{"x":527,"y":192},{"x":463,"y":350},{"x":490,"y":493}],"titanyum":[{"x":344,"y":120},{"x":457,"y":229},{"x":408,"y":237},{"x":365,"y":290},{"x":381,"y":375},{"x":380,"y":481},{"x":419,"y":479},{"x":352,"y":464}],"topaz":[{"x":519,"y":484},{"x":518,"y":436},{"x":452,"y":330},{"x":411,"y":262},{"x":365,"y":238},{"x":314,"y":185},{"x":375,"y":172},{"x":464,"y":180}]}};
var maps = {
    "eminonu": "Eminönü",
    "antrepo": "Antrepo",
    "labirent": "Labirent",
    "meteor": "Meteor",
    "ada": "Sivri Ada",
    "yeralti": "Yeraltı",
    "hol": "Hol"
};
var current = "eminonu";
var items = [];
var madenciTotalItem=0;
var sarrafTotalItem=0;
var lokmanTotalItem=0;
var mapTotalItem = 0;
var mapPlaceholder = $("#map img").attr('src');

/** Tabs **/
$(".gather-tabs ul li a").bind('click', function(){
    var target = $(this).data('target');
    if(target == current){
        return false;
    }

    $(".gather-tabs ul li").removeClass("active");
    $(this).parent().addClass("active");

    current = target;

    loadMap(target);

    return false;
});

function loadMap(map) {
    $("#map img").attr('src', mapPlaceholder);
    clearItems();
    refreshLabel();
    mapTotalItem = 0;

    $.each(data[map], function(item){

        addItemToInventory(item);

        mapTotalItem++;
    });

    var mapImage = $("a[data-target='"+map+"']").data('image');
    $("#map img").attr('src', mapImage);

    $(".gather-map p").html(maps[map]);
    $('[data-toggle="tooltip"]').tooltip();
}

function addItemToInventory(item) {

    var element = $("<div/>", {
        'class': "item item-"+item,
        'data-item': item,
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        'title': itemNames[item]
    });

    var type = null;
    if($.inArray(item, itemTypes['madenci']) != -1) {
        type = "madenci";
    } else if($.inArray(item, itemTypes['sarraf']) != -1) {
        type = "sarraf";
    } else if($.inArray(item, itemTypes['lokman']) != -1) {
        type = "lokman";
    }

    var row, dividen, top, left;
    if(type == null) {
        // Position
        row    = Math.floor(mapTotalItem/4);
        divide = mapTotalItem%4;
        top  = row * 33;
        left = divide * 33;

    } else if(type == "madenci") {
        row    = Math.floor(madenciTotalItem/4);
        divide = madenciTotalItem%4;
        top    = row * 33;
        left   = divide * 33;

        madenciTotalItem++;
    } else if(type == "sarraf") {
        row    = Math.floor(sarrafTotalItem/4);
        divide = sarrafTotalItem%4;
        top    = 66 + (row * 33);
        left   = divide * 33;

        sarrafTotalItem++;
    } else {
        row    = Math.floor(lokmanTotalItem/4);
        divide = lokmanTotalItem%4;
        top    = 134 + (row * 33);
        left   = divide * 33;

        lokmanTotalItem++;
    }

    element.css({
        top: top,
        left: left
    });

    $("#inventory").append(element);
}

function clearItems() {
    items = [];
    madenciTotalItem = 0;
    sarrafTotalItem = 0;
    lokmanTotalItem = 0;
    $("#inventory .item").remove();
    $("#map .item").remove();
}

$(".map-left").bind('click', function(){
    // Sorry for that, but I late to work...
    switch(current){
        case "eminonu":
            current = "hol";
            break;
        case "antrepo":
            current = "eminonu";
            break;
        case "labirent":
            current = "antrepo";
            break;
        case "meteor":
            current = "labirent";
            break;
        case "ada":
            current = "meteor";
            break;
        case "yeralti":
            current = "ada";
            break;
        case "hol":
            current = "yeralti";
            break;
    }

    $(".gather-tabs ul li").removeClass("active");
    $(".gather-tabs ul li a[data-target='"+current+"']").parent().addClass("active");
    loadMap(current);
});

$(".map-right").bind('click', function(){
    // Sorry for that, but I late to work...
    switch(current){
        case "eminonu":
            current = "antrepo";
            break;
        case "antrepo":
            current = "labirent";
            break;
        case "labirent":
            current = "meteor";
            break;
        case "meteor":
            current = "ada";
            break;
        case "ada":
            current = "yeralti";
            break;
        case "yeralti":
            current = "hol";
            break;
        case "hol":
            current = "eminonu";
            break;
    }

    $(".gather-tabs ul li").removeClass("active");
    $(".gather-tabs ul li a[data-target='"+current+"']").parent().addClass("active");
    loadMap(current);
});

$("#inventory").on('click', '.item', function(){
    var button = $(this);
    var item = $(this).data('item');

    if($.inArray(item, items) == -1){
        items.push(item);
        addItemToMap(item);
        button.addClass('active');
    } else {
        items.pop(item);
        removeItemFromMap(item);
        button.removeClass('active');
    }
});

function addItemToMap(item) {
    $.each(data[current][item], function(i, loc){
        var x = loc.x - 10,
            y = loc.y - 10;

        var element = $("<div/>", {
            'class': "item item-"+item,
            'data-item': item
        });

        element.css({
            top: y,
            left: x
        });

        $("#map").append(element);
    });

    refreshLabel();
}

function removeItemFromMap(item) {

    $("#map .item.item-"+item).remove();

    refreshLabel();
}

function refreshLabel() {
    if(items.length == 0) {
        $(".gather-inv p").html("Maden Seçiniz");
    } else {
        $(".gather-inv p").html(items.length+" Maden Seçtiniz");
    }
}

loadMap(current);