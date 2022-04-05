import "./style.css"

const Tasks = ({tasks, hideDoneTasks}) => (
	<ul className="tasksList">
		{tasks.map(singleTask => (
			<li key={singleTask.id}
				className={`tasksList__item${(singleTask.done && hideDoneTasks) ? "--hidden" : ""}`}
			>
				<button className="tasksList__button tasksList__button--toggleDone done">
               {singleTask.done ? " ✔" : ""}
            </button>
            <div className={`tasksList__itemContent tasksList__itemContent${singleTask.done ? "--done" : ""}`}>
					{singleTask.content}
				</div>
            <button className="tasksList__button tasksList__button--remove remove">
					🗑
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;