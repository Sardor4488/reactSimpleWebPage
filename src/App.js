import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logoimg from 'url{}'
 function App() {
  return (
    <div className="App">
      <header className="App-header bordered">
        <div className="container ">
          <img src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/05/logo-lp-e1590594777943.png" alt="" />
          <ul>
             <li> <a  href=""> Accueli </a> </li>
            <li> <a href="">Qui sommes-nous ?</a> </li>
            <li> <a href="">Articles</a></li>
            <li> <a href="">FAQ</a></li>
            <li> <a href="">SGV</a></li>
            <li> <a href=""><i class="bi bi-search"></i></a></li>
          </ul>
        </div>
      </header>
      <section className="bisnes ">
        <div className="container2 p-0">
        <img className='busnisImg' src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/05/write-593333_1920.jpg" alt="" />
          <div className="row">
            <div className="col-7 px-3 ps-4 pt-5 feature "> <h1 className="text-info">Je désire une offre pour ma
              déclaration d’impôts</h1>
              <ul>
                <li> <img src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/05/icon1.png" alt="" /> <h5>Le prix et le service, le meilleur prix sans renoncer au service personnalisé de nos spécialistes</h5> </li>
                <li> <img src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/05/icon2.png" alt="" /> <h5>Payer les impôts de manière juste avec toutes les optimisations possibles</h5></li>
                <li> <img src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/05/icon3.png" alt="" /> <h5>Procédure simple (nous prenons en charge tout le traitement administratif)</h5></li>
                <li> <img src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/05/icon4.png" alt="" /> <h5>Les meilleurs conseils, un service personnalisé par un consultant dédié à votre dossier</h5></li>
                <li> <img className="calculatImg" src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/05/calculator-385506_1280.jpg" alt="" /></li>
              </ul>
              </div>
            <div className="inputsRegister col-5 p-3 bg-succes">
              <h2 className='text-center pt-3 text-info'>Remplissez le formulaire si vous désirez une offre sans engagement </h2>
               <div className='inputs '>
                <p className='fw-bold mt-4'>Civilité</p>
                 <select class="form-select" aria-label="Default select example">
                  <option selected>Man</option>
                  <option value="1">Woman</option>
                  </select> 
                </div>  
                <div className='inputs '>
                <p className='fw-bold mt-4'>Civilité</p>
                 <select class="form-select" aria-label="Default select example">
                  <option selected>Man</option>
                  <option value="1">Woman</option>
                  </select> 
                </div>  
                <div className='inputs '>
                <p className='fw-bold mt-2'>Prénom</p>
                 <input type="text" /> 
                </div>  
                <div className='inputs '>
                <p className='fw-bold mt-2'>Nom</p>
                  <input type="text" />
                </div> 
                <div className='inputs '>
                <p className='fw-bold mt-2'>Date de naissance</p>
                <input type="date" /> 
                </div> 
                <div className='inputs '>
                <p className='fw-bold mt-2'>Rue</p>
                  <input type="text" />
                </div>
                <div className='inputs '>
                <p className='fw-bold mt-2'>Code postal</p>
                  <input type="number" />
                </div>
                <div className='inputs '>
                <p className='fw-bold mt-2'>Ville</p>
                  <input type="text" />
                </div>
                <div className='inputs '>
                <p className='fw-bold mt-2'>Téléphone</p>
                  <input type="text" />
                </div>
                <div className='inputs '>
                <p className='fw-bold mt-2'>E-mail</p>
                  <input type="gmail" />
                </div>  
                <div>
                  <p className='fw-bold mt-2'>Vous êtes</p>
                  <div className='ps-2'>
                  <input className='checkbox ' type="checkbox" /> <span className='fw-bold '>Locataire</span>
                  <input className='checkbox ' type="checkbox" /> <span className='fw-bold '>Propriétaire</span>
                 </div>
                 <div className='inputs pt-2 '>
                  <p className='fw-bold '>Remarques</p>
                  <textarea  name="remarques" id="" cols="40" rows="10"></textarea>
                 </div>
                 <button className='w-100'>Envoyer </button>
                </div>           
             </div>
          </div>
        </div>
      </section>
      <section className='abaut'>
        <div className="container3">
          <h1 className='text-center'>Actualités</h1>
          <div className="row">
            <div className="col-12 col-md-6 p-5">
            <div className="d-flex">
            <img className='h-75 w-50' src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_100%2Cw_180%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/47bfa9ab007a856c90dde4b083d2e127.jpg" alt="" />
              <div className='ps-2'>
                <h5 className='fw-bold'>Les motos à sensation des années 70</h5>
                <span className=' '>Worldemand</span>
              </div>
            </div>
            </div>
            <div className="col-12 col-md-6 p-5">
            <div className="d-flex">
            <img className='h-75 w-50' src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_100%2Cw_180%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/e012f3b3bff856c4c6a153335f01176d.jpg" alt="" />
              <div className='ps-2'>
                <h5 className='fw-bold'>Les motos à sensation des années 70</h5>
                <span className=' '>Worldemand</span>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <img className='aboutImg' src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/06/L%E2%80%99essentiel-de-la-d%C3%A9claration-d%E2%80%99imp%C3%B4ts-en-Suisse-400x250.jpg" alt="" />
              <a href="" className='pt-2 h5 d-block aLink'>L’essentiel de la déclaration d’impôts en Suisse</a>
              <p className='py-2'>L’essentiel de la déclaration d’impôts en Suisse En Suisse la déclaration d’impôts correspond à la déclaration de revenus que chaque contribuable est appelé à déposer chaque année. En tant que confédération rassemblant une vingtaine de cantons, même si l’État fédéral...</p>
              <h5>10 Juin 2020</h5>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img className='aboutImg' src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/06/D%C3%A9claration-d%E2%80%99imp%C3%B4t-%C3%A0-Lausanne-400x250.jpg" alt="" />
              <a href="" className='pt-2 h5 d-block aLink'>Déclaration d’impôt à Lausanne</a>
              <p className='py-2'>Déclaration d’impôt à Lausanne Pour ceux qui se trouvent à Lausanne en Suisse et qui doivent rédiger la déclaration d’impôts, revoir les usages en vigueur en matière fiscale dans notre canton au moment d’établir ladite déclaration est fortement conseillé. Bien que le...</p>
              <h5>10 Juin 2020</h5>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img className='aboutImg' src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/06/La-d%C3%A9claration-d%E2%80%99imp%C3%B4ts-%C3%A0-Gen%C3%A8ve-comment-bien-s%E2%80%99y-pr%C3%A9parer-400x250.jpg" alt="" />
              <a href="" className='pt-2 h5 d-block aLink'>La déclaration d’impôts à Genève : comment bien s’y préparer</a>
              <p className='py-2'>La déclaration d’impôts à Genève : comment bien s’y préparer Nul ne peut objecter que pour se libérer de l’obligation fiscale qui consiste à la déclaration d’impôts, un travail de préparation préalable est nécessaire. Cela s’explique de différentes façons dont la...</p>
              <h5>10 Juin 2020</h5>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img className='aboutImg' src="https://www.impot-suisse-romande.ch/wp-content/uploads/2020/06/D%C3%A9claration-imp%C3%B4t-Fribourg-1-400x250.jpg" alt="" />
              <a href="" className='pt-2 h5 d-block aLink'>Déclaration d’impôts à Fribourg</a>
              <p className='py-2'>Déclaration d’impôts à Fribourg Déclarer ses revenus est une activité fiscale marquante au cours de l’année. Que l’on soit à Fribourg ou ailleurs en Suisse, le moment de remettre la déclaration d’impôts à l’autorité fiscale qui y est en charge au niveau du canton...</p>
              <h5>10 Juin 2020</h5>
            </div>
            <div className="col-12 col-md-6 col-lg-3"></div>
            <div className="col-12 col-md-6 col-lg-3"></div>
            <div className="col-12 col-md-6 col-lg-3"></div>
          </div>
        </div>
      </section>
      <footer>
        <h1 className='footerLinks'><a href="">Qui sommes nous</a> </h1>
        <h1 className='footerLinks'> <a href="">FAQ</a></h1>
        <h1 className='footerLinks'> <a href="">Plan du site</a></h1>
      </footer>
      <div></div>
    </div>
  );
}

export default App;
