function compilePostsList() {
  const fs = require('fs')
  const folder = './pages/posts/'
  const files = fs.readdirSync(folder)
  const onlyPages = files
    .filter(
      fileName => fileName.includes('.js') && fileName !== '_xxx.js' && fileName !== 'index.js',
    )
    .map(fileName => fileName.replace('.js', ''))
  console.log('./pages/posts/' + onlyPages[0])

  let postsReExportFileText = ''
  onlyPages.forEach(
    fileName =>
      (postsReExportFileText += `export { postObj as ${fileName} } from "./pages/posts/${fileName}"\n`),
  )
  console.log(postsReExportFileText)

  fs.writeFileSync('postsListReExport.js', postsReExportFileText)
}

compilePostsList()
