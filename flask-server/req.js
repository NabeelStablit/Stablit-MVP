async function main() {
    const response = await fetch('http://localhost:5000/price-sETH')
    const s = await response.text()
    console.log('s', s)
}

main()
