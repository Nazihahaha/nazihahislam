import pythonIcon from "@/assets/python-icon.png";
import flaskIcon from "@/assets/flask-icon.png";
import mlIcon from "@/assets/ml-icon.png";

const FloatingIcons = () => {
  return (
    <>
      {/* Python Icon - Top Left */}
      <div
        className="absolute animate-float"
        style={{
          top: "10%",
          left: "-15%",
          animationDelay: "0s",
          animationDuration: "3s",
        }}
      >
        <img
          src={pythonIcon}
          alt="Python"
          className="w-16 h-16 sm:w-20 sm:h-20 opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Flask Icon - Top Right */}
      <div
        className="absolute animate-float"
        style={{
          top: "15%",
          right: "-10%",
          animationDelay: "1s",
          animationDuration: "3.5s",
        }}
      >
        <img
          src={flaskIcon}
          alt="Flask"
          className="w-14 h-14 sm:w-16 sm:h-16 opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* ML Icon - Bottom */}
      <div
        className="absolute animate-float"
        style={{
          bottom: "10%",
          left: "-10%",
          animationDelay: "2s",
          animationDuration: "4s",
        }}
      >
        <img
          src={mlIcon}
          alt="Machine Learning"
          className="w-16 h-16 sm:w-20 sm:h-20 opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </>
  );
};

export default FloatingIcons;
