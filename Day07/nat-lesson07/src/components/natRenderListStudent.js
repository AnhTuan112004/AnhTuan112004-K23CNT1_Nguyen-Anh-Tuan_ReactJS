import React, { Component } from 'react';

class natRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            natStudents:[
                {tcvId:"NTU001",natName:"Nguyen Anh Tuan", natAge:46, natClass:"K23CNT1"},
                {tcvId:"NTU002",natName:"Nguyễn Quang A", natAge:22, natClass:"K23CNT1"},
                {tcvId:"NTU003",natName:"Nguyễn Quang B", natAge:21, natClass:"K23CNT1"},
                {tcvId:"NTU004",natName:"Nguyễn Quang C", natAge:23, natClass:"K23CNT1"},
            ],
        }
    }
    render() {
        let natElement = this.state.natStudents.map((natItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{natItem.tcvId}</td>
                        <td>{natItem.natName}</td>
                        <td>{natItem.natAge}</td>
                        <td>{natItem.natClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>natId</th>
                            <th>natName</th>
                            <th>natAge</th>
                            <th>natClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {natElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default natRenderListStudent;