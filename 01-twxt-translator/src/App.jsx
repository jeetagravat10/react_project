import { useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextTranslation = async () => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "x-rapidapi-key": "978ff19988msh187227bf03854f6p1aead2jsn4f77e79922ff",
          "x-rapidapi-host": "google-translator9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          q: textInput,
          source: "en",
          target: selectValue,
          format: "text",
        },
      };

      const response = await axios.request(options);
      setResult(
        response?.data?.data?.translations?.[0]?.translatedText || ""
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-y-10">
        {/* Title */}
        <h1 className="text-3xl text-zinc-700 font-bold">Text Translator</h1>

        {/* Input & Output */}
        <div className="flex flex-col gap-y-5">
          <textarea
            name="input-text"
            placeholder="Enter text here..."
            className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2"
            onChange={(e) => setTextInput(e.target.value)}
          />
          <textarea
            name="output-text"
            className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2"
            value={result}
            readOnly
          />
        </div>

        {/* Dropdown */}
        <div className="flex items-center gap-3">
          <label htmlFor="options" className="text-base font-medium text-zinc-700">
            Convert Into:
          </label>
          <select
            name="value"
            size={3} 
            className="bg-white px-2 py-1 rounded-lg border border-zinc-700 outline-none cursor-pointer"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="">Select</option>
            <option value="hi">Hindi</option>
            <option value="gu">Gujarati</option>
            <option value="bn">Bengali</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="mr">Marathi</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="pa">Punjabi</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="fr">French</option> 
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>
        </div>

        {/* Translate Button */}
        <button
          className="bg-slate-700 text-slate-100 mx-auto w-[500px] py-2 rounded-lg cursor-pointer flex items-center justify-center"
          onClick={handleTextTranslation}
          disabled={!textInput || !selectValue}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Translate"}
        </button>
      </div>
    </div>
  );
}

export default App;