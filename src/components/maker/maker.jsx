import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {

    const [cards,setCards] = useState([
        {
            id : '1',
            name : 'Juhwan',
            company: 'Samsung',
            theme: 'light',
            title: 'Front-End',
            email:'wnghks0531@naver.com',
            message:'go for it',
            fileName:'xxx',
            fileURL:null
        },
        {
            id : '2',
            name : 'Juhwan2',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Front-End',
            email:'wnghks0531@naver.com',
            message:'go for it',
            fileName:'xxx',
            fileURL:null
        },
        {
            id : '3',
            name : 'Juhwan3',
            company: 'Samsung',
            theme: 'dark',
            title: 'Front-End',
            email:'wnghks0531@naver.com',
            message:'go for it',
            fileName:'xxx',
            fileURL:null
        },
    ]);;

    const history =useHistory();

    const onLogout =() => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        })
    })

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
}

export default Maker;