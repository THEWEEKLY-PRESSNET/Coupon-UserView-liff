

const coupons = ["true", "true", "false", "true"]

１　falseだけの配列を作る
mid === ["false"]
const mid = coupons.filter((o) => o.used === "false")
const trueArr = coupons.filter((o) => o.used === "true")

２　一番最後にtrue要素を足す
mid.push(trueArr)

３完成！！！
goal === ["false", "true", "true", "true"] === mid



１　falseだけの配列を作る
mid === ["false"]
const falseArr = coupons.filter((o) => o.used === "false")
const trueArr = coupons.filter((o) => o.used === "true")

２　一番最後にtrue要素を足す
const goal = falseArr + trueArr

３完成！！！
goal === ["false", "true", "true", "true"] === goal






// １　trueだけの配列を作る
// mid2 = [ "true", "ture", "ture" ]

// 2 一番最初にfalse要素を足しきる
// goal === [ "false", "true", "true", "true" ]