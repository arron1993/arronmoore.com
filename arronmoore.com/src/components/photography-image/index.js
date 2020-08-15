import React from "react"

class PhotographyImage extends React.Component {

    getImg() {
      let classes = ["col-6", "p-5"]
      if (this.props.side === "right") {
        classes.push("justify-content-end")
      }

      return (
        <div className={classes.join(' ')}>
          <img  width="100%" src={this.props.src} />
        </div>
      )
    }
    
    getLabel() {
      return (
        <div className='col-6 d-flex align-items-center img-label'>
          <div>
            <div className="w-100"> {this.props.title} </div> 
            <div className="location font-italic"> - {this.props.location} </div>
          </div>
        </div>  
      )
   }

    render() {
      let left
      let right

      if (this.props.side === "left") {
          left = this.getImg()
          right = this.getLabel()
        } else {
          left = this.getLabel()
          right = this.getImg()
        }

        return (
          <div className='row'>
            {left}
            {right}
          </div>
        );
    }
}

export default PhotographyImage