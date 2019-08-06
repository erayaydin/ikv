var installed = false;
var maps = [], itemLocations = {};
var defaultMap = $(".gather-tabs ul li:first-child a").data('code');
var loadedMap = null;

var elMap = $("#map");
var elMapImage = elMap.children('img');
var elMapName = $("#mapName");
var elInventory = $("#inventory");
var elTabs = $("#tabs");
var elMapLeft = $("#mapLeft");
var elMapRight = $("#mapRight");

var madenciTotalItem = 0, sarrafTotalItem = 0, lokmanTotalItem = 0, inventoryTotalItem = 0;

function loadMaps() {
    $.ajax({
        method: 'GET',
        url: Router.route('api.map.index'),
        dataType: 'JSON'
    }).done(function(data){
        $.each(data, function(i, map) {
            maps.push({
                'code': map.code,
                'name': map.name,
                'image': map.image
            });
        });

        loadMap(defaultMap);
    });
}

function loadMap(map) {
    installed = false;
    elMapImage.attr('src', "/assets/modules/gather/ui/map-placeholder.png");

    $.ajax({
        method: 'GET',
        url: Router.route('api.map.show', { 'map': map }),
        dataType: 'JSON'
    }).done(function (data) {

        elMapImage.attr('src', "/storage/"+data.map.image);
        elMapName.html(data.map.name);

        items = data.items;
        loadItems(data.items);

        installed = true;
        loadedMap = map;
    });
}

function loadItems(items) {
    $.each(items, function(item, data) {
        var elNewItem = $("<div/>", {
            'class': "item item-"+item,
            'data-item': item,
            'data-toggle': 'tooltip',
            'data-placement': 'top',
            'title': data['name']
        });

        // Position
        var row, dividen, top, left;
        switch(data['job']) {
            case "madenci":
                row    = Math.floor(madenciTotalItem/4);
                divide = madenciTotalItem%4;
                top    = row * 33;
                left   = divide * 33;

                madenciTotalItem++;
                break;

            case "sarraf":
                row    = Math.floor(sarrafTotalItem/4);
                divide = sarrafTotalItem%4;
                top    = 66 + (row * 33);
                left   = divide * 33;

                sarrafTotalItem++;
                break;

            case "lokman":
                row    = Math.floor(lokmanTotalItem/4);
                divide = lokmanTotalItem%4;
                top    = 134 + (row * 33);
                left   = divide * 33;

                lokmanTotalItem++;
                break;

            default:
                row    = Math.floor(inventoryTotalItem/4);
                divide = inventoryTotalItem%4;
                top  = row * 33;
                left = divide * 33;
                break;
        }

        elNewItem.css({
            top: top,
            left: left
        });

        elInventory.append(elNewItem);

        itemLocations[item] = [];

        $.each(data['locations'], function(i, location){
            itemLocations[item].push({
                'x': location['x'],
                'y': location['y']
            });
        });

        inventoryTotalItem++;
    });
}

function clearInventory() {
    // Fixme: elInventory
    $("#inventory .item").remove();
}

function clearMap() {
    // Fixme: elMap
    $("#map .item").remove();
}

function clearAll() {
    madenciTotalItem = 0;
    sarrafTotalItem = 0;
    lokmanTotalItem = 0;
    inventoryTotalItem = 0;

    itemlocations = {};

    clearInventory();
    clearMap();
}

function activeTab(code) {
    $("#tabs li").removeClass('active');
    $("#tabs li a[data-code='"+code+"']").parent().addClass('active');
}

$("#tabs li a").bind('click', function(){
    if(installed) {
        var code = $(this).data('code');

        activeTab(code);

        clearAll();
        loadMap(code);
    }
});

elMapLeft.bind('click', function(){
    var curIndex;
    for(curIndex=0; curIndex<maps.length; curIndex++){
        if(maps[curIndex].code == loadedMap) {
            break;
        }
    }

    var prevIndex = curIndex - 1;
    if(prevIndex == -1) {
        prevIndex = maps.length-1;
    }

    activeTab(maps[prevIndex].code);
    clearAll();
    loadMap(maps[prevIndex].code);
});

elMapRight.bind('click', function(){
    var curIndex;
    for(curIndex=0; curIndex<maps.length; curIndex++){
        if(maps[curIndex].code == loadedMap) {
            break;
        }
    }

    var nextIndex = curIndex + 1;
    if(nextIndex == maps.length) {
        nextIndex = 0;
    }

    activeTab(maps[nextIndex].code);
    clearAll();
    loadMap(maps[nextIndex].code);
});

loadMaps();