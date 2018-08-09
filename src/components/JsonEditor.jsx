import React, {Component} from 'react'
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/dist/locale/en';

class JsonEditors extends Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this);
		this.state = {
			value: this.props.valueInit
		}
	}

	onChange(data) {
		console.log(data)
		if(!data.error) {
			this.setState({value: data.json})
		}
	}

	render() {
		console.log(this.props.valueInit)
		return(
			<JSONInput
		        id          = 'a_unique_id'
		        placeholder = {this.props.valueInit}
		        locale      = {locale}
		        height      = '550px'
		        width 		= '100%'
		        onChange    = {this.onChange}
		    />
		)
	}
}

export default JsonEditors