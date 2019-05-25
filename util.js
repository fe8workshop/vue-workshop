jest.setTimeout(1000)
const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

var filename = function (file) {
    // 拿到文件夹 __test__ 路径
    var dir = path.dirname(file)
    // 拿到 上级目录 路径
    var parentPath = path.resolve(dir, '../')
    // 读取目录文件
    var files = fs.readdirSync(parentPath)
    // 拿到 test 文件名
    var base = path.basename(file)
    // 开头为  数字  .  数字
    //   ^    \d  \.  \d
    var id = base.match(/^\d\.\d/)[0]
    var name = files.find(f => f.startsWith(id) && f.endsWith('.html'))
    return name
}

var domFormFile = function (file) {
    var dom = JSDOM.fromFile(file, {
        resources: 'usable',
        runScripts: "dangerously"
    })
    return dom
}

var bindEventClick = function (window) {
    window.$click = function (target) {
        var evt = window.document.createEvent('HTMLEvents')
        evt.initEvent('click', false, true)
        window.document.querySelector(target).dispatchEvent(evt)
    }
}

var bindEventLoad = function (window, fn, done) {
    window.addEventListener('load', () => {
        var log = jest.fn()
        var log = window.console.log = jest.fn(() => { })
        if (window.Vue) {
            window.Vue.config.productionTip = false
            window.Vue.config.devtools = false
        }
        fn(window, log.mock.calls, done)
    })
}

var runTest = function (name, file, callback, extra) {
    it(name, done => {
        var dom = domFormFile(file)
        dom.then(({ window }) => {
            bindEventClick(window)
            if (extra) {
                extra(window)
            }
            bindEventLoad(window, callback, done)
        })
    })
}

exports.createTestCase = function (file, callback, extra) {
    var testFile = filename(file)
    var caseName = file.replace(/\.html$/, '')
    var caseFile = path.resolve(file, `../../${testFile}`)
    runTest(caseName, caseFile, callback, extra)
}
