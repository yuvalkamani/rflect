import { motion } from "framer-motion";
import Button from "./components/Button";
import Card from "./components/Card";
import Folders from "./components/Folder";
import "./App.css";

function App() {
  const cards = [
    "Your new journal journey",
    "Different than any other",
    "Just throw your thoughts",
    "Take the weight off your shoulders",
  ];

  return (
    <div>
      <h1 className="title">rflect.</h1>
      <h2 className="startNow">start journaling now</h2>
      <div className="cards">
        <Card name="your new journal journey"></Card>
        <Card name="different than any other"></Card>
        <Card name="just throw in your thoughts"></Card>
        <Card name="take the weight off your shoulders"></Card>
      </div>
    </div>
  );
}

export default App;
