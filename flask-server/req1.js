
async function main () {
    const res = await fetch('https:nabeelbhaiccxt-zvglklnxya-em.a.run.app/')
    const r = await res.json()
    console.log('r', r)
}

main()
    .then(() => console.log('Done!'))
    .catch((er) => console.log('error is: ', er))