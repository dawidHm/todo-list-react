import "./style.css"

const deleteTask = (name) => {
	console.log(`Nazwa zadania do usunięcia: ${name}`);
}

const Tasks = ({ tasks, hideDone }) => {
	return (
		<ul className="tasksList">
			{tasks.map(singleTask => (
				<li key={singleTask.id}
					className={`tasksList__item${(singleTask.done && hideDone) ? "--hidden" : ""}`}
				>
					<button className="tasksList__button tasksList__button--toggleDone done">
						{singleTask.done ? " ✔" : ""}
					</button>
					<div className={`tasksList__itemContent tasksList__itemContent${singleTask.done ? "--done" : ""}`}>
						{singleTask.content}
					</div>
					<button
						className="tasksList__button tasksList__button--remove remove"
						onClick={() => deleteTask(singleTask.content)}
					>
						🗑
					</button>
				</li>
			))}
		</ul>
	);
};

export default Tasks;