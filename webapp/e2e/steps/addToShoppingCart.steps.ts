import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/addToShoppingCart.feature');

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

  test('The user is not registered in the site, but the user can add a product to the shopping cart', ({given,when,then}) => {
    
    let productName:string;

    given('An unregistered user', () => {
      productName = "Nike Blazer";
    });

    when('I select a certain product and add it to the shopping cart', async () => {
      await page.setViewport({width: 1200, height: 1300});
      await page
      .goto("http://localhost:3000/product/Nike%20Blazer", {
        waitUntil: "networkidle0",
      });
      await page.waitForTimeout(2000);
      await expect(page).toClick('button[name="AddCarrito"]');
      await page.goto("http://localhost:3000/carrito", {waitUntil: "networkidle0"}).catch(() => {});
    });

    then('The product should be in the shopping cart', async () => {
      await page.waitForTimeout(2000);
      await expect(page).toMatch('Carrito de la compra');
      await expect(page).toMatch('Nike Blazer');
      await expect(page).toMatch('New model of Nike Blazer');
      await expect(page).toMatch('97.8 €');
    });
  })

  afterAll(async ()=>{
    browser.close()
  })

});

