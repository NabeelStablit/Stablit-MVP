async function main() {
    const res = await fetch('http://localhost:8000')
    const t = await res.json()
    console.log('t', t)
}

main()