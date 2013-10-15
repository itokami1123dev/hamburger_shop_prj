/**
* ハンバーガーメニュー各項目の仕様確認
*/
describe ("MenuItem", function() {
	
	describe( "オブジェクト生成時", function() {
		var menuItem;

		beforeEach(function() {
			menuItem = new MenuItem();
		});

		afterEach(function() {
			menuItem.destroy();
			menuItem = null;
		});

		it( "初期値としてデフォルト値が設定される事", function() {
			expect(menuItem).toBeDefined();
			expect(menuItem.get("name")).toBe("");
			expect(menuItem.get("price")).toBe(0);
			expect(menuItem.get("selected")).toBe(false);
		});
	});
	
	describe( "メニュー選択時", function(){
		var menuItem,server;
		
		beforeEach( function(){
			
			menuItem = new MenuItem({
				"id": 1,
				"name": "test",
				"price": 100,
				"selected": false
			});
			menuItem.url = "/unitTestUrl";
			
			server = sinon.fakeServer.create();
			
		});
		
		afterEach(function () { 
			server.restore(); 
			menuItem.destroy();
			menuItem = null;
		});
		
		it( "トグル選択される事", function(){
			
			expect(menuItem).toBeDefined();
			expect(menuItem.get("selected")).toBeFalsy();
						
			menuItem.toggleSelected();
			server.respond([
					200,
					{"Content-Type": "application/json"},
					'{"id":1,"name":"test","price":100,"selected":true}'
				]);
			expect(menuItem.get("selected")).toBeTruthy();
			
			
			menuItem.toggleSelected();
			server.respond([
					200,
					{"Content-Type": "application/json"},
					'{"id":1,"name":"test","price":100,"selected":false}'
				]);
			expect(menuItem.get("selected")).toBeFalsy();
			
		});
		
	});

});
