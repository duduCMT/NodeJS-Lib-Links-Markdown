import fetch from "node-fetch"

async function statusCheck(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url)
                    return res.status
                }))
        return arrayStatus
    } catch (erro) {
        throw new Error(erro.message)
    }
}

function buildURLArray(linksArray) {
    return linksArray
        .map(objLink => Object
            .values(objLink).join())
}

async function urlsValidation(linksArray) {
    const urls = buildURLArray(linksArray)
    const statusLinks = await statusCheck(urls)

    const results = linksArray.map((object, index) => ({
        ...object,
        status: statusLinks[index]
    }))

    return results
}

export { urlsValidation }