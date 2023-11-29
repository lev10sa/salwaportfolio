const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Replace 'your_website_url' with the actual URL of your website
  await page.goto('https://uncover-id.github.io/SalwaPortfolio/', { waitUntil: 'networkidle2' });

  // Adjust the file path and name as needed
  await page.pdf({ path: './output.pdf', format: 'A4' });

  await browser.close();
})();
