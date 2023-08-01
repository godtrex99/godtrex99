const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

<h2 align="center">👨‍💻 Repositories 👨‍💻</h2>
<br>
<div width="100%" align="center">
  <a align="left" href="https://github.com/godtrex99/clashconfig" title="Clash Config"><img align="left" height="115" src="https://github-readme-stats.vercel.app/api/pin/?username=godtrex99&repo=ClashConfig&theme=react&border_color=61dafb&border_radius=10"></a><a
<br>
<br>
<h4 align="center">
  <a href="https://github.com/godtrex99?tab=repositories" title="Show More Repositories">🔎 Show More 🔍</a>
</h4>

![Progress Bar CI](https://github.com/godtrex99/godtrex99/workflows/Progress%20Bar%20CI/badge.svg)\
`

console.log(readme)
