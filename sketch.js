let walls=[];
let ray;
let particle;
let start,end;
let gencounter=0
const MUTATION=0.1

const TOTAL=100;

let population=[];
let savedParticles=[]

function setup() {
  createCanvas(600, 600);
  tf.setBackend('cpu')
  
  
  walls.push(new Boundary(50,600,50,350))
  walls.push(new Boundary(100,600,100,350))
  walls.push(new Boundary(100,350,150,250))
  walls.push(new Boundary(50,350,120,200))
  walls.push(new Boundary(120,200,400,200))
  walls.push(new Boundary(150,250,400,250))
  walls.push(new Boundary(50,590,100,590))
  walls.push(new Boundary(400,200,400,250))
  
  start=createVector(75,550)
  end=createVector(380,225)
  
  
  for(let i=0;i<TOTAL;i++){
  population[i]=new Particle()
  }
}

function draw() {
  background(0);
  if(population.length==0){
    console.log('ab')
   nextGeneration()
    
    //gencounter+=1
   
  }
  //console.log(tf.memory())
  for(let i=0;i<walls.length;i++){
  walls[i].show()
  }
 
  for(let particle of population){
  particle.show()
  particle.look(walls)
  particle.update()
    particle.check(end)
  }
  
  for(let i=population.length-1;i>=0;i--){
 const particle=population[i];
    if(particle.dead||particle.finished){
      savedParticles.push(population.splice(i,1)[0])
    }
  }
  
  

  fill(255)
  ellipse(start.x,start.y,10,10)
  ellipse(end.x,end.y,10,10)
}