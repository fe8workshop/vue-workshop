require('../../util').createTestCase(__filename, (window, logs, done) => {
    var { convert } = window

    var obj = { foo: 123 }

    convert(obj)

    expect(obj.foo).toBe(123)
    expect(logs[0][0]).toMatch(`getting foo: 123`)

    obj.foo = 234
    expect(logs[1][0]).toMatch(`setting foo to: 234`)

    expect(obj.foo).toBe(234)
    expect(logs[2][0]).toMatch(`getting foo: 234`)

    done()
})