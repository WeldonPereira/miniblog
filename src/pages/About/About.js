import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl  text-gray-800 mb-4">
        Sobre o Mini<span className="font-black uppercase">Blog</span>
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        Este projeto é um blog desenvolvido com <strong>React</strong> no
        front-end e <strong>Firebase</strong> no back-end, permitindo a criação,
        leitura e gerenciamento de posts em tempo real.
      </p>
      <Link
        to="/posts/create"
        className="inline-block px-5 py-2 text-white rounded-xl hover:bg-green-400 transition"
        style={{ backgroundColor: "#1a8918" }}
      >
        Criar novo post
      </Link>
    </div>
  );
};

export default About;
