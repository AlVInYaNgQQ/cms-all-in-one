// const moment = require('moment');
const puppeteer = require('puppeteer');
const mkdirp = require('mkdirp');
// const csvWriter = require('./writer');

/**
 * https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v18.2.1
 */

const account = process.argv[2] || 'practice96321@gmail.com';
const password = process.argv[3] || 'practice';
const stockId = process.argv[4] || 0;
const daysUntilToday = isNaN(process.argv[5]) ? 0 : parseInt(process.argv[5]);

// (async () => 
async function run() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  // await page.goto('https://www.wantgoo.com/');
  // console.log('Home page loaded.');

  // await page.click('#aLogin');
  // console.log('Opened login window.');

  // await page.type('#idUserName', account);
  // console.log('Typed account.');

  // await page.type('#idPassword', password);
  // console.log('Typed password');

  // await page.click('#btnLogIn');
  // console.log('Clicked login button.');
  
  // await page.waitForNavigation();
  // console.log('Logged in.');

  
  let goto = await page.goto('https://www.wantgoo.com/global/sox');

  await delay(4000);
  // await page.waitForTimeout(5000);

//   console.log(goto);

  await page.screenshot({path: 'example.png', fullPage: true});
  await browser.close();
}
//)();

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}