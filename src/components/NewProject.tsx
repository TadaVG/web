import { useState } from "react";

const HorizontalVideo = () => {
  const [script, setScript] = useState("");
  const [videoTopic, setVideoTopic] = useState("Finance");
  const [customTopic, setCustomTopic] = useState("");
  const [voiceType, setVoiceType] = useState("Male");
  const [videoOrientation, setVideoOrientation] = useState("Horizontal");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "completed">("idle");
  const [_videoId, setVideoId] = useState<string | null>(null);// ✅ Backend'den dönen video ID

  // ✅ TXT Dosyası Yükleme Fonksiyonu
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "text/plain") {
      alert("Please upload a .txt file!");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setScript(text);
    };
    reader.readAsText(file);
  };

  // ✅ Video Üretme Fonksiyonu (Backend ile İletişim)
  const handleGenerateVideo = async () => {
    if (!script) {
      alert("Please enter a script to generate a video.");
      return;
    }

    setStatus("processing");

    // ✅ Backend'e video oluşturma isteği gönder
    try {
      const response = await fetch("https://video-generator.xyz/generate-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script,
          videoTopic: videoTopic === "Other" ? customTopic : videoTopic,
          voiceType,
          videoOrientation,
        }),
      });

      const data = await response.json();

      if (data.videoId) {
        setVideoId(data.videoId);
        checkVideoStatus(data.videoId); // ✅ Video hazır mı kontrol et
      } else {
        throw new Error("Failed to generate video");
      }
    } catch (error) {
      console.error("Error generating video:", error);
      setStatus("idle");
      alert("Error generating video. Please try again.");
    }
  };

  // ✅ Video Hazır Olana Kadar Backend'den Kontrol Et
  const checkVideoStatus = async (videoId: string) => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`https://your-backend-api.com/video-status/${videoId}`);
        const data = await response.json();

        if (data.status === "completed" && data.videoUrl) {
          setVideoUrl(data.videoUrl);
          setStatus("completed");
          clearInterval(interval); // ✅ Video hazırsa kontrol etmeyi bırak
        }
      } catch (error) {
        console.error("Error checking video status:", error);
      }
    }, 5000); // ✅ 5 saniyede bir kontrol et
  };

  return (
    <div
      className="w-screen min-h-screen relative flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('https://xqgftsgrnwtzdsuziqsj.supabase.co/storage/v1/object/public/bg/background4.jpg')" }}
    >
  
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-[90%] max-w-md max-h-screen overflow-y-auto mt-[100px]">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Generate Video</h1>

        {/* ✅ Video Orientation Seçimi */}
        <div className="mb-3 text-left">
          <label className="text-md font-semibold text-gray-800">Select Video Orientation:</label>
          <select
            className="block w-full mt-2 p-2 border rounded-lg text-gray-900"
            value={videoOrientation}
            onChange={(e) => setVideoOrientation(e.target.value)}
          >
            <option>Horizontal</option>
            <option>Vertical</option>
          </select>
        </div>

        {/* ✅ Video Topic Seçimi */}
        <div className="mb-3 text-left">
          <label className="text-md font-semibold text-gray-800">Select Video Topic:</label>
          <select
            className="block w-full mt-2 p-2 border rounded-lg text-gray-900"
            value={videoTopic}
            onChange={(e) => setVideoTopic(e.target.value)}
          >
            <option>Finance</option>
            <option>Gaming</option>
            <option>Technology</option>
            <option>Health</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </div>

        {/* ✅ Eğer "Other" seçildiyse özel konu alanı açılacak */}
        {videoTopic === "Other" && (
          <div className="mb-3 text-left">
            <label className="text-md font-semibold text-gray-800">Enter Custom Topic:</label>
            <input
              type="text"
              className="block w-full mt-2 p-2 border rounded-lg text-gray-900"
              placeholder="Enter custom topic..."
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
            />
          </div>
        )}

        {/* ✅ Ses Seçimi */}
        <div className="mb-3 text-left">
          <label className="text-md font-semibold text-gray-800">Choose Voice Type:</label>
          <select
            className="block w-full mt-2 p-2 border rounded-lg text-gray-900"
            value={voiceType}
            onChange={(e) => setVoiceType(e.target.value)}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* ✅ Script Alanı */}
        <textarea
          className="w-full h-24 p-2 border rounded-lg text-gray-900"
          placeholder="Enter your script here..."
          value={script}
          onChange={(e) => setScript(e.target.value)}
        ></textarea>

        {/* ✅ TXT Yükleme Butonu */}
        <div className="mt-3">
          <label className="block text-sm font-semibold text-gray-800">📂 Upload .txt File:</label>
          <input
            type="file"
            accept=".txt"
            className="block w-full mt-2 p-2 border rounded-lg text-gray-900 cursor-pointer"
            onChange={handleFileUpload}
          />
        </div>

        <button
  onClick={handleGenerateVideo}
  className="mt-3 w-full px-4 py-2 bg-blue-600 text-black dark:bg-blue-800 dark:text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition flex items-center justify-center gap-2"
>
  🎬 Generate Video
</button>



        {/* ✅ Video İşlenirken */}
        {status === "processing" && <p className="mt-3 text-yellow-500">⏳ Processing video...</p>}

        {/* ✅ Video Hazırsa */}
        {status === "completed" && videoUrl && (
          <div className="mt-4">
            <p className="text-green-500 font-bold">Video Ready!</p>
            <video className="mt-3 w-full border rounded-lg" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalVideo;
