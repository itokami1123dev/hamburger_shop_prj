// Model 
var MenuItem = Backbone.Model.extend({
    defaults:function(){
		return { 
			name: "", //:string ハンバーガー名
			price: 0 , //:number お値段
			selected: false //:boolean 選択フラグ 
		};
    },
    toggleChecked: function(){
		var saveItemDid = _.bind( this.saveItemDid, this);
		var putData={"selected": !this.get("selected")};
		this.save( putData, {success:saveItemDid});
    },
	saveItemDid:function(model, resp){
		console.log("saveItemError model=",model,' resp='+resp);
	}
});
