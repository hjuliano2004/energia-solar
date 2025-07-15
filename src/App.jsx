import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <a href="#sobre-nos">Sobre Nós</a>
        <a href="#porque-investir">Por que investir</a>
        <a href="#">Produtos</a>
        <a href="#">Orçamento</a>
      </nav>

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
          <li>retorno em forma de energia gratuita, em até 6 anos é como se </li>
          <li>você pode vender a energia excessíva</li>
          <li>consumo ilimitado de energia(de acordo com o nivel de produção de energia)</li>
          <li>bleckouts não te afetarão</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
