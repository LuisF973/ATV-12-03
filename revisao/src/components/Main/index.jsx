import React from "react";
import Band from "../Band/index";
import styles from "./Main.module.css"


const bandas = [
    {
        nome: 'Banda 1',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome: 'Banda 2',
        imagem: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome: 'Banda 3',
        imagem: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome: 'Banda 4',
        imagem: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },


];


function Main() {
    return (
        <main className={styles.main}>
            {
                bandas.map((banda, index) => (
                    <section>
                        <Band key={index} {...banda} />
                    </section>


                ))
            }

            {/* <section>
            <Band imagem="https://static.vecteezy.com/ti/vetor-gratis/p3/2972281-simbolo-do-rock-n-roll-conceito-arte-do-rock-music-em-estilo-monocromatico-vetor.jpg" nome="Banda 1" descricao="Banda legal"/>
            </section> */}
        </main>
    );
}

export default Main;