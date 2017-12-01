var expect = chai.expect;
describe("dog.getDogAgeInHumanYears()", function() {
  it("should be a function", function() {
    return expect(dog.getDogAgeInHumanYears).to.be.a("function");
  });
  it("should return 49 for   name: Abby, age: 7 ,legs: 4", function() {
    return expect(dog.getDogAgeInHumanYears()).to.equal(49);
  });
  it('should return 21 for age: 3, name: "Jenny"', function() {
    return expect(
      dog.getDogAgeInHumanYears.call({ age: 3, name: "Jenny" })
    ).to.equal(21);
  });
  it('should return 70 for age: 10, name: "Rufus"', function() {
    return expect(
      dog.getDogAgeInHumanYears.call({ age: 10, name: "Rufus" })
    ).to.equal(70);
  });
  it('should return 7 for age: 1, name: "Mia"', function() {
    return expect(
      dog.getDogAgeInHumanYears.call({ age: 1, name: "Mia" })
    ).to.equal(7);
  });
});
describe("someGirl.isOlderThan()", function() {
  it("should be a function", function() {
    return expect(someGirl.isOlderThan).to.be.a("function");
  });
  it("should return false for 21", function() {
    return expect(someGirl.isOlderThan(21)).to.equal(false);
  });
  it("should return false for 44", function() {
    return expect(someGirl.isOlderThan(44)).to.equal(false);
  });
  it("should return true for 14", function() {
    return expect(someGirl.isOlderThan(14)).to.equal(true);
  });
  it("should return true for 8", function() {
    return expect(someGirl.isOlderThan(8)).to.equal(true);
  });
  it("should return false for 20", function() {
    return expect(someGirl.isOlderThan(20)).to.equal(false);
  });
});
describe("someGuy.calculateAnnualInterest()", function() {
  it("should be a function", function() {
    return expect(someGuy.calculateAnnualInterest).to.be.a("function");
  });
  it("should return 4 for 40", function() {
    return expect(someGuy.calculateAnnualInterest(40)).to.equal(4);
  });
  it("should return 10 for 100", function() {
    return expect(someGuy.calculateAnnualInterest(100)).to.equal(10);
  });
  it("should return 300 for 3000", function() {
    return expect(someGuy.calculateAnnualInterest(3000)).to.equal(300);
  });
  describe("someGuy.calculateAnnualInterest.call()", function() {
    it("should return 20 for  creditScore = 55", function() {
      return expect(
        someGuy.calculateAnnualInterest.call({ creditScore: 55 }, 100)
      ).to.equal(20);
    });
    it("should return 10 for  creditScore = 205", function() {
      return expect(
        someGuy.calculateAnnualInterest.call({ creditScore: 205 }, 100)
      ).to.equal(10);
    });
    it("should return 5 for  creditScore = 705", function() {
      return expect(
        someGuy.calculateAnnualInterest.call({ creditScore: 705 }, 100)
      ).to.equal(5);
    });
  });
});
describe("getKeys()", function() {
  it("should be a function", function() {
    return expect(getKeys).to.be.a("function");
  });
  it("should return 4 for output_1.length", function() {
    return expect(output_1.length).to.equal(4);
  });
  it('should return >=0 for output_1.indexOf("age")', function() {
    return expect(output_1.indexOf("age")).to.equal(2);
  });
  it('should return -1 for output_1.indexOf("Doe")', function() {
    return expect(output_1.indexOf("Doe")).to.equal(-1);
  });
  it('should return -1 for output_2.indexOf("age")', function() {
    return expect(output_2.indexOf("age")).to.equal(-1);
  });
  it('should return >=0 for output_2.indexOf("favoriteFruit")', function() {
    return expect(output_2.indexOf("favoriteFruit")).to.equal(3);
  });
  it('should return >=0 for output_2.indexOf("company")', function() {
    return expect(output_2.indexOf("company")).to.equal(4);
  });
});
describe("reverseObject()", function() {
  it("should be a function", function() {
    return expect(reverseObject).to.be.a("function");
  });
  describe("reversedObj1 = reverseObject(object1)", function() {
    it('should return "name" for Oakridge', function() {
      return expect(reversedObj1.Oakridge).to.equal("name");
    });
    it('should return "apartmentNo" for  2b', function() {
      return expect(reversedObj1["2b"]).to.equal("apartmentNo");
    });
    it('should return "structuralIntegrity" for failing', function() {
      return expect(reversedObj1.failing).to.equal("structuralIntegrity");
    });
  });
  describe("reversedObj2 = reverseObject(object2)", function() {
    it("should return 'description' for dog", function() {
      return expect(reversedObj2.dog).to.equal("description");
    });
    it("should return 'gender' for female", function() {
      return expect(reversedObj2.female).to.equal("gender");
    });
    it("should return 'name' for Abby", function() {
      return expect(reversedObj2.Abby).to.equal("name");
    });
  });
  describe("reversedObj3 = reverseObject(object3)", function() {
    it('should return "make" for Ford', function() {
      return expect(reversedObj3.Ford).to.equal("make");
    });
    it("should return 'license' for N89LP2", function() {
      return expect(reversedObj3["N89LP2"]).to.equal("license");
    });
    it("should return 'year' for 1921", function() {
      return expect(reversedObj3["1921"]).to.equal("year");
    });
  });
});
describe("countTheHoles()", function() {
  it("should be a function", function() {
    return expect(countTheHoles).to.be.a("function");
  });
  it("should return 2 for 301923", function() {
    return expect(countTheHoles(301923)).to.equal(2);
  });
  it("should return 6 for 880216", function() {
    return expect(countTheHoles(880216)).to.equal(6);
  });
  it("should return 4 for 40442", function() {
    return expect(countTheHoles(40442)).to.equal(4);
  });
  it("should return 5 for 808", function() {
    return expect(countTheHoles(808)).to.equal(5);
  });
});
