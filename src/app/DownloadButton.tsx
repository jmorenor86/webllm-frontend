"use client";

import React, { useState } from "react";
import * as webllm from "@mlc-ai/web-llm";

const DownloadButton: React.FC<{ availableModels: string[] }> = ({ availableModels }) => {
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    const selectedModel = (document.getElementById("model-selection") as HTMLSelectElement).value;
    console.log("Downloading model:", selectedModel);
    const engine = new webllm.MLCEngine();
    engine.setInitProgressCallback(updateEngineInitProgressCallback);
    const config = {
      temperature: 1.0,
      top_p: 1,
    };
    await engine.reload(selectedModel, config);
  };

  const updateEngineInitProgressCallback = (report: any) => {
    console.log("initialize", report.progress);
    setProgress(report.progress);
  };

  return (
    <div>
      <button id="download" className="btn" onClick={handleDownload}>
        Download
      </button>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress * 100}%` }}></div>
      </div>
      <p id="download-status" style={{ display: progress === 1 ? "block" : "none" }}>
         Download complete!
      </p>
    </div>
  );
};

export default DownloadButton;