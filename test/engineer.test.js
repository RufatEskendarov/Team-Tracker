//variables to include jest and the engineer.js file
const { TestWatcher } = require("jest");
const Engineer = require("../lib/Engineer");

//checks to see that the engineers role returns the correct answer
test("check engineer role", () => {
  const engineer = new Engineer(
    "Rufat",
    "1234",
    "test2@test.com",
    "RufatEskendarov"
  );
  expect(engineer.getRole()).toBe("Engineer");
});

//checks to see if all other engineer data returns correctly
test("engineer class", () => {
  const engineer = new Engineer(
    "Rufat",
    "1234",
    "test2@test.com",
    "RufatEskendarov"
  );
  expect(engineer.name).toBe("Rufat");
  expect(engineer.id).toBe("1234");
  expect(engineer.email).toBe("test2@test.com");
  expect(engineer.gitHub).toBe("RufatEskendarov");
});
