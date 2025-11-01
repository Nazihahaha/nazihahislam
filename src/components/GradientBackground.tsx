const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background - darker navy/slate matching reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d4856] via-[#45525f] to-[#4a5768]" />
      
      {/* Dot pattern overlay in corners - red/orange tint */}
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 87, 51, 0.4) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3d4856]/30 to-transparent" />
    </div>
  );
};

export default GradientBackground;
