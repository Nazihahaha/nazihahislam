const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d3748] via-[#3d4a5c] to-[#4a5568]" />
      
      {/* Dot pattern overlay in corners */}
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      <div 
        className="absolute top-0 right-0 w-64 h-64 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
    </div>
  );
};

export default GradientBackground;
