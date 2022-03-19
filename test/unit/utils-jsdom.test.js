/**
 * @jest-environment jsdom
 */

const utils = require('../../source/utils.js');

describe('Utilities', () => {

    test('fetchFile: fetches the current document HTML', async () => {

        let doc = await utils.fetchPage('example.com', 'page')
        expect(doc.querySelector('body').innerText).toMatch(document.querySelector('body').innerText)

        doc = await utils.fetchPage(document.location.href)
        expect(doc.querySelector('body').innerText).toMatch(document.querySelector('body').innerText)
        
    })

    

});