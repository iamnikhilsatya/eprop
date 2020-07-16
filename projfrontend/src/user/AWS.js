import React, { Component ,useState} from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgCollection: ''
        }
        this.state = {
            userId: ''
        }
    }
   
    onChange(e){
        this.setState({userId:e.target.value})
        console.log(e.target.value)
    }

    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()
        var userId = this.state.userId;
        console.log(this.state.userId)
        var formData = new FormData();
        console.log(formData)
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
            console.log(this.state.imgCollection[key])
        }
        
        axios.post("http://localhost:8000/upload", {formData,userId}, {
        }).then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} />
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={this.onFileChange} value={this.userId} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}