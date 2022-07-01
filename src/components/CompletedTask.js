import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const CompletedTask = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    console.log(completedTasks);

    useEffect(() => {
        fetch(`http://localhost:5000/allCompletedTask`)
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [])


    return (
        <div>
            {
              completedTasks.map(task => <div className="md:w-[200px] mx-auto text-left">
                <h1>Task Name: {task.completedTask}</h1>
              </div>)
            }
        </div>
    );
};

export default CompletedTask;