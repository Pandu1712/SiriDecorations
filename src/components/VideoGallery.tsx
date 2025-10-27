

// ✅ Import all your videos here
import wedding1 from "../assets/videos/wedding1.mp4.mp4";
import wedding2 from "../assets/videos/wedding1.mp4.mp4";
import birthday1 from "../assets/videos/wedding1.mp4.mp4";
import birthday2 from "../assets/videos/wedding1.mp4.mp4";
import festival1 from "../assets/videos/wedding1.mp4.mp4";
import corporate1 from "../assets/videos/wedding1.mp4.mp4";

const VideoGallery = () => {
  // ✅ Add all videos inside this array
  const videos = [
    { src: wedding1, title: "Wedding Celebration" },
    { src: wedding2, title: "Elegant Wedding Decor" },
    { src: birthday1, title: "Birthday Party Highlights" },
    { src: birthday2, title: "Colorful Birthday Moments" },
    { src: festival1, title: "Festival Decorations" },
    { src: corporate1, title: "Corporate Event Setup" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-8">
        Event Highlights 🎬
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {videos.map((video, index) => (
          <div key={index} className="relative group">
            <video
              src={video.src}
              controls
              className="rounded-2xl shadow-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            ></video>
            <p className="mt-2 text-lg font-semibold text-gray-700">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
