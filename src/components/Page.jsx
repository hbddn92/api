import React, {Component} from 'react';
import JsonEditors from './JsonEditor';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/dist/locale/en';


var sampleObject = {ab:1234}

class Page extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		var children  = this.props.children
		var PageTitle;
		var listChild = React.Children.map(children, (child, i) => {
          // if(child.type.name == 'PageTitle') PageTitle = child
          return child
        })
		return(
			<article className="mainPage">
				<div className="mainPageDiv">
					{listChild}
				</div>
			</article>
		)
	}
}

export default Page;