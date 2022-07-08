import { useState } from "react"
import Results from "./components/Results"

export default function Home() {
  const [url, setUrl] = useState('')
  const [content, setContent] = useState({})

  const submitUrl = async () => {

    // make request
    const response = await fetch('/api/getvideoresults', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'url': url
      })
    })

    // convert response to json
    const data = await response.json()

    // set content state
    setContent(data)
  }

  return (
    <div className="container mx-auto pt-10 px-5 max-w-xl">

      <div className="flex justify-center">
        <p className="text-2xl">
          SpankBang downloader
        </p>
      </div>

      <div className="flex justify-center my-10">
        <input
          className="border border-2 p-4 w-full"
          placeholder="Paste in a video link"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <button
          className="p-4 bg-slate-500 rounded-xl text-white w-2/5"
          onClick={submitUrl}
        >
          Submit
        </button>
      </div>


      <div className="flex justify-center my-10">
        {Object.keys(content).length !== 0 ? <Results content={content} /> : null}
      </div>

    </div>
  )
}
