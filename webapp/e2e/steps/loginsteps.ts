import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/login.feature');

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

  test('The user is registered in the application', ({given,when,then}) => {
    
    let user:string;
    let password:string;

    given('A registered user', () => {
      user = "UO263611";
      password = process.env.PASSWORD1!.toString();

    });

    when('I log in to my pod', async () => {
      await page.setViewport({width: 1200, height: 1300});
      await page
      .goto("http://localhost:3000/login", {
        waitUntil: "networkidle0",
      });
      await page.waitForTimeout(2000);
      await expect(page).toMatch("Login");
      await expect(page).toClick('button', {text: 'Login'});
      await page.waitForNavigation();
      await expect(page).toFill("input[name='username']", user);
      await expect(page).toFill("input[name='password']", password);
      await expect(page).toClick('button', {text: 'Log In'});
    });

    then('I am redirected to home and then i can see the logout button', async () => {
      await page.waitForTimeout(2000);
      await expect(page).toMatch('Nike Blazer blancas');
      await page.goto("http://localhost:3000/perfil", {waitUntil: "networkidle0"}).catch(() => {});
      await expect(page).toMatch("Logout");
      await page.waitForTimeout(2000);
      //await expect(page).toMatch('Enol');
      //await expect(page).toMatch('España Asturias Localidad 1234 Calle');
    });
  })

  afterAll(async ()=>{
    browser.close()
  })

});

