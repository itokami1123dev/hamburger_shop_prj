/**
 * メニュー表一覧情報
 * 
 * @class MenuList
 * @constructor
 * @extends Backbone.Collection
 *
 */
var MenuList = Backbone.Collection.extend({

	/**
	 * メニュー表項目を明細modelとして格納
	 * 
	 * @property model
	 * @type {MenuItem}
	 */
    model: MenuItem,
    
	/**
	 * メニュー表項目の昇順ソート項目
	 *
	 * @property comparator
	 * @type {string}
	 * @default 'id'
	 */
	comparator: 'id',
	
	/**
	 * 選択中メニューの合計金額を算出
	 *
	 * @method sumPrice 
	 * @return {number} 合計金額
	 */
	sumPrice: function(){

		var sum = 0,
		selectedMenuItems = this.where({ selected:true });

		_.each( selectedMenuItems, function( model){
			sum += model.get( "price");
		});

		return sum;

	},

    /**
     * メニュー登録
     *
	 * @method createMenu
	 * @param {String} name メニュー名
	 * @param {number} price 金額 
     */
	createMenu: function(name,price){

		var menuItemData = {
			name:name,
			price:price,
			selected:false
		};

		this.create(menuItemData, {wait: true});
				
	},

});
debugger;

