import pythonIcon from "@/assets/python-icon.png";
import flaskIcon from "@/assets/flask-framework-icon.png";
import sklearnIcon from "@/assets/sklearn-icon.png";

const FloatingIcons = () => {
  return (
    <>
      {/* Python Icon - Top Right */}
      <div
        className="absolute animate-float"
        style={{
          top: "5%",
          right: "-8%",
          animationDelay: "0s",
          animationDuration: "3s",
        }}
      >
        <img
          src={pythonIcon}
          alt="Python"
          className="w-20 h-20 sm:w-24 sm:h-24 opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Flask Icon - Middle Left */}
      <div
        className="absolute animate-float"
        style={{
          top: "45%",
          left: "-12%",
          animationDelay: "1s",
          animationDuration: "3.5s",
        }}
      >
        <img
          src={flaskIcon}
          alt="Flask"
          className="w-16 h-16 sm:w-20 sm:h-20 opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Scikit-learn Icon - Bottom Right */}
      <div
        className="absolute animate-float"
        style={{
          bottom: "8%",
          right: "-10%",
          animationDelay: "2s",
          animationDuration: "4s",
        }}
      >
        <img
          src={sklearnIcon}
          alt="Scikit-learn"
          className="w-20 h-20 sm:w-24 sm:h-24 opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </>
  );
};

export default FloatingIcons;
