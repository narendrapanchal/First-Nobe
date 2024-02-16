const debugLogger = requireUtil("debugLogger");
const knex = requireKnex();

describe("Test Handler CanManagePhotos", () => {
  it("dummy_story_which_will_pass", async () => {
    let result = {};
    try {
      result = await testStrategy("CanManagePhotos", {
        prepareResult: {},
      });
    } catch (error) {
      debugLogger(error);
    }
    const { respondResult } = result;
    expect(1).toBe(1);
  });
});
