
/* 柯里化是将  使用多个参数的一个函数  转换成  一系列使用一个参数的函数 * */
function add(fn, args) {
    let length = fn.length

    args = args || []

    return function() {

        let _args = args.slice(0)

        for (let i = 0; i < arguments.length; i++) {
            let arg = arguments[i]
            _args.push(arg)

        }
        if (_args.length < length) {
            return add.call(this, fn, _args)
        }
        else {
            return fn.apply(this, _args)
        }
    }
}


var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]
