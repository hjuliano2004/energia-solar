import "./App.css";
import { Footer } from "./componentes/footer";
import { Nav } from "./componentes/Nav";

function App() {
  return (
    <div>
      <Nav />

      <section id="sobre-nos">
        <h2>Sobre Nós</h2>
        <figure><img src="https://tse4.mm.bing.net/th/id/OIP.4N2m5-MJ--I8lq6YXN6XogHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"></img></figure>

        <p>Somos a empresa com maior indice de dispositivos mais eficientes energeticamente, garantimos que o consumidor gere mais energia com menor produção de lixo na fabricação e venda dos nossos painéis</p>
 
        <div>
          <h3>por quê nos escolher?</h3>
          <ul>
            <li>paineis 80% mais eficientes</li>
            <li>embalagens biodegradáveis</li>
            <li>maior durabilidade e menor necessidade de manutenção</li>
            <li>tradição e confiança</li>
          </ul>
        </div>
      </section>

      <section id="porque-investir">
        <h2>por que investir em energia solar?</h2>
        <ul>
          <li>é como pagar 6 anos de energia pra ter energia infinita </li>
          <li>você pode vender a energia excessíva</li>
          <li>consumo ilimitado de energia(de acordo com o nivel de produção de energia)</li>
          <li>bleckouts não te afetarão</li>
        </ul>
      </section>

      <section id="produtos">

        <h2>produtos</h2>

        <section>
        <div>
          <figure><img src="https://www.neosolar.com.br/media/catalog/product/cache/3baa78894a6170a4fe1da4f78d1c9db0/z/t/ztp-010mi.jpg"></img></figure>
          <h3>placa solar YELLOW RAY P5-M4 h16 100W</h3>
          <p>placa 100 watts média, uso doméstico</p>
        </div>
        
        <div>
          <figure><img src="https://http2.mlstatic.com/D_NQ_NP_914796-MLB44192298629_112020-O-kit-placa-solar-100w-controlador-30a-bateria-70ah.webp"></img></figure>
          <h3>kit energia solar básico</h3>
          <p>kit placa média 200w, controlador 30a, bateria 70ah</p>
        </div>
        <div>
          <figure><img src="https://tse4.mm.bing.net/th/id/OIP.GtVDM-H1ApaQZ7xO9XqrnwHaJ4?w=720&h=960&rs=1&pid=ImgDetMain&o=7&rm=3"></img></figure>
          <h3>torre de placas</h3>
          <p>torre de placas, 16 slots de placas 200w</p>
        </div>
      </section>
      </section>

      <section id="orcamento">
        <h1>Orçamento</h1>
        <form>
          
          <div id="inputs">
            <div>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" required />
          </div>

          <div>
            <label htmlFor="telefone">Telefone:</label>
            <input id="telefone" type="number" required />
          </div>

          <div>
            <label htmlFor="tipoSistema">Tipo de sistema</label>
            <input id="tipoSistema" type="text" required />
          </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default App;
