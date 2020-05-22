

let o = {"1": ["haha"], "2": ["hehe"], "-1": ["xixi"], 3: ["xx"]}


let r = []
Object.entries(o).forEach(([k,v])=>{
  r.push({k, v})
})

r.sort((a,b)=>a.k-b.k)

console.log(r)