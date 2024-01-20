
async function main() {
    const response = await fetch('http://localhost:5000/')
    const s = await response.text()
    console.log('price is: ', s, 'type of value', typeof s)

}

main()
