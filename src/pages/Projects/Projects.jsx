import djangames from '../../Images/djangames.png';
import bookkeeper from '../../Images/bookkeeper.png';
import simon from '../../Images/simonalt.png';
import recipetracker from '../../Images/recipetrackeralt.png';
import gitimg from '../../Images/github.png';
import simongif from '../../gifs/simondemo.gif';
import recipegif from '../../gifs/recipedemo.gif';
import bookgif from '../../gifs/bookdemo.gif';
import djangif from '../../gifs/djangamesdemo.gif';
import React from 'react';
import './Projects.css';


export default function Projects() {
    return(
        <>
            <div className='header-element'>
                <h1 className='projtitle'>My Projects</h1>
                <p>(click on any thumbnail to open that app in a new tab!)</p>
            </div>
            <div id='tn-arrange'>
                <table>
                    <tr>
                        <td id='imgthumb'><a href='https://samwing1.github.io/Simon-Game/' target='_blank' rel='noreferrer noopener'><div id='figure'><img src={simon} id='thumbnails'></img><img src={simongif} className='gif'/></div></a></td>
                        <td><p className='text'>Simon released 1978 under the name "Follow Me" as a basic memory game, where you match the pattern of colors played for you, with each pattern completed raising the difficulty.<br /><br /><br />Technologies Used: HTML, CSS, Javascript<br /><br /><br /><a href='https://github.com/SamWing1/Simon-Game' target='_blank' rel='noreferrer noopener'><button><img src={gitimg} id='gitimg'/>Simon's Repo</button></a></p></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td id='imgthumb'><a href='https://frozen-river-00413.herokuapp.com/' target='_blank' rel='noreferrer noopener'><div id='figure'><img src={bookkeeper} id='thumbnails'></img><img src={bookgif} className='gif'/></div></a></td>
                        <td><p className='text'>This is a simple App to track the books you're currently reading or looking to read soon, with fields to mark down the page you're on, and a note to accompany that page, or any pertinent info you'd like to keep in mind.<br /><br /><br />Technologies Used: HTML, CSS, Javascript, MongoDB, Express, React.js, Node.js<br /><br /><br /><a href='https://github.com/SamWing1/React-Book-App' target='_blank' rel='noreferrer noopener'><button><img src={gitimg} id='gitimg'/>Book Keeper's Repo</button></a></p></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td id='imgthumb'><a href='https://pure-falls-99749.herokuapp.com/' target='_blank' rel='noreferrer noopener'><div id='figure'><img src={recipetracker} id='thumbnails'></img><img src={recipegif} className='gif'/></div></a></td>
                        <td><p className='text'>My take on a website where you can add recipes and list their ingredients, as well as leave comments on your added recipes.<br /><br /><br />Technologies Used: HTML, CSS, Javascript, MongoDB, Express, Node.js<br /><br /><br /><a href='https://github.com/SamWing1/Node-Recipe-Tracker' target='_blank' rel='noreferrer noopener'><button><img src={gitimg} id='gitimg'/>Recipe Tracker's Repo</button></a></p></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td id='imgthumb'><a href='https://cool-djan-games.herokuapp.com/' target='_blank' rel='noreferrer noopener'><div id='figure'><img src={djangames} id='thumbnails'></img><img src={djangif} className='gif'/></div></a></td>
                        <td><p className='text'>Cool Djan Games is a throwback to Cool Math Games! In this version, you will be able to play javascript based games, and track high scores from any of your favorites games.<br /><br /><br />Technologies Used: HTML, CSS, Javascript, Django, Python<br /><br /><br /><a href='https://github.com/SamWing1/Djan-Games-Personal' target='_blank' rel='noreferrer noopener'><button><img src={gitimg} id='gitimg'/>Djan-Game's Repo</button></a></p></td>
                    </tr>
                </table>
            </div>
        </>
    )
}