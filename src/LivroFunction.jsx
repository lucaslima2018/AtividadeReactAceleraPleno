
// function Capitulo(props) {
//     return <h2>Capítulo {props.numero} - {props.titulo}</h2>;
// }

const livros = [
    {
        id: 1,
        titulo: "LIVRO",
        capitulos: [
            { numero: "1", nome: "Introdução" },
            { numero: "2", nome: "Desenvolvimento" },
            { numero: "3", nome: "Conclusão" }
        ]
    }
]


function Livro() {

    // const capitulos = [
    //     { numero: "1", nome: "Introdução" },
    //     { numero: "2", nome: "Desenvolvimento" },
    //     { numero: "3", nome: "Conclusão" }
    // ]


    // console.log(capitulos);

    return (
        <>
            {livros.map(livro => (
                <div>
                    <h1 key={livro.id}>Título - {livro.titulo}</h1>
                    <ul>
                        {livro.capitulos.map((item) => {
                            return(
                            <li key={item.numero}>Capítulo {item.numero} - {item.nome}</li>
                            )
                        })}
                    </ul>
                </div>
            ))}

            {/* {capitulos.map((capitulo) => {
                return <Capitulo key={"capitulo-" + capitulo.numero} numero={capitulo.numero} titulo={capitulo.nome} />
            })} */}

            {/* {livros.map((livro) => {
                return <Livro key={"capitulo-" + livro.numero} />
            })} */}

        </>
    );
}

export default Livro;