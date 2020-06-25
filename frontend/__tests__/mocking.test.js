function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
   return new Promise((resolve, reject) => {
    //  simulate an api
    setTimeout(() => resolve (this.foods), 2000);
  });
}

  describe ('mocking learning', () => {
    it('can create a person', () => {
      const me = new Person ('Wes', ['pizza', 'burgs']);
      expect(me.name).toBe('Wes');
    });
    it('can fetch foods', async () => {
      const me = new Person ('Wes', ['pizza', 'burgs']);
      // mock the favFoods Function
      const favFoods = await me.fetchFavFoods();
      console.log(favFoods);
      expect(favFoods).toContain('pizza');
    })
  })