// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).



class Graph{
    constructor() {
        this.adjancylist = new Map()
    }
    addVertex(vertex){
        if(!this.adjancylist.has(vertex)){
            this.adjancylist.set(vertex,[])
        }
    }
    addEdges(u,v){
        if(!this.adjancylist.has(u)){
            this.addVertex(u)
        }
        if(!this.adjancylist.has(v)){
            this.addVertex(v)
        }
        this.adjancylist.get(u).push(v)
        this.adjancylist.get(v).push(u)
    }

    bfs(st){
        let que=[]
        let visited = new Set()
        que.push(st)
        visited.add(st)
        let res=[]
        while(que.length!=0){
            let rem = que.shift()
            res.push(rem)
            this.adjancylist.get(rem).forEach((nbh)=>{
                if(!visited.has(nbh)){
                    visited.add(nbh)
                    que.push(nbh)
                }
            })
        }
        return res
    }
    
    
  
    shortestPath(st,ed){
        let vis = new Set()
        let que=[[st]]
        let path=[]
        vis.add(st)
        while(que.length!=0){
            path = que.shift()
            let node = path[path.length-1]
            if(node == ed){
                return path
            }     
            this.adjancylist.get(node).forEach((nbh)=>{
                if(!vis.has(nbh)){
                    vis.add(nbh)
                    let newpath = [...path,nbh]
                    que.push(newpath)
                }    
            })    
        }    
        return null;
    }    
}    


let g1 = new Graph()

g1.addVertex("A")
g1.addVertex("B")
g1.addVertex("C")
g1.addVertex("D")
g1.addVertex("E")

g1.addEdges("A","C")
g1.addEdges("A","B")
g1.addEdges("C","E")
g1.addEdges("B","D")
g1.addEdges("D","E")

console.log("BFS Trversal:",g1.bfs("A"))
console.log("Sortest Path from A to E:",g1.shortestPath("A","E"))


