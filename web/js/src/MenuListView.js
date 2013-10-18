
var MenuListView = Backbone.View.extend({
    el:'#menu-table',
    initialize: function(options) {
        this.listenTo( this.collection, 'reset destroy', this.listRender);
        this.listenTo( this.collection, 'add', this.addRender);
    },
    listRender: function(){
		this.$el.empty();
        this.collection.each(this.createMenuItem,this);
    },
    createMenuItem: function(menuItem){
        var opt = {model:menuItem};
        var menuItemView = new MenuItemView(opt);
        menuItemView.createRender();
        var $itemView = menuItemView.$el;
        this.$el.append( $itemView);
    },

    addRender: function(menuItem){
        var opt = {model:menuItem};
        var menuItemView = new MenuItemView(opt);
        menuItemView.createRender();
        var $itemView = menuItemView.$el;
        $itemView.css({"opacity":0.0});
        this.$el.append( $itemView);
        $itemView.animate({"opacity":1.0}, 500);
    }

});

