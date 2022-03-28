import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

const App = ()=>{
    return (
        <div>
            <Header />
            <Note title="Mr.Robot" content="Mr. Robot seems cool and thrilling."/>
            <Footer />
        </div>
    );
};

export default App;