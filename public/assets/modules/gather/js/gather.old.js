var currentMap = "eminonu";

var visible = [];

var totalItem = 0;
$.each(data[currentMap], function(item, locations){
    var element = $('<div/>', {
        'class': 'item item-'+item
    });

    element.data('item', item);

    // Position
    var row    = Math.floor(totalItem/4);
    var divide = totalItem%4;
    var top  = 183 + (row * 33);
    var left = 10 + (divide * 34);

    element.css({
        top: top,
        left: left
    });

    $("#inventory").append(element);

    totalItem++;
});

$(document).on('click', '#inventory .item', function(){
    var item = $(this).data('item');
    if($.inArray(item, visible) != -1){
        visible.splice( $.inArray(item, visible), 1 );

        removeItems(item);
    } else {
        visible.push(item);

        addItems(item);
    }
});

function showMap() {
    $.each(visible, function(id, item){
        addItems(item);
    });
}

function removeItems(item) {
    $("#map .item.item-"+item).remove();
}

function addItems(item) {
    var locations = data[currentMap][item];

    $.each(locations, function(i, location){
        var element = $('<div/>', {
            'class': 'item item-'+item
        });

        element.data('item', item);

        element.css({
            top: location.y,
            left: location.x
        });

        $("#map").append(element);
    });
}