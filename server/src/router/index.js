const fs = require('fs')
const { resolve } = require('path')

const allRoutes = function () {
 fs.readdirSync(__dirname).forEach(file => {
  if (file === 'index.js') return
  if (file.includes('.router.js')) {
   const router = require(`./${file}`)
   useRouter(this, router)
  } else {
   fs.readdirSync(resolve(__dirname , file)).forEach(dirFile => {
    const dirRouter = require(`${resolve(__dirname , file)}/${dirFile}`)
    useRouter(this, dirRouter)
   })
  }
 })
}

const useRouter = (who, router) => {
 who.use(router.routes())
 who.use(router.allowedMethods())
}

module.exports = allRoutes