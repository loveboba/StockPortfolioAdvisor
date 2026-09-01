import { useEffect, useState } from "react";
import Graph, { type individualStock, type wholeGraph } from "./Graph";
import GraphMoney from "./GraphMoney";
import GraphRisk, { type riskwholeGraph } from "./GraphRisk";
import GraphSector from "./GraphSector";
import AskAI from "./AskAI";

function JSONbox() {
  // save the JSON file
  const [the_file, set_the_file] = useState<File | null>(null);
  // for graph
  const [file_for_graph, set_graph] = useState<wholeGraph["stock_name"]>([]);
  // let file_for_graph;

  // risk graph
  const [risk_graph, set_risk_graph] = useState<
    riskwholeGraph["other_risk_stuff"]
  >({ low_risk: 0, average_risk: 0, high_risk: 0 });

  // set the file after event
  const setFile = (file_event: React.ChangeEvent<HTMLInputElement>) => {
    if (file_event.target.files && file_event.target.files.length > 0) {
      // the array is not null and at least one file
      if (
        file_event.target.files[0].name.endsWith(".json") ||
        file_event.target.files[0].type == "application/json"
      ) {
        set_the_file(file_event.target.files[0]);
      } else {
        alert("Not a valid JSON file!");
        file_event.target.value = "";
      }
    }
  };
  // send the file to the backend
  const sendBackend = async (
    upload_event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    // verify file exists
    if (!the_file) {
      alert("You didn't upload anything!");
      return;
    }
    // Form Data to send to the backend
    const to_the_backend = new FormData();
    // set up with correct label
    to_the_backend.append("theJSONfile", the_file);

    // connect to the backend
    await fetch("http://127.0.0.1:8000/json", {
      method: "POST",
      body: to_the_backend,
    })
      .then((the_response) => the_response.json())
      //.then((json_response) => alert(json_response.working_or_not))
      .then((json_response) => {
        console.log(json_response);
        console.log("Above is the json_response");
        set_graph(json_response.json_file.stock);
        // RISK GRAPH
        set_risk_graph(json_response.risk_file);
      }) // alert(json_response.json_file))
      .catch((error: unknown) => {
        console.error("Error", error);
      });
  };

  return (
    <div>
      <input
        type="file"
        accept=".json, application/json"
        onChange={setFile}
      ></input>{" "}
      <button onClick={sendBackend}>Click to upload your file!</button>
      <Graph stock_name={file_for_graph}></Graph>
      <GraphMoney stock_name={file_for_graph}></GraphMoney>
      <GraphRisk other_risk_stuff={risk_graph}></GraphRisk>
      <GraphSector stock_name={file_for_graph}></GraphSector>
      <AskAI></AskAI>
    </div>
  );
}

export default JSONbox;
