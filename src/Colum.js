import React,{useEffect, useRef} from 'react'
import './App.css'
import * as d3 from 'd3'



const Colum =(data)=>{
    let xdim=750
    let ydim=500
    let margin={top:80 ,bottom:80, left:120, right:120}
  
    
    let xdata=data

   
    let ydata=data
    const canvas = useRef(null)

    useEffect(()=>{ 

        const svg = d3.select(canvas.current) 
        addAxes(svg);
        addBars(svg);
        addText(svg);

        

    })



    const addAxes=(svg)=>{
      
        const xAxis= d3.axisBottom(xscale);

        svg.append("g")
            .call(xAxis)
            .attr("transform",`translate(0, ${ydim})`)
            .selectAll("text")
            .attr("text-anchor","start")
            .attr("transform","rotate(45)")
            .attr("color","white")
            .attr("font-size",15)

     

        const yAxis = d3.axisLeft(yscale)

        svg.append("g")
            .call(yAxis)
            .attr("transform",`translate(${margin.left},0)`)
            .attr("color","white")
            .attr("font-size",15)

    }

    const addBars =(svg)=>{
        const linearScale = d3.scaleLinear()
        .domain([0,d3.max(ydata.data.map(d=>(d.sales)))])
        .range([0,ydim])
        

        const scaleYData = ydata.data.map(vals=>{
            return linearScale(vals.sales)
        })
        // console.log(scaleYData)
        svg.selectAll("rect")
        .data(scaleYData)
        .enter()
        .append("rect")
        .attr("width",xscale.bandwidth())
        .attr("height",(d)=>{
            return d 
        })
        .attr("x",(d,i)=>{
            return xscale(xdata.data.map(d=>(d.month))[i])
        })
        .attr("y",(d)=>{
            return ydim -d
        })
        .attr("fill","dodgerblue")
        .attr("stroke","white")
    }

    const addText=(svg)=>{
        svg.append("text")
        .text("Chart of Sales")
        .attr("x",(margin.left+ margin.right+xdim)/2)
        .attr("y",(margin.top -150)/1)
        .attr("fill","white")
        .attr("font-size",20)


        // svg.append("text")
        // .text("weeek data") 
        // .attr("text-anchor","middle")
        // .attr("x",-(margin.top+margin.bottom+ydim)/3)
        // .attr("y",margin.left/2)
        // .attr("transform",`rotate(-90,${margin.left/2}, ${margin.top/2})`)
       
        
    }

    const xscale = d3.scaleBand()
    .domain(xdata.data.map(d=>(d.month)))
    .range([margin.left,xdim +margin.left])
    .padding(0.2)

    const yscale= d3.scaleLinear()
    .domain([0,d3.max(ydata.data.map(d=>(d.sales)))])
    .range([ydim,0])
   
    
 
    return(
        <>
            <div className="canvas">
            <svg viewBox={`0 0 ${xdim +margin.left+ margin.right} ${ydim+ 
                margin.top + margin.bottom}`} preserveAspectRatio="xMinYmin" width="100%" height="100%" ref={canvas}>
            </svg>
            </div>
        </>
    )
    

}
export default Colum


