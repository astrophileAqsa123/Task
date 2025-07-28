import React, { useState, useEffect } from "react";

const Home = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const username = currentUser?.username || "";

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  // Load tasks for the logged-in user
  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    if (username && allTasks[username]) {
      setTasks(allTasks[username]);
    }
  }, [username]);

  // Save tasks back to localStorage
  const saveTasks = (updatedTasks) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    allTasks[username] = updatedTasks;
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  };

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      createdAt: new Date().toLocaleString(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setTaskText("");
  };

  if (!currentUser) {
    return (
      <div style={styles.centerWrapper}>
        <h2>Please log in to see your tasks.</h2>
      </div>
    );
  }

  return (
    <div style={styles.centerWrapper}>
      <div style={styles.container}>
        <h2>Welcome, {username}!</h2>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a task"
            style={styles.input}
          />
          <button onClick={addTask} style={styles.button}>Add Task</button>
        </div>
        <ul style={styles.taskList}>
          {tasks.length === 0 ? (
            <p>No tasks added yet.</p>
          ) : (
            tasks.map((task, index) => (
              <li key={task.id} style={styles.taskItem}>
                <span style={styles.taskIndex}>{index + 1}.</span>
                <div>
                  <strong style={styles.taskText}>{task.text}</strong>
                  <div style={styles.timestamp}>Added on: {task.createdAt}</div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  
  centerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 80px)", // Leaves space for navbar
    padding: "20px",
    
  },
  container: {
    background: "#A9A9A9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: { flex: 1, padding: "8px", fontSize: "16px" },
  button: {
    padding: "8px 12px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  taskList: { listStyle: "none", padding: 0 },
  taskItem: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    marginBottom: "10px",
    background: "#f9f9f9",
    borderRadius: "6px",
  },
  taskIndex: { fontWeight: "bold", color: "#4CAF50" },
  taskText: { color: "#000", fontSize: "16px" },
  timestamp: { fontSize: "12px", color: "#666" },
};

export default Home;
