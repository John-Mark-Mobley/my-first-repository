export default function Home() {
  // Create an array containing numbers from 1 to 100
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Numbers from 1 to 100</h1>
      
      {/* Grid container to cleanly organize the printed numbers */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))', 
        gap: '10px',
        marginTop: '1rem' 
      }}>
        {numbers.map((number) => (
          <div 
            key={number} 
            style={{ 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              textAlign: 'center',
              backgroundColor: '#f9f9f9'
            }}
          >
            {number}
          </div>
        ))}
      </div>
    </main>
  );
}
