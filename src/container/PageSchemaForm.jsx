import React, {Component} 	from 'react'
import Page 				from '../components/Page';
import PageTitle 			from '../components/PageTitle';
import Form 				from "react-jsonschema-form";
import Button 				from '@material-ui/core/Button';
import LinearProgress 		from '@material-ui/core/LinearProgress';
import ReactJson 			from 'react-json-view'

const schema = {
  "definitions": {
	"Thing": {
	  "type": "object",
	  "properties": {
		"name": {
		  "type": "string",
		  "default": "Default name"
		}
	  }
	}
  },
  "type": "object",
  "properties": {
	"fixedItemsList": {
	  "type": "array",
	  "title": "A list of fixed items",
	  "items": [
		{
		  "title": "A string value",
		  "type": "string",
		  "default": "lorem ipsum"
		}
	  ],
	  "additionalItems": {
		"title": "Additional item",
		"type": "number"
	  }
	},
	"minItemsList": {
	  "type": "array",
	  "title": "A list with a minimal number of items",
	  "minItems": 2,
	  "items": {
		"$ref": "#/definitions/Thing"
	  }
	},
	"defaultsAndMinItems": {
	  "type": "array",
	  "title": "List and item level defaults",
	  "minItems": 2,
	  "default": [
		"carp",
		"trout",
		"bream"
	  ],
	  "items": {
		"type": "string",
		"default": "unidentified"
	  }
	},
  }
}	
class SchemaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		   completed: 0,
		   jsonData: {}
		};
	}

	log = (type) => console.log.bind(console, type)

	componentDidMount() {
		// this.timer = setInterval(this.progress, 500);
	}

	progress = (formData) => {
		this.setState({jsonData: formData.formData})
		let self = this
		setInterval(function(){
			const completed = self.state.completed;
			if (completed === 100) {
			  self.setState({ completed: 0 });
			} else {
			  const diff = Math.random() * 10;
			  self.setState({ completed: Math.min(completed + diff, 100) });
			}
		}, 500)
  	};

	render() {
		return(
			<Page>
				<PageTitle>Schema Form</PageTitle>
				<div className="schemaForm">
					<Form schema={schema} onChange={this.log("changed")} onSubmit={this.progress} onError={this.log("errors")}>
						<div className='btSchemaForm'>
							<Button variant="contained" size="large" color="primary" type="submit">Submit</Button>
							<Button variant="outlined" size="large" color="primary" >Reset</Button>
						</div>
					</Form>
				</div>

				<div className="progressContainer">
					<LinearProgress className={'progressLine'} variant="determinate" value={this.state.completed} />
					<Button className={'progressCancel'} variant="contained" size="small" color="primary" type="submit">Cancel</Button>
				</div>
				<div className="jsonOutput">
					<ReactJson src={this.state.jsonData} theme="brewer"/>
				</div>
			</Page>
		)
	}
}

export default SchemaForm