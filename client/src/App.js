import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Users from './components/Users/Users';
import Form from './components/Form/Form';
import { getPosts } from './actions/users';
import axios from 'axios';
import './styles.css';

const App = () => {
   const dispatch = useDispatch();
   const [currentId, setCurrentId] = useState(0);
   const csvHelper = () =>
   {
        return axios(
        {
            method: "GET",
            url: "http://localhost:5000/users/downloadCsv",
            responseType: "arraybuffer",
            headers: {
            Accept: "text/csv",
        },
    })
        .then((res) => 
        {
            return res.data;
        })
        .catch((err) => console.log(err));
   }

   const exportCsv = () => {
        csvHelper().then((data) => 
        {
            const file = new Blob([data], 
            {
                type: "text.csv",
            });
            saveAs(file, "file.csv");
        });
   } 
   
   useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

    return (
        <div > 
            <div>
                <button className="button" onClick= {exportCsv} > Export csv </button>
            </div> 
            <Users />
        </div>
    )
}

export default App;