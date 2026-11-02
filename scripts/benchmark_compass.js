// Reproducible CPU baseline. This measures the engine, not browser paint or network.
const Engine=require('../compass/compass_engine.js');
const cases=[{name:'5000 rows / 20 numeric columns',n:5000,p:20,categorical:false},{name:'2500 rows / 40 mixed high-cardinality columns',n:2500,p:40,categorical:true}];
for(const c of cases) {
  const headers=Array.from({length:c.p},(_,j)=>`v${j}`);
  const rows=Array.from({length:c.n},(_,i)=>Object.fromEntries(headers.map((h,j)=>[h,c.categorical&&j%2?`label_${i}_${j}`:Math.sin(i+j)*100+i/10])));
  const timings=[];
  for(let i=0;i<3;i++) {const start=performance.now();Engine.analyzeDataset({headers,rows},{primaryVar:'v0'});timings.push(Number((performance.now()-start).toFixed(1)));}
  console.log(JSON.stringify({fixture:c.name,cells:c.n*c.p,elapsedMs:timings}));
}
