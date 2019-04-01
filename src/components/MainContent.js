import React from 'react';
import '../scss/MainContent.scss';
const MainContent = () => {

    const styles = {
        fontSize: 30,
        backgroundColor:'asure'
    }

    let date = new Date();
    let currentHour = date.getHours();
    let timeOfDay = '';
    if(currentHour > 5 && currentHour <12){
        timeOfDay = 'morning';
        styles.color='green';
    } else if (currentHour > 12 && currentHour < 18) {
        timeOfDay = 'day';
        styles.color='blue';
    } else if (currentHour >17 && currentHour < 22) {
        timeOfDay = 'evening';
        styles.color='yellow';
    }


    return (
        <main className='main'>
            <h1 style={styles}>Good {timeOfDay}</h1>
            {/*This is main section*/}
        </main>
    )
};

export default MainContent;

