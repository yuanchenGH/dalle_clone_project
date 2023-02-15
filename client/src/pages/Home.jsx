import React, {useState, useEffect} from 'react'; //!hooks in the curly parentheses 
import {Card, FormField, Loader} from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);  
  return (
    <div>Home</div>
  )
}

export default Home