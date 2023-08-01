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

![Progress Bar CI](https://github.com/godtrex99/godtrex99/workflows/Progress%20Bar%20CI/badge.svg)\
`

<p align="center">
  <a href="https://github.com/godtrex99?tab=repositories&sort=stargazers">
    <img alt="total stars" title="Total stars on GitHub" src="https://custom-icon-badges.demolab.com/github/stars/godtrex99?color=55960c&style=for-the-badge&labelColor=488207&logo=star"/></a>
  <a href="https://github.com/godtrex99?tab=followers">
    <img alt="followers" title="Follow me on Github" src="https://custom-icon-badges.demolab.com/github/followers/godtrex99?color=236ad3&labelColor=1155ba&style=for-the-badge&logo=person-add&label=Follow&logoColor=white"/></a>
  <a href="https://github.com/godtrex99/godtrex99">
    <img alt="views" title="GitHub profile views" src="https://freshidea.com/jonah/app/godtrex99"/></a>
</p>
<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=Hello,+There!+👋;This+is+godtrex99....;Nice+to+meet+you!&center=true&size=30">
  </a>
</h1>
<h2 align="center">⚡ Stats ⚡</h2>
<br>
<p align=center>
  <div align=center>
    <a href="https://github.com/DenverCoder1/github-readme-streak-stats" title="Go to Source">
      <img align="left" width=390 src="https://github-readme-streak-stats.herokuapp.com/?user=godtrex99&theme=react&border=61dafb&hide_border=true" alt="godtrex99" />
    </a>
    <a href="https://github.com/anuraghazra/github-readme-stats" title="Go to Source">
      <img align="right" width=390 src="https://github-readme-stats.vercel.app/api?username=godtrex99&show_icons=true&theme=react&border_color=61dafb&hide_border=true" />
    </a>
  </div>
  <br><br><br><br><br><br><br><br><br>
  <div align=center>
    <a href="https://github.com/anuraghazra/github-readme-stats">
      <img width=325 align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=godtrex99&hide=c%23,powershell,Mathematica,Ruby,Objective-C,Objective-C%2b%2b,Cuda&title_color=61dafb&text_color=ffffff&icon_color=61dafb&bg_color=20232a&langs_count=8&layout=compact&border_color=61dafb&hide_border=true" />
    </a>
  </div>
  <br>
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=godtrex99&theme=react-dark&bg_color=20232a&hide_border=true" width="100%"/>
</p>
<hr>
<h2 align="center">👨‍💻 Repositories 👨‍💻</h2>
<br>
<div width="100%" align="center">
  <a align="left" href="https://github.com/godtrex99/clashconfig" title="Clash Config"><img align="left" height="115" src="https://github-readme-stats.vercel.app/api/pin/?username=godtrex99&repo=ClashConfig&theme=react&border_color=61dafb&border_radius=10"></a><a
<br>
<br>
<h4 align="center">
  <a href="https://github.com/godtrex99?tab=repositories" title="Show More Repositories">🔎 Show More 🔍</a>
</h4>

console.log(readme)
