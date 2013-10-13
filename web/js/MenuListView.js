
var MenuListView = Backbone.View.extend({
    el:'#menu-table',
    initialize: function(options) {
        this.listenTo( this.collection, 'reset add destroy', this.listRender);
    },
    listRender: function(){
		this.$el.empty();
        this.collection.each(this.createMenuItem,this);
    },
    createMenuItem: function(menuItem){
        var opt = {model:menuItem};
        var menuItemView = new MenuItemView(opt);
        menuItemView.createRender();
        this.$el.append( menuItemView.$el);
    }
});

