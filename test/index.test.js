const getLinksFromFile = require('../index');

describe('getLinksFromFile::', () => {
    it('must be a function', () => {
        expect(typeof getLinksFromFile).toBe('function');
    })

    it('must return a array with results', async () => {
        const expectedResult = [
            { FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList' }    
        ]

        const result = await getLinksFromFile('./test/mock/text1.md')
        expect(result).toEqual(expectedResult)
    })

    it('must return a message "there are no links"', async () => {
        const result = await getLinksFromFile('./test/mock/text1_no-links.md')
        expect(result).toBe('there are no links')
    })

    // it('must throw a error "there is no file in the path"', async () => {
    //     const result = await getLinksFromFile('./test/mock')
    //     expect(result).rejects.toThrow(/there is no file in the path/)
    // })
})