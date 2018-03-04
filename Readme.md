# Find derived

Like `Array.prototype.find` but returns the result of the first derived values (ie. function call on an item in the list) that is truthy.

## Usage

```js
import {
  findDerived
} from 'find-derived'

const derive = (item) => item > 2 ? item * 2 : false
// 6
return findDerived([1,2,3,4], derive)
```

### Add to Array prototype

```js
import {
  addFindDerivedTo
} from 'find-first-value'

addFindDerivedTo(Array.prototype)

// 6
return [1,2,3,4].findDerived(derive)
```

## Strategy pattern

A common usage is to use this to try different strategies. Each strategy can have a guard

```js
strategies = [
  tryLocalCache,
  tryDownloadRepo,
  tryDownloadNpm,
]

function tryLocalCache(options) {
  // guard clause
  if (!isCached(options)) return false
  // resolve from cache
  // ...
  return files
}

// retrieve files of first strategy that resolves
const files = strategies.findDerived((strategy)=> strategy(options))
```

## License

MIT