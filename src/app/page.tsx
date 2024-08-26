import * as webllm from "@mlc-ai/web-llm";
import DownloadButton from "./DownloadButton";

export default function Home() {
  const availableModels = webllm.prebuiltAppConfig.model_list.map(
    (m: { model_id: any }) => m.model_id,
  );

  return (
    <main>
      <div className="nice-form-group">
        <label>Select model:</label> 
        <select id="model-selection" defaultValue="Llama-3-8B-Instruct-q4f32_1-MLC-1k" className="custom-select">
          {availableModels.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>
          <DownloadButton availableModels={availableModels} />
      </div>
    </main>
  );
}