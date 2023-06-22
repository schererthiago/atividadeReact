import Card from "../../componentes/Card/Card"

function Home(props){

    console.log(props.reproduz)
    return(
    <>
    <section class="painel-de-videos">
                
                <Card 
                reproduz={props.reproduz}
                titulo={"Titulo do video 1"}
                link={"https://picsum.photos/400/400?a=1"}
                />
                <Card reproduz={props.reproduz}
                titulo={"Titulo do video 2"}
                link={"https://picsum.photos/400/400?a=2"}
                />
                <Card reproduz={props.reproduz}
                titulo={"Titulo do video 3"}
                link={"https://picsum.photos/400/400?a=3"}
                />
                <Card reproduz={props.reproduz}
                titulo={"Titulo do video 4"}
                link={"https://picsum.photos/400/400?a=4"}
                />
                <Card reproduz={props.reproduz}
                titulo={"Titulo do video 5"}
                link={"https://picsum.photos/400/400?a=5"}
                />
                <Card reproduz={props.reproduz}
                titulo={"Titulo do video 6"}
                link={"https://picsum.photos/400/400?a=6"}
                />
                <Card reproduz={props.reproduz}
                titulo={"Titulo do video 7"}
                link={"https://picsum.photos/400/400?a=7"}
                />
                <Card reproduz={props.reproduz}
                titulo={"Titulo do video 8"}
                link={"https://picsum.photos/400/400?a=8"}
                />


                
    </section>
    </>
    )
}

export default Home