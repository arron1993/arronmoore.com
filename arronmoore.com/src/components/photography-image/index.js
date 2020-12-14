import React from "react"

class PhotographyImage extends React.Component {
  getImg() {
    return (
      <div className="col-12 col-lg-6 p-5">
        <img width="100%" src={this.props.src} />
      </div>
    )
  }

  getLabel() {
    let classes = "d-none d-lg-flex col-12 col-lg-6 align-items-center".split()

    if (this.props.side === "right") {
      classes.push("justify-content-end")
    }

    return (
      <div className={classes.join(" ")}>
        <div>
          <div className="w-100 text-white"> {this.props.title} </div>
          <div className="location font-italic text-white">
            {" "}
            - {this.props.location}{" "}
          </div>
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
    } else if (this.props.side === "right") {
      left = this.getLabel()
      right = this.getImg()
    }

    return (
      <div className="row">
        {left}
        {right}
      </div>
    )
  }
}

export default PhotographyImage
