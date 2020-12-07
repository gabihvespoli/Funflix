import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Estrelando um garoto de 12 anos chamado Douglas Yancey 'Doug' Funnie. Doug gosta de narrar seu cotidiano e escrever em seu diário todas as suas dúvidas, alegrias e tristezas. Ele gosta muito de imaginar o que poderia acontecer no futuro e também gosta de imaginar que é um super-herói chamado Homem-Codorna."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
