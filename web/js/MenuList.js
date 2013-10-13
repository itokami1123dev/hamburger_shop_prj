
var MenuList = Backbone.Collection.extend({
    model: MenuItem,
    url: 'webresources/com.example.hum.entity.menuitems',
    sumPrice: function(){
        var checkedMenuItems = this.where({ selected:true });
        var sum = 0;
        _.each(checkedMenuItems,function(model){
            sum += model.get("price");
        });
        return sum;
    },
	createMenu: function(name,price){
		var menuItemData = {
			name:name,
			price:price,
			selected:false
		};
		var createDid = _.bind( this.createDid, this);
		this.create(menuItemData,{ success:createDid});
	},
	createDid: function(model, resp){
		console.log("createDid model=",model,' resp='+resp);
	}
});

