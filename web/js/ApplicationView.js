

var ApplicationView = Backbone.View.extend({
    el: '#application',
    initialize: function(options){
       this.collection = new MenuList();
       var op = { collection:this.collection};
	   this.menuNewItemView = new MenuNewItemView(op);
       this.menuListView = new MenuListView(op);
       this.sumPriceView = new SumPriceView(op);
    },
    start: function(){
       this.collection.fetch({reset: true});
    }
});

