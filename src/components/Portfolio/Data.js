import Bee from './img/Bee.png';
import Web from './img/Web.png';
import Burger from './img/Burger.png';

export default
    {
        projects: [
            {
                id: 1,
                img: Web,
                title: 'WebSpace',
                role: 'AWS Authentication and Logo',
                text: 'WebSpace is a meet-up style app that gives users an opportunity to view fast and pertinent information about other individuals attending the gathering',
                url: 'https://thewebspace.herokuapp.com/'
            },
            {
                id: 2,
                img: Bee,
                title: 'Beechin',
                role: 'Backend and Icons',
                text: 'BeeChin is a reddit/4chan hybrid app that includes post/comment and upvote/downvote functionality',
                url: 'https://github.com/verlitas/BeeChin',
                link: 'https://secure-shore-00883.herokuapp.com/'
            },
            {
                id: 3,
                img: Burger,
                title: 'Burger Sequelized',
                role: 'Code and Icons',
                text: 'A burger logger with MySQL, Node, Express, Handlebars, and Sequelized',
                url: 'https://github.com/verlitas/Burger-Sequelized',
                link: 'https://verlitas-burgersequel.herokuapp.com/'
            }
        ]
    }