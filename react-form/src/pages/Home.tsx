import ClassCard from "../components/classCard";
import turmas from "../mocks/turmas.json";


function Home() {
    return (
        <section>
          {turmas.map((turma) => (
            <ClassCard key={turma.id} turma={turma} />
          ))}
        </section>
    );
}

export default Home;