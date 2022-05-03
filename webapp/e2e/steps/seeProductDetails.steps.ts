import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/seeProductDetails.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  jest.setTimeout(100000);
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('User is in home view', ({given,when,then}) => {
    
    let productName:string;

    given('An unregistered user in the home view', () => {
      productName = "Nike Blazer";
    });

    when('I click in a certain product', async () => {
      await page.setViewport({width: 1200, height: 1300});
      await page
      .goto("http://localhost:3000/product/Nike%20Blazer", {
        waitUntil: "networkidle0",
      }).catch(() => {});
    });

    then('I can see the details of that product', async () => {
      await page.waitForTimeout(1500);
      await expect(page).toMatch('Nike Blazer');
      await expect(page).toMatch('New model of Nike Blazer');
      await expect(page).toMatch('97.8 €');
    });
  })

  afterAll(async ()=>{
    browser.close()
  })

});

