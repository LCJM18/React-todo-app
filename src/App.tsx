import Layout from './components/Layout/Layout';
import InputAdd from './components/UI/InputAdd/InputAdd';

function App() {
  return (
    <Layout>
      <section className="w-full max-w-[1000px] h-full flex flex-col items-center justify-center">
        <h1 className="text-[50px] text-white">¿Cúal es el plan para hoy? </h1>
        <div className="mt-5 w-[60%]">
          <InputAdd handleClick={(value: string) => console.log(value)} />
        </div>
      </section>
    </Layout>
  );
}

export default App;
