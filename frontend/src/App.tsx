import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotesList from './pages/NotesList';
import NotePage from './pages/NotePage';



function App() {
    return (
        <BrowserRouter>
            <div className={"container dark"}>
                <div className={"app"}>
                    <Header/>
                    <Routes>
                        <Route path={''} element={<NotesList/>}/>
                        <Route path={'/:id'} element={<NotePage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
