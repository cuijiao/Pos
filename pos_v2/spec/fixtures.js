function loadAllItems() {
    return [
        new Item('ITEM000000', '可口可乐', '瓶', 3.00),
        new Item('ITEM000001', '雪碧', '瓶', 3.00),
        new Item('ITEM000002', '苹果', '斤', 5.50),
        new Item('ITEM000003', '荔枝', '斤', 15.00),
        new Item('ITEM000004', '电池', '个', 2.00),
        new Item('ITEM000005', '方便面', '袋', 4.50)
    ];
}

function loadPromotions() {
    return [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ])
    ]
}

function loadItemsRepo() {
    var items = loadAllItems();
    var itemsRepo = {};
    for (var i = 0; i < items.length; i++) {
        itemsRepo[items[i].barcode] = items[i];
    }
    return itemsRepo;
};

function loadPromotionsRepo() {
    var promotions = loadPromotions();
    var promotionsRepo = {};
    for (var i = 0; i < promotions.length; i++) {
        promotionsRepo[promotions[i].type] = promotions[i].barcodes;
    }
    return promotionsRepo;
};
