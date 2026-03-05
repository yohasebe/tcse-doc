/**
 * TCSE Documentation Screenshot Automation
 *
 * Prerequisites:
 *   - TCSE server running at http://localhost:8080/tcse
 *   - npm install puppeteer (in this directory)
 *
 * Usage:
 *   node take-screenshots.mjs            # Run all scenarios
 *   node take-screenshots.mjs --group searching-for-words
 *   node take-screenshots.mjs --list     # List available groups
 *
 * Actual element IDs (from index.erb / main.js):
 *   #text              - Search input
 *   #execute           - Search button
 *   #if_advanced       - Advanced search checkbox
 *   #if_talk           - Talk info search checkbox
 *   #trans_selector    - Translation language select (name="translation")
 *   #lang_en / #lang_tr - Search target radio buttons (name="language")
 *   #allow_en_only     - Include English only checkbox
 *   #expanded          - Use expanded segments checkbox
 *   #list_all          - List all talks button
 *   #feeling_lucky     - I'm feeling lucky button
 *   #kwic_toggle       - KWIC toggle button
 *   #if_earlier        - Play video earlier checkbox
 *   #if_stop           - Stop automatically checkbox
 *   .talk_play         - Play icons (.glyphicon-play)
 *   .talk_kw           - Keywords icons (.glyphicon-tags)
 *   .talk_segments     - Full text icons (.glyphicon-align-justify)
 *   .talk_copy         - Clip icons (.glyphicon-paperclip)
 *   .talk_id           - Talk ID spans
 *   .t_id              - Talk title spans
 *   .target            - Segment text (clickable for syntactic info)
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'http://localhost:8080/tcse';
const DOCS_DIR = path.join(__dirname, '..', 'docs');

const VIEWPORT_DESKTOP = { width: 1280, height: 900, deviceScaleFactor: 2 };
const VIEWPORT_MOBILE = { width: 375, height: 812, deviceScaleFactor: 2 };

// Helper: wait for network idle
const waitForIdle = async (page, timeout = 5000) => {
  try {
    await page.waitForNetworkIdle({ idleTime: 500, timeout });
  } catch {
    // timeout is ok
  }
};

// Helper: save screenshot
const save = async (page, group, filename, options = {}) => {
  const dir = path.join(DOCS_DIR, group, 'images');
  fs.mkdirSync(dir, { recursive: true });
  const filepath = path.join(dir, filename);

  if (options.element) {
    const el = await page.$(options.element);
    if (el) {
      await el.screenshot({ path: filepath });
      console.log(`  Saved: ${group}/images/${filename} (element)`);
      return;
    }
  }

  await page.screenshot({
    path: filepath,
    fullPage: options.fullPage || false,
  });
  console.log(`  Saved: ${group}/images/${filename}`);
};

// Helper: navigate to English main page
const goHome = async (page) => {
  await page.goto(`${BASE_URL}/en`, { waitUntil: 'networkidle2' });
  await waitForIdle(page);
};

// Helper: type into search box (clears first)
const typeSearch = async (page, query) => {
  await page.evaluate(() => { document.querySelector('#text').value = ''; });
  await page.type('#text', query, { delay: 20 });
};

// Helper: click search and wait for results
const clickSearch = async (page, waitMs = 4000) => {
  await page.click('#execute');
  await new Promise(r => setTimeout(r, waitMs));
  await waitForIdle(page);
};

// Helper: perform a full search from scratch
const doSearch = async (page, query, options = {}) => {
  await goHome(page);

  if (options.translation) {
    await page.select('#trans_selector', options.translation);
    await new Promise(r => setTimeout(r, 300));
  }

  if (options.searchTargetTr) {
    await page.click('#lang_tr');
    await new Promise(r => setTimeout(r, 200));
  }

  if (options.advanced) {
    const checked = await page.$eval('#if_advanced', el => el.checked);
    if (!checked) await page.click('#if_advanced');
  }

  if (options.talkInfo) {
    const checked = await page.$eval('#if_talk', el => el.checked);
    if (!checked) await page.click('#if_talk');
  }

  if (options.uncheckEnOnly) {
    const checked = await page.$eval('#allow_en_only', el => el.checked);
    if (checked) await page.click('#allow_en_only');
  }

  if (options.uncheckExpanded) {
    const checked = await page.$eval('#expanded', el => el.checked);
    if (checked) await page.click('#expanded');
  }

  if (options.checkExpanded) {
    const checked = await page.$eval('#expanded', el => el.checked);
    if (!checked) await page.click('#expanded');
  }

  await typeSearch(page, query);
  await clickSearch(page);
};

// Helper: wait for selector with fallback
const waitFor = async (page, selector, timeout = 5000) => {
  try {
    await page.waitForSelector(selector, { visible: true, timeout });
    return true;
  } catch {
    return false;
  }
};

// ============================================================
// SCENARIO DEFINITIONS
// ============================================================

const scenarios = {
  // -----------------------------------------------------------
  // SEARCHING FOR WORDS
  // -----------------------------------------------------------
  'searching-for-words': async (page) => {
    const G = 'searching-for-words';

    // 01: Main page (input panel)
    console.log('  [1/13] Input panel...');
    await goHome(page);
    await save(page, G, '01.png');

    // 02: Basic search results
    console.log('  [2/13] Basic search results...');
    await doSearch(page, 'important');
    await save(page, G, '02.png');

    // 03: Show translation - input panel
    console.log('  [3/13] Show translation input...');
    await goHome(page);
    await page.select('#trans_selector', 'Japanese');
    await new Promise(r => setTimeout(r, 300));
    // Uncheck "Include English only talks"
    const enOnlyChecked = await page.$eval('#allow_en_only', el => el.checked);
    if (enOnlyChecked) await page.click('#allow_en_only');
    await typeSearch(page, 'important');
    await save(page, G, '03.png');

    // 04: Show translation - results
    console.log('  [4/13] Show translation results...');
    await clickSearch(page);
    await save(page, G, '04.png');

    // 05: Search in translation - input
    console.log('  [5/13] Search in translation input...');
    await goHome(page);
    await page.select('#trans_selector', 'Japanese');
    await new Promise(r => setTimeout(r, 300));
    await page.click('#lang_tr');
    await new Promise(r => setTimeout(r, 200));
    await typeSearch(page, '大切');
    await save(page, G, '05.png');

    // 06: Search in translation - results
    console.log('  [6/13] Search in translation results...');
    await clickSearch(page);
    await save(page, G, '06.png');

    // 07: Advanced search - input
    console.log('  [7/13] Advanced search input...');
    await goHome(page);
    const advChecked = await page.$eval('#if_advanced', el => el.checked);
    if (!advChecked) await page.click('#if_advanced');
    await typeSearch(page, '[help]{v} {p} {v}');
    await save(page, G, '07.png');

    // 08: Advanced search - results
    console.log('  [8/13] Advanced search results...');
    await clickSearch(page, 6000);
    await save(page, G, '08.png');

    // 09: KWIC toggle button (after basic search)
    console.log('  [9/13] KWIC toggle...');
    await doSearch(page, 'important');
    // KWIC button should now be visible
    await save(page, G, '09.png');

    // 10: KWIC concordance view
    console.log('  [10/13] KWIC concordance view...');
    const kwicFound = await waitFor(page, '#kwic_toggle', 3000);
    if (kwicFound) {
      await page.click('#kwic_toggle');
      await new Promise(r => setTimeout(r, 1500));
    }
    await save(page, G, '10.png');

    // 11: NER search - input
    console.log('  [11/13] NER search input...');
    await goHome(page);
    const advChecked2 = await page.$eval('#if_advanced', el => el.checked);
    if (!advChecked2) await page.click('#if_advanced');
    await typeSearch(page, '%PERSON said');
    await save(page, G, '11.png');

    // 12: NER search - results
    console.log('  [12/13] NER search results...');
    await clickSearch(page, 6000);
    await save(page, G, '12.png');

    // 13: Video type filter area
    console.log('  [13/13] Video type filter...');
    await goHome(page);
    await page.evaluate(() => {
      const el = document.querySelector('#vd_type_table');
      if (el) el.scrollIntoView({ block: 'center' });
    });
    await new Promise(r => setTimeout(r, 300));
    await save(page, G, '13.png');
  },

  // -----------------------------------------------------------
  // FINDING TALKS
  // -----------------------------------------------------------
  'finding-talks': async (page) => {
    const G = 'finding-talks';

    // 01: Talk info search - input
    console.log('  [1/9] Talk info search input...');
    await goHome(page);
    const tiChecked = await page.$eval('#if_talk', el => el.checked);
    if (!tiChecked) await page.click('#if_talk');
    await typeSearch(page, 'climate change');
    await save(page, G, '01.png');

    // 02: Talk info search - results
    console.log('  [2/9] Talk info search results...');
    await clickSearch(page);
    await save(page, G, '02.png');

    // 03: Translated talk info - input
    console.log('  [3/9] Translated talk info input...');
    await goHome(page);
    await page.select('#trans_selector', 'Japanese');
    await new Promise(r => setTimeout(r, 300));
    await page.click('#lang_tr');
    await new Promise(r => setTimeout(r, 200));
    const tiChecked2 = await page.$eval('#if_talk', el => el.checked);
    if (!tiChecked2) await page.click('#if_talk');
    await typeSearch(page, '気候変動');
    await save(page, G, '03.png');

    // 04: Translated talk info - results
    console.log('  [4/9] Translated talk info results...');
    await clickSearch(page);
    await save(page, G, '04.png');

    // 05: List all talks - button
    console.log('  [5/9] List all talks button...');
    await goHome(page);
    await save(page, G, '05.png');

    // 06: List all talks - results
    console.log('  [6/9] List all talks results...');
    await page.click('#list_all');
    await new Promise(r => setTimeout(r, 4000));
    await waitForIdle(page);
    await save(page, G, '06.png');

    // 07: Keywords icon in search results
    console.log('  [7/9] Keywords icon...');
    await doSearch(page, 'education');
    await save(page, G, '07.png');

    // 08: Click keywords icon -> keywords panel
    console.log('  [8/9] Keywords panel...');
    const kwExists = await waitFor(page, '.talk_kw', 3000);
    if (kwExists) {
      await page.click('.talk_kw');
      await new Promise(r => setTimeout(r, 3000));
      await waitForIdle(page);
    }
    await save(page, G, '08.png');

    // 09: Similar talks (lower part of keywords panel)
    console.log('  [9/9] Similar talks...');
    await page.evaluate(() => window.scrollBy(0, 400));
    await new Promise(r => setTimeout(r, 500));
    await save(page, G, '09.png');
  },

  // -----------------------------------------------------------
  // OBTAINING INFORMATION ABOUT TALKS
  // -----------------------------------------------------------
  'obtaining-information-about-talks': async (page) => {
    const G = 'obtaining-information-about-talks';

    // 01: Search results with talk ID / title clickable
    console.log('  [1/18] Search results...');
    await doSearch(page, 'education');
    await save(page, G, '01.png');

    // 02: Talk info modal (click on .talk_id)
    console.log('  [2/18] Talk info modal...');
    const tidExists = await waitFor(page, '.talk_id', 3000);
    if (tidExists) {
      await page.click('.talk_id');
      await new Promise(r => setTimeout(r, 3000));
      await waitForIdle(page);
    }
    await save(page, G, '02.png');

    // Close modal
    await page.evaluate(() => {
      const modal = document.querySelector('#modal_info_panel');
      if (modal) $(modal).modal('hide');
    });
    await new Promise(r => setTimeout(r, 500));

    // 03: Keywords icon visible
    console.log('  [3/18] Keywords icon...');
    await save(page, G, '03.png');

    // 04: Click keywords icon
    console.log('  [4/18] Keywords panel (top)...');
    const kwExists = await waitFor(page, '.talk_kw', 3000);
    if (kwExists) {
      await page.click('.talk_kw');
      await new Promise(r => setTimeout(r, 3000));
      await waitForIdle(page);
    }
    await save(page, G, '04.png');

    // 05: Keywords panel (scroll to see similar talks)
    console.log('  [5/18] Keywords panel (similar talks)...');
    await page.evaluate(() => window.scrollBy(0, 400));
    await new Promise(r => setTimeout(r, 500));
    await save(page, G, '05.png');

    // 06: Full transcript - click list icon
    console.log('  [6/18] Full transcript icon...');
    await doSearch(page, 'education');
    await save(page, G, '06.png');

    // 07: Full transcript view (opens in new window - screenshot main page)
    console.log('  [7/18] Full transcript (note: opens in new window)...');
    // The glyphicon-align-justify opens a new window, so we screenshot the results
    await save(page, G, '07.png');

    // 08: Segment location info
    console.log('  [8/18] Segment location...');
    await save(page, G, '08.png');

    // 09: Expanded segment option
    console.log('  [9/18] Expanded segment option...');
    await goHome(page);
    await page.evaluate(() => {
      const el = document.querySelector('#expanded');
      if (el) el.scrollIntoView({ block: 'center' });
    });
    await new Promise(r => setTimeout(r, 300));
    await save(page, G, '09.png');

    // 10: Normal segment mode results
    console.log('  [10/18] Normal segment results...');
    await doSearch(page, 'important', { uncheckExpanded: true });
    await save(page, G, '10.png');

    // 11: Expanded segment mode results
    console.log('  [11/18] Expanded segment results...');
    await doSearch(page, 'important', { checkExpanded: true });
    await save(page, G, '11.png');

    // 12: Syntactic info - where to click
    console.log('  [12/18] Syntactic info - click target...');
    await doSearch(page, 'education');
    await save(page, G, '12.png');

    // 13: Syntactic info panel (click on .target segment text)
    console.log('  [13/18] Syntactic info panel...');
    const targetExists = await waitFor(page, '.target', 3000);
    if (targetExists) {
      await page.click('.target');
      await new Promise(r => setTimeout(r, 3000));
      await waitForIdle(page);
    }
    await save(page, G, '13.png');

    // 14: Text highlight controls (opens in full text window)
    console.log('  [14/18] Text highlight (note: feature in full-text window)...');
    await doSearch(page, 'education');
    await save(page, G, '14.png');

    // 15: Highlighted transcript
    console.log('  [15/18] Highlighted transcript (placeholder)...');
    await save(page, G, '15.png');

    // 16-18: Translation of transcripts
    console.log('  [16/18] Search with translation...');
    await doSearch(page, 'education', { translation: 'Japanese' });
    await save(page, G, '16.png');

    console.log('  [17/18] List icon with translation...');
    await save(page, G, '17.png');

    console.log('  [18/18] Translation results...');
    await save(page, G, '18.png');
  },

  // -----------------------------------------------------------
  // PLAYING VIDEO
  // -----------------------------------------------------------
  'playing-video': async (page) => {
    const G = 'playing-video';

    // 01: Play button in results
    console.log('  [1/15] Play button in results...');
    await doSearch(page, 'education');
    await save(page, G, '01.png');

    // 02: Video window (opens in popup - we capture the search results page with play icon)
    console.log('  [2/15] Video window (manual: opens in popup)...');
    await save(page, G, '02.png');

    // 03: Translation dropdown for video
    console.log('  [3/15] Translation for video...');
    await goHome(page);
    await page.select('#trans_selector', 'Japanese');
    await new Promise(r => setTimeout(r, 300));
    await typeSearch(page, 'education');
    await save(page, G, '03.png');

    // 04: Video with translation (manual screenshot)
    console.log('  [4/15] Video with translation (manual)...');
    await clickSearch(page);
    await save(page, G, '04.png');

    // 05: Fullscreen icon area
    console.log('  [5/15] Fullscreen icon...');
    await save(page, G, '05.png');

    // 06-07: Normal / Fullscreen modes (manual video screenshots)
    console.log('  [6/15] Normal mode (manual)...');
    await save(page, G, '06.png');
    console.log('  [7/15] Fullscreen mode (manual)...');
    await save(page, G, '07.png');

    // 08: I'm feeling lucky button
    console.log('  [8/15] I\'m feeling lucky...');
    await goHome(page);
    await save(page, G, '08.png');

    // 09: Random play (in video window - placeholder)
    console.log('  [9/15] Random play (manual)...');
    await save(page, G, '09.png');

    // 10: Player controls (manual)
    console.log('  [10/15] Player controls (manual)...');
    await save(page, G, '10.png');

    // 11: Stop automatically option
    console.log('  [11/15] Stop automatically...');
    await goHome(page);
    await page.evaluate(() => {
      const el = document.querySelector('#if_stop');
      if (el) el.scrollIntoView({ block: 'center' });
    });
    await new Promise(r => setTimeout(r, 300));
    await save(page, G, '11.png');

    // 12: Play earlier option
    console.log('  [12/15] Play earlier...');
    await save(page, G, '12.png');

    // 13: Adjust button (visible in search results)
    console.log('  [13/15] Adjust button...');
    await doSearch(page, 'education');
    await save(page, G, '13.png');

    // 14: Mobile portrait
    console.log('  [14/15] Mobile portrait...');
    await page.setViewport(VIEWPORT_MOBILE);
    await goHome(page);
    await save(page, G, '14.png', { fullPage: true });

    // 15: Mobile landscape
    console.log('  [15/15] Mobile landscape...');
    await page.setViewport({ width: 812, height: 375, deviceScaleFactor: 2 });
    await goHome(page);
    await save(page, G, '15.png', { fullPage: true });

    // Reset viewport
    await page.setViewport(VIEWPORT_DESKTOP);

    console.log('  NOTE: Screenshots 02, 04-07, 09-10, 16-21 need manual video captures');
  },

  // -----------------------------------------------------------
  // USING TCSE FOR LANGUAGE LEARNING AND EDUCATION
  // -----------------------------------------------------------
  'using-tcse-for-language-learning-and-education': async (page) => {
    const G = 'using-tcse-for-language-learning-and-education';

    // 01: Clip icon in search results
    console.log('  [1/12] Segment URL clip icon...');
    await doSearch(page, 'education');
    await save(page, G, '01.png');

    // 02: Clip URL popup
    console.log('  [2/12] Segment URL popup...');
    const clipExists = await waitFor(page, '.glyphicon-paperclip', 3000);
    if (clipExists) {
      await page.click('.glyphicon-paperclip');
      await new Promise(r => setTimeout(r, 2000));
    }
    await save(page, G, '02.png');

    // Close modal
    await page.evaluate(() => {
      const modal = document.querySelector('#info_panel');
      if (modal && typeof $ !== 'undefined') $(modal).modal('hide');
    });
    await new Promise(r => setTimeout(r, 500));

    // 03: Play speed (config panel)
    console.log('  [3/12] Play speed...');
    await goHome(page);
    await save(page, G, '03.png');

    // 04: Pause and check (manual - video screenshot)
    console.log('  [4/12] Pause and check (manual)...');
    await save(page, G, '04.png');

    // 06: N-gram button on main page
    console.log('  [5/12] N-gram button...');
    await goHome(page);
    await save(page, G, '06.png');

    // 07: N-gram results
    console.log('  [6/12] N-gram results...');
    await page.goto(`${BASE_URL}/ngram`, { waitUntil: 'networkidle2' });
    await waitForIdle(page);
    await typeSearch(page, 'wait');
    await clickSearch(page, 5000);
    await save(page, G, '07.png');

    // 08: Construction list
    console.log('  [7/12] Construction list...');
    await page.goto(`${BASE_URL}/construction`, { waitUntil: 'networkidle2' });
    await waitForIdle(page);
    await new Promise(r => setTimeout(r, 2000));
    await save(page, G, '08.png');

    // 09: Construction detail
    console.log('  [8/12] Construction detail...');
    const constExists = await waitFor(page, '#const-descriptions a', 3000);
    if (constExists) {
      await page.click('#const-descriptions a');
      await new Promise(r => setTimeout(r, 2000));
      await waitForIdle(page);
    }
    await save(page, G, '09.png');

    // 10: N-gram page
    console.log('  [9/12] N-gram page...');
    await page.goto(`${BASE_URL}/ngram`, { waitUntil: 'networkidle2' });
    await waitForIdle(page);
    await save(page, G, '10.png');

    // 11: Collocation tabs
    console.log('  [10/12] Collocation tabs...');
    await page.goto(`${BASE_URL}/ngram`, { waitUntil: 'networkidle2' });
    await waitForIdle(page);
    await typeSearch(page, 'important');
    // Click Colloc 2 tab
    const colloc2Exists = await waitFor(page, '#colloc_2gram_panel', 3000);
    if (colloc2Exists) {
      await page.click('#colloc_2gram_panel');
      await new Promise(r => setTimeout(r, 500));
    }
    await save(page, G, '11.png');

    // 12: Collocation results
    console.log('  [11/12] Collocation results...');
    await clickSearch(page, 5000);
    await save(page, G, '12.png');
  },
};

// ============================================================
// MAIN
// ============================================================

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--list')) {
    console.log('Available screenshot groups:');
    for (const name of Object.keys(scenarios)) {
      console.log(`  ${name}`);
    }
    return;
  }

  const groupFilter = args.indexOf('--group') >= 0
    ? args[args.indexOf('--group') + 1]
    : null;

  // Check if server is running
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch (e) {
    console.error(`ERROR: TCSE server not accessible at ${BASE_URL}`);
    console.error('Please start the server first: rake server');
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: VIEWPORT_DESKTOP,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(15000);

  const groupsToRun = groupFilter
    ? { [groupFilter]: scenarios[groupFilter] }
    : scenarios;

  if (groupFilter && !scenarios[groupFilter]) {
    console.error(`Unknown group: ${groupFilter}`);
    console.error('Use --list to see available groups');
    await browser.close();
    process.exit(1);
  }

  for (const [name, fn] of Object.entries(groupsToRun)) {
    console.log(`\n=== ${name} ===`);
    try {
      await fn(page);
      console.log(`  Done: ${name}`);
    } catch (e) {
      console.error(`  ERROR in ${name}: ${e.message}`);
      console.error(`  Stack: ${e.stack?.split('\n')[1]?.trim()}`);
    }
  }

  await browser.close();

  console.log('\n=== Summary ===');
  console.log('Screenshots saved to docs/*/images/');
  console.log('Note: Video playback screenshots (playing-video/02,04-07,09-10,16-21) need manual capture');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
