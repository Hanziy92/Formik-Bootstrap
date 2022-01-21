
import WorkForm from '../form/form';


// сюди йде імпорт 
import './app.css';


function App() {
   return (
      <div className="bg">
         <div className="bg__img"></div>
            <div className='bg__form'>
               <WorkForm/>
            </div>           
      </div>
      
   );
}


export default App;