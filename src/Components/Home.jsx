import React, { useState } from 'react';

const Home = () => {
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [getData, setGetData] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        setGetData([...getData, { title, discription }]);
        setTitle("");
        setDiscription("");
    }
console.log(getData)
    const deleHandle = (index) => {
        const updateData = getData.filter((value, i) => {
            return i !== index
        });
        setGetData(updateData);
    }

    return (
        <main>
            <h1>Todo List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                <input type="text" value={discription} onChange={(e) => setDiscription(e.target.value)} placeholder='Description' />
                <button type='submit'>Add</button>
            </form>

            <div>
                {getData.map((value, index) => (
                    <div key={index}>
                        <p>Your Title is {value.title}</p>
                        <h6>Your Description is {value.discription}</h6>
                        <button onClick={() => deleHandle(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Home;
