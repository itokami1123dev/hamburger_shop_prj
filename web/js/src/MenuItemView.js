
var MenuItemView = Backbone.View.extend({
    tagName: 'tr', //:<tr></tr>
    initialize: function( options){
        var menuItem = this.model; //:MenuItem
        this.listenTo( menuItem, 'change', this.updateRender);
    },
    createRender: function(){
        var menuItem = this.model; //:MenuItem
        var $chk = $('<input type="checkbox" />');
        var name = menuItem.get("name");
        var price = menuItem.get("price");
        var $delBtn = $('<button>削除</button>');
        this.$el
           .append($('<td>').append($chk))
           .append($('<td>').text(name))
           .append($('<td>').text(price))
           .append($('<td>').append($delBtn));
   		
		this.updateRender();
    },
    events: {
        "click":"onClick_menuItem",
		"click button":"onClick_DeleteBtn"
    },
    onClick_menuItem: function(event){
        var menuItem = this.model;
        menuItem.toggleChecked();
    },
    onClick_DeleteBtn: function(event){
		event.stopPropagation();
		this.model.destroy();
    },
    updateRender:function (){
        var menuItem = this.model;
        var $chk = this.$('input[type="checkbox"]');
        var checked = menuItem.get("selected");
        $chk.prop('checked',checked);
        if ( checked ){
            this.$el.addClass('on');
        }else{
            this.$el.removeClass('on');
        }
            
    }
});

