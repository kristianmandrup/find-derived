export function findDerived(list: any[], test: Function) {
  var result = null;
  list.find((item: any, index: number, arr: any[]) => {
    const testResult = test.call(null, item)
    if (testResult) {
      result = testResult
      return true
    }
    return false
  });
  return result;
}

export function addfindDerivedTo(ctx: any) {
  ctx.findDerived = function (test: Function) {
    return findDerived(this, test)
  }
  return ctx
}
