import { Selector } from 'testcafe';

fixture("My first fixture")
    .page("https://staging.pixee.be/");

test("My First Test", async (t) => {
    const submitButton =  Selector('button').withText("Aanmelden");
    await t       
        .typeText("#email", "ikben@fout.be")
        .typeText("#password", "eenfoutpaswoord")
        .click(submitButton);
});
