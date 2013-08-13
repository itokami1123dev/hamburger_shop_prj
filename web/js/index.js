// <% %> 書式を {% %}書式に変更
_.templateSettings = {
  evaluate: /\{%(.+?)%\}/g,
  interpolate: /\{\{(.+?)\}\}/g,
  escape: /\{%-(.+?)%\}/g
};

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
		var saveItemError = _.bind( this.saveItemError, this);
		var putData={"selected": !this.get("selected")};
		this.save( putData, {success:saveItemDid,error: saveItemError});
    },
	saveItemDid:function(model, resp){
		console.log("saveItemError model=",model,' resp='+resp);
	},
	saveItemError: function(model, resp){ 
		console.log("createItemError model=",model,' resp='+resp);
	}
});

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
		var createError = _.bind( this.createError, this);
		this.create(menuItemData,{ success:createDid, error:createError });
	},
	createDid: function(model, resp){
		console.log("createDid model=",model,' resp='+resp);
	},
	createError: function(model, resp){ 
		console.log("createError model=",model,' resp='+resp);
	}
});

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
var MenuListView = Backbone.View.extend({
    el:'#menu-table',
    initialize: function(options) {
        this.listenTo( this.collection, 'reset'  , this.listRender);
        this.listenTo( this.collection, 'add'    , this.listRender);
		this.listenTo( this.collection, 'destroy', this.listRender);
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

var SumPriceView = Backbone.View.extend({
    el: '#sum-price-pane',
    initialize: function(options){
        this.template = _.template( $('#' + this.el.id + '-template').html() );
        this.listenTo( this.collection, 'reset', this.render);
        this.listenTo( this.collection, 'change', this.render);
        this.listenTo( this.collection, 'add', this.render);
		this.listenTo( this.collection, 'destroy', this.render);
    },
    render: function(){
        var menuList = this.collection;
        var price = menuList.sumPrice();
        var html = this.template( { sumPrice: price } );
        this.$el.empty()
                .html( html );
    }
});

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

$(function(){
    (new ApplicationView()).start();
});
