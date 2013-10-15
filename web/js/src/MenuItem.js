/**
 * メニュー表項目情報
 * 
 * # attributes
 * - name:     string型  ハンバーガー名
 * - price:    number型  お値段       
 * - selected: boolean型 選択フラグ    
 * 
 * @class MenuItem
 * @constructor
 * @extends Backbone.Model
 *
 */
var MenuItem = Backbone.Model.extend({
	
	/**
	 * ## 属性情報の初期化
	 * 
	 * @method defaults
	 * @return {object} 初期値
	 * 
	 * - object.name: ""  
	 * - object.price: 0  
	 * - object.selected: false  
	 * 
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
	 * 
	 * @method toggleSelected
	 * 
	 */
    toggleSelected: function(){

		var putData={"selected": !this.get("selected")};
		this.save( putData, {wait: true});
		
    }
	
});
