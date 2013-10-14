/**
* ハンバーガーメニュー各項目の仕様確認
*/
describe ("MenuItem", function() {
	
	var menuItem;

	beforeEach(function() {
		menuItem = new MenuItem();
	});

	afterEach(function() {
		menuItem.destroy();
		menuItem = null;
	});

	describe ("オブジェクト生成時", function() {
		it("初期値としてデフォルト値が設定される事", function() {
			expect(menuItem).toBeDefined();
			expect(menuItem.get("name")).toBe("");
			expect(menuItem.get("price")).toBe(0);
			expect(menuItem.get("selected")).toBe(false);
		});
	});

});
