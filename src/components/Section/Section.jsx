import React from 'react';
import HomePage from '../../pages/HomePage';
import LibraryPage from '../../pages/LibraryPage';

import {Routes, Route} from 'react-router-dom';
import MovieFormPage from '../../pages/MovieFormPage';


const Section = () => {
    return ( 
        <React.Fragment>
            <Routes>
                <Route path='/library' element={<LibraryPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/form' element={<MovieFormPage />} ></Route>
            </Routes>
        </React.Fragment>
     );
}
 
export default Section;