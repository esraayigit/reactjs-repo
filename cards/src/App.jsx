
import'bulma/css/bulma.css';
import './App.css';
import  Course from './Course';
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Csharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'

function App() {

  return (
    

      <div className="App">
        <section className="hero is-link">
            <div className="hero-body">
             <p className="title">  Kurslarım  </p>
           </div>
          </section>
        <div className='container '>
          <section className='section'>

          </section>
          
          <div className='columns'>
          <div className='column'>
          
          <Course
      image={Angular}
       title="Angular"
       description=
        " Angular, Google'daki Angular Ekibi, bireyler ve şirketler topluluğu tarafından yönetilen TypeScript tabanlı özgür ve açık kaynaklı bir web uygulaması çerçevesidir. Angular, AngularJS'yi oluşturan aynı ekibin eksiksiz bir yeniden yazma işlemidir. "/>

          </div>
          <div className='column'>
        
          <Course
      image={Bootstrap}
       title="BOOTSTRAP5"
       description= "Bootstrap, HTML, CSS ve JavaScript kullanılarak yazılmış, açık kaynaklı ve ücretsiz bir front-end kütüphanesidir. Eski Twitter çalışanları Mark Otto ve Jacob Thornton tarafından oluşturulan bu kütüphane, geliştiricilere duyarlı web siteleri oluşturabilme imkanı sağlar.  "/>
     
        </div>
        <div className='column'>
        
        <Course
     image ={Csharp} 
       title="Csharp"
       description= 
       "  C# Microsoft tarafından .NET Teknolojisi için geliştirilen modern bir programlama dilidir. Sözdizimi C-like bir deneyim sunar. Microsoft tarafından geliştirilmiş olsa da ECMA ve ISO standartları altına alınmıştır. C programlama dilinde bir tam sayı değişkeni 1 artırmak için değişkenden sonra ek kullanılır... "/>
     
        </div>
        <div className='column'>
        
        <Course
     image ={Kompleweb}
       title="Komple Web"
       description= "BLA BLA BLAAAAAA "/>
      
     
            </div>
          </div>
        </div>
      </div>
      
  );
}

export default App;
