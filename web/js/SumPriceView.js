
var SumPriceView = Backbone.View.extend({
    el: '#sum-price-pane',
    initialize: function(options){
        this.template = _.template( $('#' + this.el.id + '-template').html() );
        this.listenTo( this.collection, 'reset change add destroy', this.render);
    },
    render: function(){
        var menuList = this.collection;
        var price = menuList.sumPrice();
        var html = this.template( { sumPrice: price } );
        this.$el.empty()
                .html( html );
    }
});

