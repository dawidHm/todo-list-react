import "./style.css"

const removeTask = (name) => {
	console.log(`Nazwa zadania do usunięcia: ${name}`);
}

const Tasks = ({ tasks, hideDone, removeTask }) => {
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
						onClick={() => removeTask(singleTask.id)}
					>
						🗑
					</button>
				</li>
			))}
		</ul>
	);
};

export default Tasks;