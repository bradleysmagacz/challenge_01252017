import React from 'react'

export default class Nasa extends React.Component {
  static propTypes = {

  }

  constructor (props) {
    super(props)
    this.renderChildren = this.renderChildren.bind(this)
  }

  componentWillMount () {
    this.props.getImages()
  }

  renderChildren () {
    // return React.cloneElement(this.props.children, this.props)
    return React.Children.map(this.props.children,
      (child) => React.cloneElement(child, this.props))
  }

  render () {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, this.props)
    )

    return <div>{childrenWithProps}</div>
  }
}
