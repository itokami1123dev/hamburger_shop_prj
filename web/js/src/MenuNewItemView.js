
// View
var MenuNewItemView = Backbone.View.extend({
	el:'#menu-table-new-item', // <table id="menu-table-new-item"  class="menu-table" >
	initialize:function( options){ 
	},
    events: {
        "click button":"createItem"
    },
	createItem: function(){
		var $name = this.$('[data-tag-id="new-name"]');
		var $price = this.$('[data-tag-id="new-price"]');
		this.collection.createMenu( 
			$name.val(), 
			parseInt( $price.val(), 10)
		);
		$name.val("");
		$price.val("");
	}
});

