
// View
var MenuNewItemView = Backbone.View.extend({
	el:'#menu-table-new-item', // <table id="menu-table-new-item"  class="menu-table" >
	initialize:function( options){ 
	},
    events: {
        "keypress": "keypressHandler",
        "click button":"createItem"
    },
    keypressHandler: function(event){
    	var KEY_ENTER = 13;
        if ( event.keyCode== KEY_ENTER ){
        	var $target = $(event.target);
        	if ( $target.data("tagId")==="new-price" ){
        		this.createItem(); 

        	}else{
				this.$('[data-tag-id="new-price"]').focus();
        	}
        }
    },
	createItem: function(){
		var $name = this.$('[data-tag-id="new-name"]');
		var $price = this.$('[data-tag-id="new-price"]');

		if ( $name.val().length === 0 ){ return }
		if ( $price.val().length === 0 ){ return }
		if ( !isFinite($price.val()) ){ return }

		this.collection.createMenu( 
			$name.val(), 
			parseInt( $price.val(), 10)
		);
		$name.val("").focus();
		$price.val("");
	}
});

