import React from 'react'
class ClassAbout extends React.Component {
    constructor(props)
    {
        super(props);
    
    this.state={
        count:0,
        count2:1
     }
    
    }
    render()
    {
  return (
    <div className='user'>
    <h2>Name:{this.props.name}</h2>
    <h2>count:{this.state.count}</h2>
    <button onClick={()=>{
           this.setState(
            {
                count:this.state.count + 1,
                count2:this.state.count2 +1,
            }
           )
    }}>click</button>
    <h2>count2:{this.state.count2}</h2>
      <h3>Location:Noida</h3>
      <h4>Contact:7355419073</h4>
    </div>
  );
}
}

export default ClassAbout
