/**
 * ## メニュー表項目
 * 
 * ### attributes
 * - name     string型  ハンバーガー名
 * - price    number型  お値段       
 * - selected boolean型 選択フラグ    
 * 
 * @class MenuItem
 * @constructor
 */
var MenuItem = Backbone.Model.extend({
	
	/**
	 * ## 属性情報の初期化
	 * 
	 * ### attributes default value
	 * - name     : ""
	 * - price    : 0
	 * - selected : false
	 * 
	 * @method defaults
	 * @return {object} 初期値
	 */
    defaults: function(){
		return { 
			name: "",
			price: 0 ,
			selected: false
		};
    },
	
	/**
	 * ## メニュー項目のトグル選択
	 */
    toggleSelected: function(){

		var putData={"selected": !this.get("selected")};
		this.save( putData, {wait: true});
		
    }
	
});
