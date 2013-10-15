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

});
