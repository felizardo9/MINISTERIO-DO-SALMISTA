const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-liturgy-blue">
          O Ministério dos Salmistas na Liturgia 
        </a>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600"></span>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}>
          <div className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            <a href="#" className="hover:text-liturgy-blue">Home</a>
            <a href="#sobre" className="hover:text-liturgy-blue">Sobre</a>
            <a href="#ebook" className="hover:text-liturgy-blue">eBook</a>
            <a href="#servicos" className="hover:text-liturgy-blue">Serviços</a>
            <a href="#contato" className="hover:text-liturgy-blue">Contato</a>
            <a 
              href="https://drive.google.com/file/d/1ztl3l9smLPVEt3gL9k2dAQCJX5jUzTH3/view?usp=drive_link"
              target="_blank"
              className="bg-liturgy-blue text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Baixe o eBook Grátis
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-liturgy-blue mb-4">
        Inspirando a Fé através da Liturgia
      </h1>
      <p className="text-xl mb-8">
        Recursos e formação para salmistas e comunidades católicas
      </p>
      <a 
        href="https://drive.google.com/file/d/1ztl3l9smLPVEt3gL9k2dAQCJX5jUzTH3/view?usp=drive_link"
        target="_blank"
        className="inline-block bg-liturgy-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
      >
        Conheça o eBook 'O Ministério dos Salmistas'
      </a>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-serif font-bold text-center mb-8">Quem Somos</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-8">
          O Ministério dos Salmistas na Liturgia é uma iniciativa dedicada a fortalecer a espiritualidade católica, 
          oferecendo recursos como o eBook 'O Ministério dos Salmistas Católicos na Liturgia', 
          criado por Felizardo Bonifácio João. Nossa missão é formar salmistas e inspirar 
          comunidades a viverem a Palavra de Deus com amor e unção.
        </p>
        <img 
          src="https://images.pexels.com/photos/236339/pexels-photo-236339.jpeg" 
          alt="Celebração litúrgica" 
          className="rounded-lg shadow-lg mb-8 w-full"
        />
      </div>
    </div>
  </section>
);

const Ebook = () => (
  <section id="ebook" className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-serif font-bold text-center mb-8">
        O Ministério dos Salmistas Católicos na Liturgia
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-serif text-center mb-6">
            Um Guia Completo e Inspirador para a Missão do Salmista
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://github.com/felizardo9/MINISTERIO-DO-SALMISTA/blob/main/ChatGPT%20Image%20May%205%2C%202025%2C%2012_45_55%20PM.png" 
                alt="Capa do eBook O Ministério dos Salmistas Católicos na Liturgia por Felizard Bonifácio João" 
                className="rounded-lg shadow mb-4 w-full"
              />
              <div className="text-center">
                <a 
                  href="https://drive.google.com/file/d/1ztl3l9smLPVEt3gL9k2dAQCJX5jUzTH3/view?usp=drive_link"
                  target="_blank"
                  className="inline-block bg-liturgy-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Baixe o eBook Grátis
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">O que você vai encontrar:</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-liturgy-blue mr-2">✓</span>
                  Fundamentos bíblicos e teológicos dos salmos
                </li>
                <li className="flex items-center">
                  <span className="text-liturgy-blue mr-2">✓</span>
                  Dicas para ensaios e postura
                </li>
                <li className="flex items-center">
                  <span className="text-liturgy-blue mr-2">✓</span>
                  Testemunhos inspiradores
                </li>
                <li className="flex items-center">
                  <span className="text-liturgy-blue mr-2">✓</span>
                  Recursos litúrgicos
                </li>
              </ul>
              <blockquote className="italic mt-6 p-4 bg-blue-50 rounded">
                "Ser salmista mudou minha vida. Sinto Deus falar através de mim." 
                <footer className="mt-2 font-semibold">– Ana, Maputo</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-serif font-bold text-center mb-8">Nossos Serviços</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">eBooks e Guias</h3>
          <p>Recursos litúrgicos para sua formação espiritual</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Formações</h3>
          <p>Cursos online e presenciais para salmistas</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Consultoria</h3>
          <p>Apoio para ministérios de música</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="py-16 bg-blue-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-serif font-bold mb-8">Entre em Contato</h2>
      <p className="text-lg mb-6">
        Tem dúvidas ou quer colaborar com a Feliz Soluções?
      </p>
      <a 
        href="mailto:felizardobonifacio9@gmail.com"
        className="inline-block bg-liturgy-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors mb-8"
      >
        Enviar E-mail
      </a>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Apoie nossa missão</h3>
        <p className="mb-4">
          Faça uma doação via:
        </p>
        <div className="space-y-2">
          <p>E-Mola: 870807676 (Falizardo Bonifacio Joao)</p>
          <p>PayPal: felizardobonifacio9@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-liturgy-blue text-white py-8">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <p className="mb-4 font-serif italic">
          "Cantemos ao Senhor, aclamemos o Rochedo da nossa salvação." (Salmo 95:1)
        </p>
        <p className="text-sm">© 2025 Feliz Soluções. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const App = () => (
  <React.Fragment>
    <Header />
    <main>
      <Hero />
      <About />
      <Ebook />
      <Services />
      <Contact />
    </main>
    <Footer />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
