// semigroup

const Any = x =>
({
  x,
  concat: other =>
   Any(x || other.x)
})

const res = Any(false).concat(Any(false))

console.log(res)
console.log(Any.concat)

// monoid = semigroup + Indentity

 