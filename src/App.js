import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

function App() {
	const [hideDone, setHideDone] = useState(false);
	const [tasks, setTasks] = useState([
		{ id: 1, content: "Przejść na Reacta", done: false },
		{ id: 2, content: "zjeść kolację", done: true },
	]);

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(singleTask => singleTask.id !== id));
	};

	const toggleTaskDone = (id) => {
		setTasks(tasks => tasks.map(singleTask => {
			if (singleTask.id === id) {
				return { ...singleTask, done: !singleTask.done };
			}

			return singleTask;
		}));
	}

  const setAllDone = () => {
    setTasks(tasks => tasks.map(singleTask => ({
      ...singleTask, 
      done: true
    })));
  };

	return (
		<Container>
			<Header title="Lista zadań" />
			<Section
				title="Dodaj nowe zadanie"
				body={<Form />}
			/>

			<Section
				title="Lista zadań"
				body={
					<Tasks
						tasks={tasks}
						hideDone={hideDone}
						removeTask={removeTask}
						toggleTaskDone={toggleTaskDone}
					/>
				}
				extraHeaderContent={
					<Buttons
						tasks={tasks}
						hideDone={hideDone}
						toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
            />
				}
			/>
		</Container>
	);
}

export default App;