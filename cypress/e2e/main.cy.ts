/// <reference types="cypress" />

describe("Ask to mentor", () => {
  it("load the page", () => {
    cy.visit("/");
  });
  it("change the tab", () => {
    cy.visit("/");

    cy.contains("سوال از مربی‌های دوره").click();
    cy.contains("ارسال");
  });
  it("question type and question text is required", () => {
    cy.visit("/");
    cy.contains("سوال از مربی‌های دوره").click();
    cy.get("button").contains("ارسال").click();
    cy.get("span").contains("لطفا نوع مسئله را انتخاب نمایید").should("exist");
    cy.get("span").contains("لطفا متن سوال را وارد نمایید").should("exist");
  });
  it("question type and question text error disable", () => {
    cy.visit("/");
    cy.contains("سوال از مربی‌های دوره").click();
    cy.get("button").contains("ارسال").click();
    cy.get("select").select(2);
    cy.get("textarea").type("some text");
    cy.get("span")
      .contains("لطفا نوع مسئله را انتخاب نمایید")
      .should("not.exist");
    cy.get("span").contains("لطفا متن سوال را وارد نمایید").should("not.exist");
  });
  it("generate question title by ai", () => {
    cy.visit("/");
    cy.contains("سوال از مربی‌های دوره").click();
    cy.get("select").select(1);

    cy.get("textarea").type("for loop in js and python");
    cy.get("button")
      .contains("ارسال")
      .click()
      .then(() => cy.get('[name="title"]').should("not.have.value"));
  });
});
