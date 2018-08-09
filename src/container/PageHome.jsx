import React, {Component} from 'react';
import Page 		from '../components/Page';
import PageTitle  from '../components/PageTitle';
import JsonEditor from '../components/JsonEditor';
import GroupButton from '../components/GroupButton'
import Button from '../components/Button'

var schema = {
	id      : 0,
	description: "Declarative pure data DSLs are the best.",
	type       : "object",
	properties : {
		comment: {
			title      : "Your comment",
			description: "Type something here.",
			type       : "string",
			minLength  : 1
		}
	}
};

var styleBt1 = {
	color: 'red',
	width: '150px'
}

class PageHome extends Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.state = {
			schema: schema
		}
	}

	onChange() {
		var schemaCustom = this.state.schema
		schemaCustom.id = schemaCustom.id + 1
		this.setState({schema: schemaCustom})
		console.log(this.editorGet.state.value)
	}

	render() {
		return(
			<Page>
				<PageTitle>Home</PageTitle>
				<JsonEditor ref={(ref) => this.editorGet = ref} valueInit={this.state.schema} />
				<GroupButton>
					<Button style={styleBt1}>Get Data</Button>
				</GroupButton>
			</Page>
		);
	}
}

export default PageHome;

