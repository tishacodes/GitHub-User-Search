import React from "react";
import search from '../search.svg';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ""
            
        };
    }

    handleChange = (event) => {
        this.setState ( { [event.target.name]: event.target.value } );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchedUserName (this.state.search);
        this.setState( {search: "" } );//resets form after submit
    }

    render() {
        return (
            <div className = "header-bar">
             {/*putting the handle submit on the form instead of the button means when you hit enter it will also 
                   submit the form */} 

                <div className = "search-form-section" >             

                    <form className = "search-form" onSubmit = {this.handleSubmit}>

                        <div className = "github-label-div">

                            <h2>GitHub User Search</h2>

                        </div>

                        <div className='search-div' >

                            <input 
                                className = "search-input"
                                type = "text" 
                                name = "search" 
                                placeholder = "find GitHub users and their followers..." 
                                value = {this.state.search}
                                onChange = {this.handleChange} 
                            />

                            <img src={search} alt='' className='search-img' onClick = {this.handleSubmit} />

                        </div>

                    </form>

                </div>

            </div>

        );
    }


}

export default SearchForm;