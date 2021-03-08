import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {

    const [cards,setCards] = useState({
        '1':{
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
        '2':{
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
        '3':{
            id : '3',
            name : 'Juhwan3',
            company: 'Samsung',
            theme: 'dark',
            title: 'Front-End',
            email:'wnghks0531@naver.com',
            message:'go for it',
            fileName:'xxx',
            fileURL:null
        }
    });

   
    
        
    

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

    const addCard = (card) => {
        const updated =[...cards,card];
        setCards(updated);
    }

    const createOrupdateCard = (card) => {
        
        setCards(cards => {
            const updated = {...cards};
            updated[card.id]= card;
            return updated;
        });
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
}

export default Maker;