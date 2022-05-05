import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/buyProduct.feature');

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

  test('The user is registered in the site', ({given,when,then}) => {
    
    let user:string;
    let password:string;
    let card:string;
    let expDate:string;
    let cvc:string;
    given('A registered user', () => {
      user = "UO263611";
      password = process.env.PASSWORD1!.toString();
      card = "12340";
      expDate = "02/24";
      cvc = "123";
    });

    when('I select a certain product and add it to the shopping cart and click in the buy product button and fill the payment form', async () => {
      await page.setViewport({width: 1200, height: 1300});
      await page
      .goto("http://localhost:3000/login", {
        waitUntil: "networkidle0",
      })
      await page.waitForTimeout(2000);
      await expect(page).toMatch("Login");
      await expect(page).toClick('button', {text: 'Login'});
      await page.waitForNavigation();
      await expect(page).toFill("input[name='username']", user);
      await expect(page).toFill("input[name='password']", password);
      await expect(page).toClick('button', {text: 'Log In'});
      await page.waitForTimeout(2000);
      await page
      .goto("http://localhost:3000/product/Nike%20Blazer%20blancas", {
        waitUntil: "networkidle0",
      }).catch(() => {});
      await page.waitForTimeout(2000);
      await expect(page).toClick('button', {text: '34'});
      await expect(page).toClick('button', {text: 'Añadir al carrito'});
      await page
      .goto("http://localhost:3000/carrito", {
        waitUntil: "networkidle0",
      }).catch(() => {});
      await page.waitForTimeout(2000);
      await expect(page).toClick('button', {text: 'Comprar'});
      await page.waitForTimeout(5000);
      await expect(page).toFill("input[name='cardNumber']", card);
      await expect(page).toFill("input[name='expDate']", expDate);
      await expect(page).toFill("input[name='cvc']", cvc);
      await page.waitForTimeout(10000);
      await expect(page).toClick('button', {text: 'Pagar'});
      await page.waitForTimeout(10000);
    });

    then('The product should be add to the my shipments menu', async () => {
      await page.goto("http://localhost:3000/pedidos", {waitUntil: "networkidle0"}).catch(() => {});
      await page.waitForTimeout(5000);
      await expect(page).toClick('button', {text: 'Actualizar'});
      await page.waitForTimeout(5000);
      await expect(page).toMatch('enol1999@email.com');
    });
  })

  afterAll(async ()=>{
    browser.close()
  })

});
