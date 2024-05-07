import Chart from './chart';
import Chart2 from './chart2';
import Chart3 from './chart3';
import './app.css'; 

function App() {
  return (
    <div className="container">
      <Chart/>
      <div className='divs2'>
        <div className='chart2'>
        <Chart2/>
        </div>
        <div className='chart3'>
        <Chart3/>
        </div>
      </div>
    </div>
  );
}

export default App;
