import * as cheerio from 'cheerio'

function findTextAndReturnRemainder(target, variable) {
    var chopFront = target.substring(target.search(variable) + variable.length, target.length);
    var result = chopFront.substring(0, chopFront.search(";"));
    return result;
}

export default async function (req, res) {

    if (req.method === 'POST') {

        // get url from post body
        const { url } = req.body

        try {

            // fetch web page
            const data = await fetch(url)

            // get raw html
            const html = await data.text()

            // parse html
            const parsed = cheerio.load(html)

            // return stream_data
            var text = parsed(parsed('script')).text()
            var findAndClean = findTextAndReturnRemainder(text, "stream_data =")
            var result = JSON.parse(findAndClean.replace(/'/g, '"'))

            // return json obj with links
            res.status(200).json(result)

        } catch (error) {

            // there was an error
            console.log(error)
            res.status(400).json(error)

        }

    } else {

        // user made get request
        res.status(400).json({ "message": "Bad request" })

    }

}
