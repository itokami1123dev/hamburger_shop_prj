/**
* メニュー表一覧情報の仕様確認
*/
describe ( "MenuList", function() {

	describe ( "選択メニュー合計金額算出", function() {

		it( "格納された各モデルより選択中の合計金額を算出する事", function() {

			var menuList = new MenuList([
				{ name:"a", price: 100, selected: true},  // o
				{ name:"b", price: 200, selected: false}, // x
				{ name:"c", price: 400, selected: true},  // o
			]);

			expect( menuList.sumPrice()).toBe( 500);

		});
		
	});

	describe( "新規メニュー表登録", function() {

		it( "サーバより返却された名称と金額が設定されること", function(){
			
			server = sinon.fakeServer.create();

			var menuList = new MenuList();
			menuList.url = "/unitTestUrl";
			
			server.respondWith([
					200,
					{"Content-Type": "application/json"},
					'{"id":123,"name":"sevNam","price":1005,"selected":false}'
				]);
			menuList.createMenu( 'test', 1000);
			server.respond();

			expect( menuList.size()).toBe( 1);

			var model = menuList.get(123);
			expect( model.get("name")  ).toBe( "sevNam");
			expect( model.get("price") ).toBe( 1005);

		})

	});


});
