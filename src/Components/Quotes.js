import { useState } from "react";
import './Quotes.css';

const quotes = [
    "Success doesn't just find you. You have to go out and get it.",
    "Don't let yesterday take up too much of today.",
    "If you are working on something exciting, it will keep you motivated.",
    "Great things never come from comfort zones.",
    "Do something today that your future self will thank you for.",
    "Dream bigger. Do bigger.",
    "Don't stop when you're tired. Stop when you're done.",
    "Discipline is the bridge between goals and accomplishment.",
    "Parents give up so much, so their children can have so much more.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don't wait for opportunity. Create it.",
    "Push yourself, because no one else is going to do it for you.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Sometimes later becomes never. Do it now.",
    "Don't watch the clock; do what it does. Keep going.",
    "Code is like humor. When you have to explain it, it's bad.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The sacrifices parents make go unnoticed until one day, they don't — and everything makes sense.",
    "First, solve the problem. Then, write the code.",
    "Success is the sum of small efforts repeated day in and day out.",
    "It's not whether you get knocked down, it's whether you get up.",
    "The best way to get started is to quit talking and begin doing.",
];

 function Quote () {
    const[quote, setQuote] = useState[quotes[0]];

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
    }
    
 }